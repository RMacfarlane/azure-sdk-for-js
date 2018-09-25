/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/usagesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a Usages. */
export class Usages {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a Usages.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the
   * subscription.
   *
   * @param {string} location The location of the Azure Storage resource.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByLocation(location: string): Promise<Models.UsagesListByLocationResponse>;
  listByLocation(location: string, options: msRest.RequestOptionsBase): Promise<Models.UsagesListByLocationResponse>;
  listByLocation(location: string, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  listByLocation(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  listByLocation(location: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UsageListResult>): Promise<Models.UsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.UsagesListByLocationResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
