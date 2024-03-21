import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { EnhedRequest, EnhedResponse, BygningRequest, BygningResponse, EjendomsrelationRequest, EjendomsrelationResponse } from "./models";
export declare class BBR extends Service {
    static Register: string;
    constructor(config?: clientInit);
    /**
     * Get an ejerSkabMedStamoplysninger object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    enhed(params: EnhedRequest): Promise<EnhedResponse>;
    bygning(params: BygningRequest): Promise<BygningResponse>;
    ejendomsrelation(params: EjendomsrelationRequest): Promise<EjendomsrelationResponse>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
