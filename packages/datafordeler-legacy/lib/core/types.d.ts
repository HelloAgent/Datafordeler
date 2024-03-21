/// <reference types="node" />
/// <reference types="node" />
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
    version?: Version;
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
export type Endpoint = "services.datafordeler.dk" | "certservices.datafordeler.dk" | "s5-certservices.datafordeler.dk";
export declare enum Endpoints {
    PUBLIC = "services.datafordeler.dk",
    CERT0 = "certservices.datafordeler.dk",
    CERT5 = "s5-certservices.datafordeler.dk"
}
export type Register = "DAR" | "BBR" | "EJERFORTEGNELSE" | "EBR" | "system";
export type Service = string;
export type Version = "1" | "1.0.0" | "2.0.0";
export type Servicetype = "rest" | "custom";
export type Metode = string;
export type Parameters = {
    [k: string]: any;
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
    Params?: {
        [k: string]: any;
    };
}
export interface DatafordelerResponse {
    time: Date;
    [k: string]: any;
}
export interface fetchRequestInit {
    agent?: Agent;
}
export {};
