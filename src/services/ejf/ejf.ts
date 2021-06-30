import { Service } from "../../core/";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { ejerskabMedStamoplysningerRequest, ejerskabMedStamoplysningerResponse } from "./models";
import { HandelsoplysningerRequest, HandelsoplysningerResponse } from "./models";
import { EjerskifteRequest, EjerskifteResponse } from "./models";

export class EJF extends Service {
  static Register = "EJERFORTEGNELSE";

  constructor(config: clientInit = {}) {
    super(config, "EJERFORTEGNELSE", "rest");
  }

  /**
   * Get an ejerSkabMedStamoplysninger object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async ejerskabMedStamoplysninger(
    params: ejerskabMedStamoplysningerRequest
  ): Promise<ejerskabMedStamoplysningerResponse> {
    return await this.Request<ejerskabMedStamoplysningerResponse>(
      EJF.Methods.EjerskabMedStamoplysninger,
      params
    );
  }

  async handelsoplysning(params: HandelsoplysningerRequest): Promise<HandelsoplysningerResponse> {
    return await this.Request<HandelsoplysningerResponse>(EJF.Methods.Handelsoplysninger, params);
  }

  async ejerskifte(params: EjerskifteRequest): Promise<EjerskifteResponse> {
    return await this.Request<EjerskifteResponse>(EJF.Methods.Ejerskifte, params);
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      Ejerfortegnelsen: "Ejerfortegnelsen",
      EjerfortegnelsenFortrolig: " EjerfortegnelsenFortrolig",
      EjerfortegnelsenFortroligBeskyttet: "EjerfortegnelsenFortroligBeskyttet",
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      EjerskabMedStamoplysninger: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen,
        method: "EjerskabMedStamoplysninger",
      },
      Handelsoplysninger: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen,
        method: "Handelsoplysning",
      },
      Ejerskifte: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen,
        method: "Ejerskifte",
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
