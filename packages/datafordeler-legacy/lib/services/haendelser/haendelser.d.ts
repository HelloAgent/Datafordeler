import { Service } from "../../core/";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { Request, Response } from "./types";
export declare class Haendelser extends Service {
    static Register: string;
    constructor(config: clientInit);
    /**
     * Get an DAR address object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    getPublicEvents(params: Request): Promise<Response>;
    getPrivateEvents(params: Request): Promise<Response>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
