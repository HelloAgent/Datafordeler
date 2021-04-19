import { Service } from "../../core/service";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { adresseRequest, adresseResponse } from "./types";
export declare class DAR extends Service {
    static Register: string;
    constructor(config: clientInit);
    /**
     * Get an DAR address object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    getAdresse(params: adresseRequest): Promise<adresseResponse[]>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
/**  Experimenting - not in use */
