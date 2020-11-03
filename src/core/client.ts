import { Agent } from "https";
import { readFileSync } from "fs";
import { DAR, Haendelser } from "../services/all";
import { clientInit, certificateOptions } from "./types";

/**
 * Initializes a Datafordeler client that can be configured with credentials
 * that will be passed along to its services when created. Changes to the
 * client will not be passed to services already created.
 * @param {string} [username] (optional) - username for use with password-protected endpoints
 * @param {string} [password] (optional) - password for use with password-protected endpoints
 * @param {Agent} [agent] (optional) - an alreaded created https-agent to be used for protected calls
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
   * Required fields are passphrase and certBuffer OR localFileName
   * @param passphrase password for validation of the certifcate
   * @param certBuffer a buffer of the pcks/.p12 certificate
   * @param localFileName full path to a local file of format .pcks/.p12
   * @returns Void
   */
  public createAgent(opt: certificateOptions) {
    // Consider to add keepalive: true to new agent or have it as an option
    // Consier to add rejectUnauthorized: false to new agent or have it as an option,
    // Consier to add requestCert: true
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
   * Create a new DAR client
   * @params none
   * @return DAR client
   */
  DAR() {
    return new DAR(this.Auth);
  }

  /**
   * Create a new Events client
   * @params none
   * @return Event client
   */
  Events() {
    return new Haendelser(this.Auth);
  }
}
