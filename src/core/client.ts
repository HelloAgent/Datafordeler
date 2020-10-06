import { Agent } from "https";
import { readFileSync } from "fs";
import { DAR } from "../services/all";
import { clientInit, certificateOptions } from "./types";

/**
 * Initializes a Datafordeler client that can be configured with credentials
 * that will be passed along to its services when created. Changes to the
 * client will not be passed to services already created.
 * @params username, password and/or an agent (can also create an agent with the helper function)
 */
export class Client {
  #agent?: Agent;
  #username?: string;
  #password?: string;

  constructor(config?: clientInit) {
    this.#username = config?.username || "";
    this.#password = config?.password || "";
    this.#agent = config?.agent;
  }

  /**
   * Create a certificate agent to access secured apis
   * @param passphrase password for validation of the certifcate
   * @param certBuffer a buffer of the pcks/.p12 certificate
   * @param localFileName a path to a local file of format .pcks/.p12
   * @returns Void
   */
  public createAgent(opt: certificateOptions) {
    let agent = new Agent({ passphrase: opt.passphrase });
    if (!opt.certBuffer && !opt.localFilePath) {
      throw new Error("buffer or localFilePath needs to be defined");
    }
    if (opt.certBuffer) agent.options.pfx = opt.certBuffer;
    if (opt.localFilePath) agent.options.pfx = readFileSync(opt.localFilePath);
    this.#agent = agent;
  }

  protected get Auth() {
    return {
      agent: this.#agent,
      username: this.#username,
      password: this.#password,
    };
  }

  /**
   * Returns a new immutable DAR client.
   */
  DAR() {
    return new DAR(this.Auth);
  }
}
