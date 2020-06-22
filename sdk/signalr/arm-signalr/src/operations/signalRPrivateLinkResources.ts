/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/signalRPrivateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { SignalRManagementClientContext } from "../signalRManagementClientContext";

/** Class representing a SignalRPrivateLinkResources. */
export class SignalRPrivateLinkResources {
  private readonly client: SignalRManagementClientContext;

  /**
   * Create a SignalRPrivateLinkResources.
   * @param {SignalRManagementClientContext} client Reference to the service client.
   */
  constructor(client: SignalRManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the private link resources that need to be created for a SignalR resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the SignalR resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignalRPrivateLinkResourcesListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SignalRPrivateLinkResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the SignalR resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceList>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the SignalR resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceList>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceList>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceList>): Promise<Models.SignalRPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SignalRPrivateLinkResourcesListResponse>;
  }

  /**
   * Get the private link resources that need to be created for a SignalR resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignalRPrivateLinkResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SignalRPrivateLinkResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceList>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceList>): Promise<Models.SignalRPrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SignalRPrivateLinkResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
