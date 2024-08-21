import { RequestInit, type Response, fetch } from 'undici';

import { Auth } from './Auth';
import type { AuthConfig, ClientBaseConfig, RequestConfig } from './types';

// TODO: Add backoff/retry
// TODO: Add logger input
// TODO: Add middleware
export abstract class Client<
  ClientConfig extends ClientBaseConfig & AuthConfig,
> {
  readonly #auth: Auth = new Auth();

  private readonly register: string;

  private readonly timeout: number;

  // private readonly retries: number; // not implemented

  constructor(register: string, config: ClientConfig) {
    this.register = register;
    this.timeout = config.timeout ?? 5000;
    // this.retries = config.retries ?? 3; // not implemented

    this.initializeAuth(config);
  }

  private initializeAuth(config: ClientConfig) {
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

  /**
   * Constructs a URL for the request in the format:
   *
   * `<endpoint>/register/service/version/servicetype/method?param1=value1&param2=value2`
   *
   * example:
   *
   * `https://services.datafordeler.dk/DAR/DAR/1/REST/adresse?Id=d6c48dac-2a8e-4ede-849b-3a86c4e5a258`
   */
  protected buildUrl<T>(req: RequestConfig<T, never>): URL {
    const url = req.endpoint.getUrl();

    const pathName = `${this.register}/${req.service}/${req.version}/${req.serviceType}/${req.method}`;

    url.pathname = pathName;

    Object.entries(req.params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        url.searchParams.append(key, value.join('|'));
      } else {
        url.searchParams.append(key, String(value));
      }
    });

    if (req.endpoint.withCredentials) {
      const { username, password } = this.#auth.getCredentials();
      url.searchParams.append('username', username);
      url.searchParams.append('password', password);
    }

    return url;
  }

  protected async request<T, R>(req: RequestConfig<T, R>): Promise<R> {
    const controller = new AbortController();
    const { signal } = controller;

    const init = this.createRequestInit(signal, req.endpoint.withAgent);
    const url = this.buildUrl(req);
    const timeout = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, init);
      clearTimeout(timeout);
      return this.handleResponse<R>(response);
    } catch (error) {
      clearTimeout(timeout);
      return this.handleError(error);
    }
  }

  private createRequestInit(
    signal: AbortSignal,
    withAgent: boolean,
  ): RequestInit {
    const init: RequestInit = {
      signal,
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (withAgent) {
      init.dispatcher = this.#auth.getAgent();
    }

    return init;
  }

  private async handleResponse<R>(response: Response): Promise<R> {
    if (response.ok) {
      return response.json() as Promise<R>;
    }
    throw new Error(response.statusText);
  }

  private handleError(err: unknown): never {
    if (!(err instanceof Error)) {
      throw new Error('Unknown error occurred');
    }

    if (err.name === 'AbortError') {
      throw new Error('Request timed out');
    }

    throw err;
  }
}
