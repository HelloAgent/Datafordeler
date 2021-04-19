/// <reference types="node" />
import { Agent } from "https";
import { EJF, DAR, Haendelser } from "../services/all";
import { clientInit, certificateOptions } from "./types";
/**
 * Initializes a Datafordeler client that can be configured with credentials
 * that will be passed along to its services when created. Changes to the
 * client will not be passed to services already created.
 * @param {string} [username] (optional) - username for use with password-protected endpoints
 * @param {string} [password] (optional) - password for use with password-protected endpoints
 * @param {Agent} [agent] (optional) - an alreaded created https-agent to be used for protected calls
 */
export declare class Client {
    #private;
    constructor(config?: clientInit);
    /**
     * Create a certificate agent to access secured apis
     * Required fields are passphrase and certBuffer OR localFileName
     * @param passphrase password for validation of the certifcate
     * @param certBuffer a buffer of the pcks/.p12 certificate
     * @param localFileName full path to a local file of format .pcks/.p12
     * @returns Void
     */
    createAgent(opt: certificateOptions): void;
    protected get Auth(): {
        agent: Agent | undefined;
        username: string | undefined;
        password: string | undefined;
    };
    /**
     * Create a new DAR client
     * @params none
     * @return DAR client
     */
    DAR(): DAR;
    EJF(): EJF;
    /**
     * Create a new Events client
     * @params none
     * @return Event client
     */
    Events(): Haendelser;
}
