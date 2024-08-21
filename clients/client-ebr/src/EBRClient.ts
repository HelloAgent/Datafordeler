import {
  AuthConfig,
  Client,
  ClientBaseConfig,
  Endpoint,
  RequestBuilder,
} from '@datafordeler/core';

export type EBRClientConfig = ClientBaseConfig & AuthConfig;

export class EBR extends Client<EBRClientConfig> {
  constructor(props: EBRClientConfig) {
    super('Ejendomsbeliggenhed', props);
  }

  // Requests can be made with both credentials and with a certificate
}
