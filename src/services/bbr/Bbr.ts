import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import {
  BygningRequest,
  BygningResponse,
  EjendomsrelationRequest,
  EjendomsrelationResponse,
} from "./models";

export class BBR extends Service {
  static Register = "BBR";

  constructor(config: clientInit = {}) {
    super(config, "BBR", "rest");
  }

  /**
   * Get an ejerSkabMedStamoplysninger object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */

  async bygning(params: BygningRequest): Promise<BygningResponse> {
    return await this.Request<BygningResponse>(BBR.Methods.Bygning, params);
  }

  async ejendomsrelation(params: EjendomsrelationRequest): Promise<EjendomsrelationResponse> {
    return await this.Request<EjendomsrelationResponse>(BBR.Methods.Ejendomsrelation, params);
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      BBRPublic: "BBRPublic",
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      Bygning: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic,
        method: "bygning",
      },
      Ejendomsrelation: {
        zone: "public_protected",
        service: BBR.Services.BBRPublic,
        method: "ejendomsrelation",
      },
    });
  }
}
