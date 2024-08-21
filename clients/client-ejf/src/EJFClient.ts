import {
  AgentConfig,
  Client,
  ClientBaseConfig,
  Endpoint,
  RequestBuilder,
} from '@datafordeler/core';

import type {
  EjendomsadministratorMedStamoplysningerRequest,
  EjendomsadministratorMedStamoplysningerResponse,
  EjerskabMedStamoplysningerRequest,
  EjerskabMedStamoplysningerResponse,
  EjerskabsskifteRequest,
  EjerskabsskifteResponse,
} from './types/ejerfortegnelsen';

export type EJFClientConfig = ClientBaseConfig & AgentConfig;

export class EJF extends Client<EJFClientConfig> {
  constructor(props: EJFClientConfig) {
    super('EJERFORTEGNELSE', props);
  }

  async EjerskabMedStamoplysninger(params: EjerskabMedStamoplysningerRequest) {
    const request = new RequestBuilder<
      EjerskabMedStamoplysningerRequest,
      EjerskabMedStamoplysningerResponse
    >()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('EjerskabMedStamoplysninger')
      .setParams(params)
      .build();

    return this.request(request);
  }

  async Ejerskabsskifte(params: EjerskabsskifteRequest) {
    const request = new RequestBuilder<
      EjerskabsskifteRequest,
      EjerskabsskifteResponse
    >()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('Ejerskabsskifte')
      .setParams(params)
      .build();

    return this.request(request);
  }

  async EjendomsadministratorMedStamoplysninger(
    params: EjendomsadministratorMedStamoplysningerRequest,
  ) {
    const request = new RequestBuilder<
      EjendomsadministratorMedStamoplysningerRequest,
      EjendomsadministratorMedStamoplysningerResponse
    >()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('EjendomsadministratorMedStamoplysninger')
      .setParams(params)
      .build();

    return this.request(request);
  }
}
