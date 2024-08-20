import type { Endpoint } from './Endpoint';
import type { Parameters, RequestConfig } from './types';

export class RequestBuilder<T, R> {
  private config: Partial<RequestConfig<T, R>> = {};

  constructor() {
    this.config.version = '1';
    this.config.serviceType = 'REST';
  }

  setEndpoint(endpoint: Endpoint) {
    this.config.endpoint = endpoint;
    return this;
  }

  setService(service: string) {
    this.config.service = service;
    return this;
  }

  setMethod(method: string) {
    this.config.method = method;
    return this;
  }

  setVersion(version: string) {
    this.config.version = version;
    return this;
  }

  setServiceType(serviceType: 'REST' | 'custom') {
    this.config.serviceType = serviceType;
    return this;
  }

  setParams(params: Parameters<T>) {
    this.config.params = params;
    return this;
  }

  build(): RequestConfig<T, R> {
    if (
      !this.config.endpoint ||
      !this.config.service ||
      !this.config.version ||
      !this.config.serviceType ||
      !this.config.method ||
      !this.config.params
    ) {
      throw new Error('Incomplete request configuration');
    }
    return this.config as RequestConfig<T, R>;
  }
}
