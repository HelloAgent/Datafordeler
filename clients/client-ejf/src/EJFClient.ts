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
  EjerskifteRequest,
  EjerskifteResponse,
  HandelsoplysningerRequest,
  HandelsoplysningerResponse,
  PersonEllerVirksomhedsoplysningRequest,
  PersonEllerVirksomhedsoplysningResponse,
} from './types/ejerfortegnelsen';

export type EJFClientConfig = ClientBaseConfig & AgentConfig;

export class EJF extends Client<EJFClientConfig> {
  constructor(props: EJFClientConfig) {
    super('EJERFORTEGNELSE', props);
  }

  /**
   * EjendomsadministratorMedStamoplysninger method using version 1
   */
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

  /**
   * EjerskabMedStamoplysninger method using version 1
   */
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

  /**
   * Ejerskabsskifte method using version 1
   */
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

  /**
   * Ejerskifte method using version 2.0.0
   */
  async Ejerskifte(params: EjerskifteRequest) {
    const request = new RequestBuilder<EjerskifteRequest, EjerskifteResponse>()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('2.0.0')
      .setServiceType('REST')
      .setMethod('Ejerskifte')
      .setParams(params)
      .build();

    return this.request(request);
  }

  /**
   * Handelsoplysninger method using version 1
   */
  async Handelsoplysninger(params: HandelsoplysningerRequest) {
    const request = new RequestBuilder<
      HandelsoplysningerRequest,
      HandelsoplysningerResponse
    >()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('Handelsoplysning')
      .setParams(params)
      .build();

    return this.request(request);
  }

  /**
   * PersonEllerVirksomhedsoplysning method using version 1
   */
  async PersonEllerVirksomhedsoplysning(
    params: PersonEllerVirksomhedsoplysningRequest,
  ) {
    const request = new RequestBuilder<
      PersonEllerVirksomhedsoplysningRequest,
      PersonEllerVirksomhedsoplysningResponse
    >()
      .setEndpoint(Endpoint.CERT5)
      .setService('Ejerfortegnelsen')
      .setVersion('1')
      .setServiceType('REST')
      .setMethod('PersonEllerVirksomhedsoplysning')
      .setParams(params)
      .build();

    return this.request(request);
  }
}
