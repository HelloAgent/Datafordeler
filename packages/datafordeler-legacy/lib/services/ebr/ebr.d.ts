import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { BFEnrAdresse, EjendomsBeliggenhed } from "./models";
export declare class EBR extends Service {
    static Register: string;
    constructor(config?: clientInit);
    bfeNrAdresse(params: BFEnrAdresse.Request): Promise<BFEnrAdresse.Response>;
    ejendomsbeliggenhed(params: EjendomsBeliggenhed.Request): Promise<EjendomsBeliggenhed.ResponseFull>;
    ejendomsbeliggenhedSimpel(params: EjendomsBeliggenhed.Request): Promise<EjendomsBeliggenhed.ResponseSimpel>;
    static get Services(): ServiceObject;
    static get Methods(): MethodObject;
}
