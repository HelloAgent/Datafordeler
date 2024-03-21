import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { EjerskabMedStamoplysninger, Handelsoplysninger, Ejerskifte, Ejerskabsskifte } from "./models";
export declare class EJF extends Service {
    static Register: string;
    constructor(config?: clientInit);
    /**
     * Get an ejerSkabMedStamoplysninger object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    ejerskabMedStamoplysninger(params: EjerskabMedStamoplysninger.Request): Promise<EjerskabMedStamoplysninger.Response>;
    handelsoplysning(params: Handelsoplysninger.Request): Promise<Handelsoplysninger.Response>;
    ejerskifte(params: Ejerskifte.Request): Promise<Ejerskifte.Response>;
    ejerskabsskifte(params: Ejerskabsskifte.Request): Promise<Ejerskabsskifte.Response>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
/**  Experimenting - not in use */
