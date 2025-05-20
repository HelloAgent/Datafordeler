import {
  AuthConfig,
  Client,
  ClientBaseConfig,
  Endpoint,
  RequestBuilder,
} from '@datafordeler/core';

import { Livscyklus } from './livscyklus';
import type {
  BBRBygningRequest,
  BBRBygningResponse,
  BBRBygningResponseUdenDybde,
  BBRSagRequest,
  BBRSagResponse,
  BBRSagResponseUdenDybde,
} from './types';

export type BBRClientConfig = ClientBaseConfig & AuthConfig;

export class BBR extends Client<BBRClientConfig> {
  private hasAgent: boolean = false;

  private hasCredentials: boolean = false;

  constructor(props: BBRClientConfig) {
    super('BBR', props);

    if (props.agent || props.agentConfig) {
      this.hasAgent = true;
    }

    if (props.credentials) {
      this.hasCredentials = true;
    }
  }

  /**
   * BBRSag method using version 1
   *
   * https://confluence.sdfi.dk/pages/viewpage.action?pageId=16056582#REST(BBR)-Metode-bbrsag
   */

  // Overloads the method to allow for different return types based on the MedDybde parameter
  public async BBRSag(
    params: BBRSagRequest & { MedDybde: false },
  ): Promise<BBRSagResponseUdenDybde>;

  public async BBRSag(
    params: BBRSagRequest & { MedDybde?: true },
  ): Promise<BBRSagResponse>;

  public async BBRSag(
    params: BBRSagRequest,
  ): Promise<BBRSagResponse | BBRSagResponseUdenDybde>;

  public async BBRSag(
    params: BBRSagRequest,
  ): Promise<BBRSagResponse | BBRSagResponseUdenDybde> {
    const normalizedParams = this.normalizeStatusParam(params);

    const request = new RequestBuilder<
      BBRSagRequest,
      BBRSagResponse | BBRSagResponseUdenDybde
    >()
      .setEndpoint(this.getRequestBuilderEndpoint())
      .setService('BBRPublic')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('bbrsag')
      .setParams(normalizedParams)
      .build();

    return this.request(request);
  }

  /**
   * BBR Bygning method using version 1
   *
   * https://confluence.sdfi.dk/pages/viewpage.action?pageId=16056582#REST(BBR)-Metode-bygning
   */

  // Overloads the method to allow for different return types based on the MedDybde parameter
  public async Bygning(
    params: BBRBygningRequest & { MedDybde: false },
  ): Promise<BBRBygningResponseUdenDybde>;

  public async Bygning(
    params: BBRBygningRequest & { MedDybde?: true },
  ): Promise<BBRBygningResponse>;

  public async Bygning(
    params: BBRBygningRequest,
  ): Promise<BBRBygningResponse | BBRBygningResponseUdenDybde>;

  public async Bygning(
    params: BBRBygningRequest,
  ): Promise<BBRBygningResponse | BBRBygningResponseUdenDybde> {
    const normalizedParams = this.normalizeStatusParam(params);

    const request = new RequestBuilder<
      BBRBygningRequest,
      BBRBygningResponse | BBRBygningResponseUdenDybde
    >()
      .setEndpoint(this.getRequestBuilderEndpoint())
      .setService('BBRPublic')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('bygning')
      .setParams(normalizedParams)
      .build();

    return this.request(request);
  }

  /**
   * Normalizes the status parameter in the given parameters object.
   * If the parameters contain a Status property (of type Livscyklus or Livscyklus[]),
   * it extracts the livscyklus_code and returns a new object with the normalized Status.
   *
   * @template T - Type extending an object with an optional Status property of type Livscyklus or Livscyklus[]
   * @param {T} params - The parameters object to normalize
   * @returns {T & { Status?: string | string[] }} - A new object with the same properties as the input,
   *                                                 but with the Status normalized to string or string[]
   */
  private normalizeStatusParam<
    T extends { Status?: Livscyklus | Livscyklus[] },
  >(params: T): T & { Status?: string | string[] } {
    if (params.Status) {
      const status = Array.isArray(params.Status)
        ? params.Status.map((s) => s.livscyklus_code)
        : params.Status.livscyklus_code;

      return {
        ...params,
        Status: status,
      };
    }
    return params as T & { Status?: string | string[] };
  }

  /**
   * Get the endpoint for the request builder based on the authentication configuration.
   *
   * All requests in the service can be called with either credentials or agent/agent configuration. If both are provided, the agent/agent configuration will be used.
   */
  private getRequestBuilderEndpoint() {
    if (this.hasAgent) {
      return Endpoint.CERT0;
    }

    if (this.hasCredentials) {
      return Endpoint.PUBLIC_PROTECTED;
    }

    throw new Error(
      'No authentication configuration set. Please provide either agent/agent configuration or credentials.',
    );
  }
}
