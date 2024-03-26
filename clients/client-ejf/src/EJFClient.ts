import { AuthConfig, Client, Config, Endpoint } from '@datafordeler/core';

import type {
  EjerskabResponse,
  Request,
} from './models/EjerskabMedStamoplysninger';

export type EJFClientConfig = Config & AuthConfig;

export class EJF extends Client<EJFClientConfig> {
  constructor(props?: EJFClientConfig) {
    const config = {
      service: 'EJERFORTEGNELSE',
      serviceType: 'REST',
      serviceVersion: '1',
      ...props,
    } as const;
    super(config);
  }

  async EjerskabMedStamoplysninger(params: Request) {
    return this.request<Request, EjerskabResponse>({
      endpoint: Endpoint.CERT5,
      service: 'Ejerfortegnelsen',
      method: 'EjerskabMedStamoplysninger',
      params,
    });
  }
}
