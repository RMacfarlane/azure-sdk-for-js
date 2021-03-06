// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import "chai/register-should";
import * as http from "http";
import { createReadStream } from "fs";

import { DefaultHttpClient } from "../src/defaultHttpClient";
import { WebResource, TransferProgressEvent } from "../src/webResource";
import { getHttpMock, HttpMockFacade } from "./mockHttp";
import { PassThrough } from "stream";
import { ReportTransform } from "../src/fetchHttpClient";

describe("defaultHttpClient (node)", function() {
  let httpMock: HttpMockFacade;
  beforeEach(() => {
    httpMock = getHttpMock();
    httpMock.setup();
  });
  afterEach(() => httpMock.teardown());
  after(() => httpMock.teardown());

  it("should not overwrite a user-provided cookie (nodejs only)", async function() {
    // Cookie is only allowed to be set by the browser based on an actual response Set-Cookie header
    httpMock.get("http://my.fake.domain/set-cookie", {
      status: 200,
      headers: {
        "Set-Cookie": "data=123456"
      }
    });

    httpMock.get("http://my.fake.domain/cookie", async (_url, _method, _body, headers) => {
      return {
        status: 200,
        headers: headers
      };
    });

    const client = new DefaultHttpClient();

    const request1 = new WebResource("http://my.fake.domain/set-cookie");
    const response1 = await client.sendRequest(request1);
    response1.headers.get("Set-Cookie")!.should.equal("data=123456");

    const request2 = new WebResource("http://my.fake.domain/cookie");
    const response2 = await client.sendRequest(request2);
    response2.headers.get("Cookie")!.should.equal("data=123456");

    const request3 = new WebResource("http://my.fake.domain/cookie", "GET", undefined, undefined, {
      Cookie: "data=abcdefg"
    });
    const response3 = await client.sendRequest(request3);
    response3.headers.get("Cookie")!.should.equal("data=abcdefg");
  });

  it("should send HTTP requests", async function() {
    const localPort = 32293;
    const responseContent = "<html><body><marquee>Under Construction</marquee></body></html>";
    const localServer = http
      .createServer(function(_req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(responseContent);
        res.end();
      })
      .listen(localPort);

    httpMock.passThrough();
    const request = new WebResource(`http://127.0.0.1:${localPort}`, "GET");
    const httpClient = new DefaultHttpClient();

    const response = await httpClient.sendRequest(request);

    // Clean up the server before asserting
    localServer.close();

    assert.deepEqual(response.request, request);
    assert.strictEqual(response.status, 200);
    assert(response.headers);
    assert.strictEqual(response.headers.get("content-type")!.split(";")[0], "text/html");
    const responseBody: string | null | undefined = response.bodyAsText;
    assert.strictEqual(responseBody, responseContent);

    httpMock.teardown();
  });

  describe("should report upload and download progress", () => {
    type Notified = { notified: boolean };
    const listener = (operationStatus: Notified, ev: TransferProgressEvent) => {
      operationStatus.notified = true;
      if (typeof ProgressEvent !== "undefined") {
        ev.should.not.be.instanceof(ProgressEvent);
      }
      ev.loadedBytes.should.be.a("Number");
    };

    it("for stream bodies", async function() {
      let payload = () => createReadStream(__filename);

      const size = payload.toString().length;

      httpMock.post("/bigfileupload", async (_url, _method, _body) => {
        return {
          status: 250,
          body: payload,
          headers: { "Content-Type": "text/javascript", "Content-length": size }
        };
      });

      const upload: Notified = { notified: false };
      const download: Notified = { notified: false };

      const request = new WebResource(
        "/bigfileupload",
        "POST",
        payload,
        undefined,
        undefined,
        true,
        undefined,
        undefined,
        0,
        (ev) => listener(upload, ev),
        (ev) => listener(download, ev)
      );

      const client = new DefaultHttpClient();
      const response = await client.sendRequest(request);
      response.status.should.equal(250);
      if (response.blobBody) {
        await response.blobBody;
      } else if (typeof response.readableStreamBody === "function") {
        const streamBody = (response.readableStreamBody as Function)();
        streamBody.on("data", () => {});
        await new Promise((resolve, reject) => {
          streamBody.on("end", resolve);
          streamBody.on("error", reject);
        });
      }

      upload.notified.should.be.true;
      download.notified.should.be.true;
    });
  });
});

describe("ReportTransform", function() {
  it("should not modify the stream data", function() {
    const a = new PassThrough();
    const b = new PassThrough();
    const callback = () => {};
    const report = new ReportTransform(callback);
    a.pipe(report, { end: false }).pipe(b, { end: false });
    a.write("hello");
    const transformed = b.read();
    transformed.toString().should.equal("hello");
  });
});
