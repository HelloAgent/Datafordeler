import type { Endpoint } from './Endpoint';

/**
 * Values that can be passed as parameters to the request.
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
 *
 * register and serviceType are static properties of the client, and such only the endpoint, service and method is required.
 *
 * The version is set by the client as well, but can be overwriten in the request.
 */
export interface RequestParams<T> {
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
   * Override the version applied in the client
   * @example '1'
   */
  version?: string;

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
