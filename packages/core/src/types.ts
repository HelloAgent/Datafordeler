/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Agent } from 'undici';

import type { Endpoint } from './Endpoint';

export type { Agent } from 'undici';

/**
 * Configuration when initializing an agent from a local certificate file.
 */
export interface AgentFromConfig {
  /**
   * The passphrase for the certificate
   * @required
   */
  passphrase: string;

  /**
   * Path to the certificate file
   * @required
   */
  localFilePath: string;

  /**
   * Whether to keep the connection alive
   * @default true
   */
  keepAlive?: boolean;

  /**
   * Whether to reject unauthorized connections
   * @default false
   */
  rejectUnauthorized?: boolean;
}

/**
 * Represents the configuration options when using an agent.
 */
export interface AgentConfig {
  /**
   * An existing agent to use for the request
   */
  agent?: Agent;

  /**
   * Configuration for creating a new agent
   */
  agentConfig?: AgentFromConfig;
}

/**
 * Interface for configuring credentials.
 */
export interface CredentialsConfig {
  credentials?: {
    /**
     * A datafordeler username
     */
    username: string;

    /**
     * A datafordeler password
     */
    password: string;
  };
}

/**
 * Represents the authentication configuration.
 */
export type AuthConfig = AgentConfig & CredentialsConfig;

/**
 * Defines the configuration options for the base client.
 */
export type ClientBaseConfig = {
  readonly timeout?: number;
  // readonly retries?: number; // not implemented
};

/**
 * Values that can be passed as parameters to a request.
 */
export type ParameterValues =
  | string
  | number
  | boolean
  | Array<string | number>;

/**
 * Parameters that can be passed to the request.
 */
export type Parameters<T> = {
  [key in keyof T]: ParameterValues;
};

/**
 * Request parameters for the client to call.
 *
 * The url structure is as follows:
 *
 * `endpoint/register/service/version/servicetype/method?param1=value1&param2=value2`
 */
export interface RequestConfig<T, R> {
  /**
   * The endpoint to call
   * @example Endpoint.PUBLIC
   */
  endpoint: Endpoint;

  /**
   * The service to call
   * @example 'DAR_BFE_Public'
   */
  service: string;

  /**
   * Set the service version to call
   * @default '1'
   */
  version?: string;

  /**
   * The type of service to call
   *
   * @default 'REST'
   */
  serviceType?: 'REST' | 'custom';

  /**
   * The method to call
   * @example 'adresseTilEnhedBfe'
   */
  method: string;

  /**
   * The parameters to pass to the method
   */
  params: Parameters<T>;
}
