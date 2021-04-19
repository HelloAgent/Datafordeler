import { Service } from "../../core/service";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { ejerskabMedStamoplysningerRequest, ejerskabMedStamoplysningerResponse } from "./types";
export declare class EJF extends Service {
    static Register: string;
    constructor(config: clientInit);
    /**
     * Get an ejerSkabMedStamoplysninger object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    ejerskabMedStamoplysninger(params: ejerskabMedStamoplysningerRequest): Promise<ejerskabMedStamoplysningerResponse>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
/**  Experimenting - not in use */
