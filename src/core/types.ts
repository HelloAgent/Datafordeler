import { Agent } from "https";

export interface BasicAuth {
  username: string;
  password: string;
}

export interface clientInit {
  username?: string;
  password?: string;
  agent?: Agent;
}

export interface serviceInit extends clientInit {
  // register: Register;
  // version?: "1";
  // serviceType: Servicetype;
}

export interface keyValue {
  [k: string]: string;
}

export interface ServiceObject extends keyValue {
  [k: string]: Service;
}

export interface MethodInfo {
  zone: Zone;
  service: Service;
  method: Metode;
}

export interface MethodObject {
  [k: string]: MethodInfo;
}

/**
 * Options for creating an agent with a pcks certificate
 */
interface certificate {
  passphrase: string;
}

interface certificateBuffer extends certificate {
  certBuffer: Buffer;
  localFilePath?: never;
}

interface certificateFilePath extends certificate {
  certBuffer?: never;
  localFilePath: string;
}

export type certificateOptions = certificateBuffer | certificateFilePath;

export type Pagination = {
  page?: number;
  per_page?: number;
};

export type KeyValue<T, U> = {
  key: T;
  value: U;
};

export type Zone = "public" | "public_protected" | "cert0" | "cert5";
export type Endpoint =
  | "services.datafordeler.dk"
  | "certservices.datafordeler.dk"
  | "s5-certservices.datafordeler.dk";

export enum Endpoints {
  PUBLIC = "services.datafordeler.dk",
  CERT0 = "certservices.datafordeler.dk",
  CERT5 = "s5-certservices.datafordeler.dk",
}

export type Register = "DAR" | "BBR" | "system";
export type Service = string;
export type Version = "1" | "1.0.0";
export type Servicetype = "rest" | "custom";
export type Metode = string;
export type Parameters = { [k: string]: any };

let _temp_url_structure_ = {
  endpoint: "services.datafordeler.dk",
  register: "DAR",
  service: "DAR_BFE_Public", //"DAR"
  version: "1",
  servicetype: "rest",
  metode: "adresseTilEnhedBfe",
};

/**
 *
 *
 *
 *
 *
 */
export interface Req {
  Endpoint: Endpoint;
  Register: Register;
  Service: Service;
  Version: Version;
  Servicetype: Servicetype;
  Metode?: Metode;
  Params?: { [k: string]: any };
}

export interface DatafordelerResponse {
  time: Date;
  [k: string]: any;
}

export interface fetchRequestInit {
  // // whatwg/fetch standard options
  // body?: BodyInit;
  // headers?: HeadersInit;
  // method?: string;
  // redirect?: RequestRedirect;
  // signal?: AbortSignal | null;

  // // node-fetch extensions
  agent?: Agent; //| ((parsedUrl: URL) => Agent); // =null http.Agent instance, allows custom proxy, certificate etc.
  // compress?: boolean; // =true support gzip/deflate content encoding. false to disable
  // follow?: number; // =20 maximum redirect count. 0 to not follow redirect
  // size?: number; // =0 maximum response body size in bytes. 0 to disable
  // timeout?: number; // =0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)

  // // node-fetch does not support mode, cache or credentials options
}
