import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import {} from "./models";

export class EBR extends Service {
  static Register = "EBR";

  constructor(config: clientInit = {}) {
    super(config, "EBR", "rest");
  }

  //   async handelsoplysning(params: Handelsoplysninger.Request): Promise<Handelsoplysninger.Response> {
  //     return await this.Request<Handelsoplysninger.Response>(EJF.Methods.Handelsoplysninger, params);
  //   }

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

//https://services.datafordeler.dk/EBR/Ejendomsbeliggenhed/1/REST/BFEnrAdresse
