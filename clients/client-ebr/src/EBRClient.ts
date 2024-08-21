import {
  AuthConfig,
  Client,
  ClientBaseConfig,
  Endpoint,
  RequestBuilder,
} from '@datafordeler/core';

import type { BFEnrAdresseRequest, BFEnrAdresseResponse } from './types';

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
   *
   * Request can be made with either an agent or credentials. If both are provided, agent will be used.
   */
  async BFEnrAdresse(params: BFEnrAdresseRequest) {
    const request = new RequestBuilder<
      BFEnrAdresseRequest,
      BFEnrAdresseResponse
    >()
      .setService('Ejendomsbeliggenhed')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('BFEnrAdresse')
      .setParams(params);

    if (this.hasAgent) {
      request.setEndpoint(Endpoint.CERT0);
    } else if (this.hasCredentials) {
      request.setEndpoint(Endpoint.PUBLIC_PROTECTED);
    } else {
      throw new Error(
        'No authentication configuration set. Please provide either agent/agent configuration or credentials.',
      );
    }

    return this.request(request.build());
  }
}
