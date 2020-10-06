import { Agent } from "https";
import fetch from "node-fetch";

import {
  MethodInfo,
  clientInit,
  Servicetype,
  Parameters,
  Zone,
  Endpoint,
  Register,
  Version,
  fetchRequestInit,
} from "./types";

export class Service {
  #agent?: Agent;
  #username?: string;
  #password?: string;
  private register: Register;
  private serviceType: Servicetype;

  constructor(
    config: clientInit,
    register: Register,
    serviceType: Servicetype
  ) {
    this.#username = config?.username || "";
    this.#password = config?.password || "";
    this.#agent = config?.agent;
    this.register = register;
    this.serviceType = serviceType;
  }

  protected async Req<T>(opt: MethodInfo, params: Parameters): Promise<T> {
    let url = this.buildUrl(opt, params);
    let config: fetchRequestInit = {};

    if (opt.zone === "public_protected") {
      this.validateAuth();
      url = this.addAuthToUrl(url);
    }

    if (opt.zone === ("cert0" || "cert5")) {
      this.validateAgent();
      config.agent = this.#agent;
    }

    console.log(url);
    try {
      return fetch(url, config).then((res) => {
        if (res.ok) return res.json();
        if (!res.ok) throw res.statusText;
      });
    } catch (error) {
      //   /**Some errorhandling*/
      throw new Error(error.message);
    }
  }

  private validateAgent() {
    if (!this.#agent) throw new Error("No agent initiated");
    //Further validation
    return true;
  }

  private validateAuth(): boolean {
    if (!this.#username && !this.#password) throw new Error("No auth");
    // Further validation
    return true;
  }

  private addAuthToUrl(url: string): string {
    return `${url}&${this.createQueryString({
      username: this.#username,
      password: this.#password,
    })}`;
  }

  //QUICK MASHUP, Make pretty
  private buildUrl(opt: MethodInfo, params: Parameters) {
    let ep = this.getEndpoint(opt.zone);
    let r = this.register;
    let version: Version = "1";
    let serviceType = this.serviceType;

    let paramstring = this.createQueryString(params);

    let url = `https://${ep}/${r}/${opt.service}/${version}/${serviceType}/${opt.method}?${paramstring}`;

    return url;
  }

  private getEndpoint(zone: Zone): Endpoint {
    if (zone === "public") return "services.datafordeler.dk";
    if (zone === "public_protected") return "services.datafordeler.dk";
    if (zone === "cert0") return "certservices.datafordeler.dk";
    if (zone === "cert5") return "s5-certservices.datafordeler.dk";
    throw new Error("Wrong zone entered. Could not parse endpoint");
  }

  private createQueryString(parameters: Parameters): string {
    return Object.keys(parameters)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
      )
      .join("&");
  }
}

// let serviceOrg = {
//   endpoint: "services.datafordeler.dk",
//   register: "DAR",
//   service: "DAR_BFE_Public", //"DAR"
//   version: "1",
//   servicetype: "rest",
//   metode: "adresseTilEnhedBfe",
// };
