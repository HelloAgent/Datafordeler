import { Service } from "../../core/service";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { getAdresse } from "./types";

export class DAR extends Service {
  static Register = "DAR";

  constructor(config: clientInit) {
    super(config, "DAR", "rest");
  }

  /**
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return Array of address objects
   */
  getAdresse(params: getAdresse) {
    return this.Req<getResponse[]>(DAR.Methods.adresse, params);
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      DAR: "DAR",
      DAR_BFE_Public: "DAR_BFE_Public",
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      adresse: {
        zone: "public",
        service: DAR.Services.DAR,
        method: "adresse",
      },
    });
  }
}

interface getResponse {
  id_lokalId: string;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Experimenting - not in use
interface DarServiceObject extends ServiceObject {
  DAR: "DAR";
  DAR_BFE_Public: "DAR_BFE_Public";
}

interface DarMethodObject extends MethodObject {
  adresse: { zone: "public"; service: ""; method: "" };
}
