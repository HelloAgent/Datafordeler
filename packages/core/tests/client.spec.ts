import { describe, expect, it } from 'vitest';

import { AuthConfig, Client, ClientBaseConfig, RequestConfig } from '../src';
import { Endpoint } from '../src/Endpoint';

interface MockParams {
  id?: string;
  ids?: string[];
}

type MockConfig = ClientBaseConfig & AuthConfig;
class MockClass extends Client<MockConfig> {
  constructor(props: MockConfig = {}) {
    super('testService', props);
  }

  mockBuildUrl(params: RequestConfig<MockParams, unknown>) {
    return this.buildUrl(params);
  }

  async callService(params: MockParams) {
    const req = {
      endpoint: Endpoint.CUSTOM({ endpoint: 'localhost' }),
      service: 'testService',
      method: 'testMethod',
      params,
    };

    return this.request(req);
  }
}

describe('Core client', () => {
  it('should initialize a client with config', () => {
    const client = new MockClass({ timeout: 1000 });

    expect(client).toEqual({
      register: 'testService',
      timeout: 1000,
    });
  });

  it('should build a url for a public endpoint', async () => {
    const client = new MockClass({
      credentials: { username: 'simon', password: 'test' },
    });

    const expected =
      'https://services.datafordeler.dk/testService/testService/1.0.0/REST/testMethod?id=1234x4321';

    const url = client.mockBuildUrl({
      endpoint: Endpoint.PUBLIC,
      service: 'testService',
      version: '1.0.0',
      serviceType: 'REST',
      method: 'testMethod',
      params: { id: '1234x4321' },
    });

    expect(url.toString()).toBe(expected);
  });

  it('should build a url for a public protected endpoint', async () => {
    const client = new MockClass({
      credentials: { username: 'foo', password: 'bar' },
    });

    const expected =
      'https://services.datafordeler.dk/testService/testService/1.0.0/REST/testMethod?id=1234x4321&username=foo&password=bar';

    const url = client.mockBuildUrl({
      endpoint: Endpoint.PUBLIC_PROTECTED,
      service: 'testService',
      version: '1.0.0',
      serviceType: 'REST',
      method: 'testMethod',
      params: { id: '1234x4321' },
    });

    expect(url.toString()).toBe(expected);
  });

  it('should throw when building url for protected endpoint when credentials are missing', async () => {
    const client = new MockClass();

    const params = {
      endpoint: Endpoint.PUBLIC_PROTECTED,
      service: 'testService',
      version: '1.0.0',
      serviceType: 'REST',
      method: 'testMethod',
      params: { id: '1234x4321' },
    } as never;

    expect(() => client.mockBuildUrl(params)).toThrow();
  });

  it('should build a url for a cert0 protected endpoint', async () => {
    const client = new MockClass({
      credentials: { username: 'foo', password: 'bar' },
    });

    const expected =
      'https://certservices.datafordeler.dk/testService/testService/1.0.0/REST/testMethod?ids=123%7C321';

    const url = client.mockBuildUrl({
      endpoint: Endpoint.CERT0,
      service: 'testService',
      version: '1.0.0',
      serviceType: 'REST',
      method: 'testMethod',
      params: { ids: ['123', '321'] },
    });

    expect(url.toString()).toBe(expected);
  });

  it('should build a url for a cert5 protected endpoint', async () => {
    const client = new MockClass();

    const expected =
      'https://s5-certservices.datafordeler.dk/testService/testService/1.0.0/REST/testMethod?ids=123%7C321';

    const url = client.mockBuildUrl({
      endpoint: Endpoint.CERT5,
      service: 'testService',
      version: '1.0.0',
      serviceType: 'REST',
      method: 'testMethod',
      params: { ids: ['123', '321'] },
    });

    expect(url.toString()).toBe(expected);
  });
});
