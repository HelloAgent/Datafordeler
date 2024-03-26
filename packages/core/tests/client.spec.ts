import { AuthConfig, Client, Config, RequestParams } from '../src';
import { Endpoint } from '../src/Endpoint';

interface MockParams {
  id?: string;
  ids?: string[];
}

class MockClass extends Client<Config & AuthConfig> {
  constructor(props?: Config & AuthConfig) {
    super({
      service: 'testService',
      serviceVersion: '1.0.0',
      serviceType: 'REST',
      ...props,
    });
  }

  mockBuildUrl(params: RequestParams<MockParams>) {
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
    const client = new MockClass({ retries: 5, timeout: 1000 });

    expect(client).toEqual({
      config: {
        service: 'testService',
        serviceVersion: '1.0.0',
        serviceType: 'REST',
        timeout: 1000,
        retries: 5,
      },
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
      method: 'testMethod',
      service: 'testService',
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
      method: 'testMethod',
      service: 'testService',
      params: { id: '1234x4321' },
    });

    expect(url.toString()).toBe(expected);
  });

  it('should throw when building url for protected endpoint when credentials are missing', async () => {
    const client = new MockClass();

    const params = {
      endpoint: Endpoint.PUBLIC_PROTECTED,
      method: 'testMethod',
      service: 'testService',
      params: { id: '1234x4321' },
    };

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
      method: 'testMethod',
      service: 'testService',
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
      method: 'testMethod',
      service: 'testService',
      params: { ids: ['123', '321'] },
    });

    expect(url.toString()).toBe(expected);
  });
});
