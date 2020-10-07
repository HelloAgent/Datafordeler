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

  protected async Request<T>(opt: MethodInfo, params: Parameters): Promise<T> {
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

    try {
      return fetch(url, config).then((res) => {
        if (res.ok) return res.json();
        if (!res.ok) throw res.statusText;
      });
    } catch (error) {
      // Further errorhandling
      throw new Error(error.message);
    }
  }

  private validateAgent() {
    if (!this.#agent)
      throw new Error(
        "No agent initiated. Use the createAgent method on the client or insert an https-agent on client creation"
      );
    //Further validation
    return true;
  }

  private validateAuth(): boolean {
    if (!this.#username && !this.#password)
      throw new Error(
        "This endpoint is protected. You need to insert username and password for your Datafordeler-account."
      );
    // Further validation
    return true;
  }

  private addAuthToUrl(url: string): string {
    return `${url}&${this.createQueryString({
      username: this.#username,
      password: this.#password,
    })}`;
  }

  private buildUrl(opt: MethodInfo, params: Parameters) {
    const endpoint = this.getEndpoint(opt.zone);
    const register = this.register;
    const service = opt.service;
    const version: Version = "1";
    const serviceType = this.serviceType;
    const method = opt.method;

    const paramstring = this.createQueryString(params);

    /**
     * Example url structure
     * https://services.datafordeler.dk/DAR/DAR_BFE_Public/1/res/adresse?Id=xxx
     */
    return `https://${endpoint}/${register}/${service}/${version}/${serviceType}/${method}?${paramstring}`;
  }

  /** Returns correct endpoint to be used in Request() */
  private getEndpoint(zone: Zone): Endpoint {
    if (zone === "public") return "services.datafordeler.dk";
    if (zone === "public_protected") return "services.datafordeler.dk";
    if (zone === "cert0") return "certservices.datafordeler.dk";
    if (zone === "cert5") return "s5-certservices.datafordeler.dk";
    throw new Error("Wrong zone entered. Could not parse endpoint");
  }

  /** Takes an object {key: "value"} and creates a url string */
  private createQueryString(parameters: Parameters): string {
    //Add validation of parameters object before init
    return Object.keys(parameters)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
      )
      .join("&");
  }
}
