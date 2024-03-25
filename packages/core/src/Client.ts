import { RequestInit, fetch } from 'undici';

import { Auth, AuthConfig } from './Auth';
import { Endpoint, Parameters, RequestParams } from './types';

export type { AuthConfig, CredentialsConfig, AgentConfig } from './Auth';

export type CoreConfig = {
  readonly service: string;
  readonly serviceType?: 'custom' | 'REST';
  readonly serviceVersion: string;
};

export type Config = {
  readonly timeout?: number;
  readonly retries?: number;
};

// TODO: Add backoff/retry
// TODO: Add logger input
// TODO: Add middleware
export abstract class Client<ClientConfig extends Config & AuthConfig> {
  readonly #auth: Auth;

  protected readonly config: Required<CoreConfig & Config>;

  constructor(config: CoreConfig & ClientConfig) {
    const resolvedConfig: Required<CoreConfig & Config> = {
      service: config.service,
      serviceVersion: config.serviceVersion,
      serviceType: config.serviceType ?? 'REST',
      timeout: config.timeout ?? 5000,
      retries: config.retries ?? 3,
    };

    this.config = resolvedConfig;

    this.#auth = new Auth();

    if (config.credentials) {
      this.#auth.setCredentials(config.credentials);
    }

    if (config.agent) {
      this.#auth.setAgent(config.agent);
    }

    if (config.agentConfig) {
      this.#auth.createAgent(config.agentConfig);
    }
  }

  private createQueryString<T>(params: Parameters<T>, withCredentials = false) {
    const parameters = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        parameters.append(key, value.join('|'));
      } else {
        parameters.append(key, String(value));
      }
    });

    if (withCredentials) {
      const { username, password } = this.#auth.getCredentials();
      parameters.append('username', username);
      parameters.append('password', password);
    }

    return parameters.toString();
  }

  /**
   * Constructs a URL for the request in the format:
   *
   * `<endpoint>/register/service/version/servicetype/method?param1=value1&param2=value2`
   *
   * example:
   *
   * `https://services.datafordeler.dk/DAR/DAR/1/REST/adresse?Id=d6c48dac-2a8e-4ede-849b-3a86c4e5a258`
   */
  private buildUrl<T>(req: RequestParams<T>): string {
    const withCredentials = req.endpoint === Endpoint.PUBLIC_PROTECTED;
    const parameters = this.createQueryString(req.params, withCredentials);
    return `https://${req.endpoint}/${this.config.service}/${req.service}/${req.version ?? this.config.serviceVersion}/${this.config.serviceType}/${req.method}?${parameters}`;
  }

  protected async request<T, R>(req: RequestParams<T>): Promise<R> {
    const controller = new AbortController();
    const { signal } = controller;

    const init: RequestInit = {
      signal,
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (req.endpoint === Endpoint.PUBLIC_PROTECTED) {
      this.#auth.getCredentials();
    }

    if (req.endpoint === Endpoint.CERT0 || req.endpoint === Endpoint.CERT5) {
      init.dispatcher = this.#auth.getAgent();
    }

    const url = this.buildUrl(req);
    const timeout = setTimeout(() => controller.abort(), this.config.timeout);
    const request = fetch(url, init);

    const response = request
      .then((res) => {
        if (res.ok) {
          return res.json() as R;
        }
        throw new Error(res.statusText);
      })
      .catch((err) => {
        if (!(err instanceof Error)) {
          throw new Error('Unknown error occurred');
        }

        if (err.name === 'AbortError') {
          throw new Error('Request timed out');
        }

        throw err;
      })
      .finally(() => clearTimeout(timeout));

    return response;
  }
}
