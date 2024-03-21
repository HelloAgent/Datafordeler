import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { BFEnrAdresse, EjendomsBeliggenhed } from "./models";

//To do: Make it possible to call EBR with a cert at https://certservices.datafordeler.dk/EBR/Ejendomsbeliggenhed
//https://services.datafordeler.dk/EBR/Ejendomsbeliggenhed/1/REST/BFEnrAdresse

export class EBR extends Service {
  static Register = "EBR";

  constructor(config: clientInit = {}) {
    super(config, "EBR", "rest");
  }

  async bfeNrAdresse(params: BFEnrAdresse.Request): Promise<BFEnrAdresse.Response> {
    return await this.Request<BFEnrAdresse.Response>(EBR.Methods.BFEnrAdresse, params);
  }

  async ejendomsbeliggenhed(
    params: EjendomsBeliggenhed.Request
  ): Promise<EjendomsBeliggenhed.ResponseFull> {
    return await this.Request<EjendomsBeliggenhed.ResponseFull>(
      EBR.Methods.Ejendomsbeliggenhed,
      params
    );
  }

  async ejendomsbeliggenhedSimpel(
    params: EjendomsBeliggenhed.Request
  ): Promise<EjendomsBeliggenhed.ResponseSimpel> {
    return await this.Request<EjendomsBeliggenhed.ResponseSimpel>(
      EBR.Methods.EjendomsbeliggenhedSimpel,
      params
    );
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      Ejendomsbeliggenhed: "Ejendomsbeliggenhed",
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      BFEnrAdresse: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed,
        method: "BFEnrAdresse",
      },
      Ejendomsbeliggenhed: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed,
        method: "Ejendomsbeliggenhed",
      },
      EjendomsbeliggenhedSimpel: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed,
        method: "EjendomsbeliggenhedSimpel",
      },
    });
  }
}
