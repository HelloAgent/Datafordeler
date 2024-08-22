import {
  AuthConfig,
  Client,
  ClientBaseConfig,
  Endpoint,
  RequestBuilder,
} from '@datafordeler/core';

import type {
  BFEnrAdresseRequest,
  BFEnrAdresseResponse,
  EjendomsbeliggenhedRequest,
  EjendomsbeliggenhedResponse,
  EjendomsbeliggenhedSimpelRequest,
  EjendomsbeliggenhedSimpelResponse,
} from './types';

export type EBRClientConfig = ClientBaseConfig & AuthConfig;

export class EBR extends Client<EBRClientConfig> {
  private hasAgent: boolean = false;

  private hasCredentials: boolean = false;

  constructor(props: EBRClientConfig) {
    super('EBR', props);

    if (props.agent || props.agentConfig) {
      this.hasAgent = true;
    }

    if (props.credentials) {
      this.hasCredentials = true;
    }
  }

  /**
   * BFEnrAdresse method using version 1
   */
  public async BFEnrAdresse(params: BFEnrAdresseRequest) {
    const request = new RequestBuilder<
      BFEnrAdresseRequest,
      BFEnrAdresseResponse
    >()
      .setEndpoint(this.getRequestBuilderEndpoint())
      .setService('Ejendomsbeliggenhed')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('BFEnrAdresse')
      .setParams(params)
      .build();

    return this.request(request);
  }

  /**
   * Ejendomsbeliggenhed method using version 1
   */
  public async Ejendomsbeliggenhed(params: EjendomsbeliggenhedRequest) {
    const request = new RequestBuilder<
      EjendomsbeliggenhedRequest,
      EjendomsbeliggenhedResponse
    >()
      .setEndpoint(this.getRequestBuilderEndpoint())
      .setService('Ejendomsbeliggenhed')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('Ejendomsbeliggenhed')
      .setParams(params)
      .build();

    return this.request(request);
  }

  /**
   * EjendomsbeliggenhedSimpel method using version 1
   */
  public async EjendomsbeliggenhedSimpel(
    params: EjendomsbeliggenhedSimpelRequest,
  ) {
    const request = new RequestBuilder<
      EjendomsbeliggenhedSimpelRequest,
      EjendomsbeliggenhedSimpelResponse
    >()
      .setEndpoint(this.getRequestBuilderEndpoint())
      .setService('Ejendomsbeliggenhed')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('EjendomsbeliggenhedSimpel')
      .setParams(params)
      .build();

    return this.request(request);
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
