import { Service } from "../../core/service";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { eventRequest, eventResponse } from "./types";

export class Haendelser extends Service {
  static Register = "DAR";

  constructor(config: clientInit) {
    super(config, "system", "custom");
  }

  /**
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async getPublicEvents(params: eventRequest): Promise<eventResponse[]> {
    return await this.Request<eventResponse[]>(
      Haendelser.Methods.public,
      params
    );
  }
  async getPrivateEvents(params: eventRequest): Promise<eventResponse[]> {
    return await this.Request<eventResponse[]>(
      Haendelser.Methods.protected,
      params
    );
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      EventMessages: "EventMessages",
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      public: {
        zone: "public_protected",
        service: Haendelser.Services.EventMessages,
        method: "",
      },
      protected: {
        zone: "cert5",
        service: Haendelser.Services.EventMessages,
        method: "",
      },
    });
  }
}
