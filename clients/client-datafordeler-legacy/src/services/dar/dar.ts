import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { adresseRequest, adresseResponse, adresse } from "./types";

export class DAR extends Service {
  static Register = "DAR";

  constructor(config: clientInit = {}) {
    super(config, "DAR", "rest");
  }

  /**
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async getAdresse(params: adresseRequest): Promise<adresseResponse[]> {
    return await this.Request<adresseResponse[]>(DAR.Methods.adresse, params);
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

/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }

// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }

// import Buffer from "buffer"
