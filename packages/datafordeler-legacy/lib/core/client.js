"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_agent, _Client_username, _Client_password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const https_1 = require("https");
const fs_1 = require("fs");
const services_1 = require("../services");
/**
 * Initializes a Datafordeler client that can be configured with credentials
 * that will be passed along to its services when created. Changes to the
 * client will not be passed to services already created.
 * @param {string} [username] (optional) - username for use with password-protected endpoints
 * @param {string} [password] (optional) - password for use with password-protected endpoints
 * @param {Agent} [agent] (optional) - an alreaded created https-agent to be used for protected calls
 */
class Client {
    constructor(config) {
        _Client_agent.set(this, void 0);
        _Client_username.set(this, void 0);
        _Client_password.set(this, void 0);
        __classPrivateFieldSet(this, _Client_username, (config === null || config === void 0 ? void 0 : config.username) || "", "f");
        __classPrivateFieldSet(this, _Client_password, (config === null || config === void 0 ? void 0 : config.password) || "", "f");
        __classPrivateFieldSet(this, _Client_agent, config === null || config === void 0 ? void 0 : config.agent, "f");
    }
    /**
     * Create a certificate agent to access secured apis
     * Required fields are passphrase and certBuffer OR localFileName
     * @param passphrase password for validation of the certifcate
     * @param certBuffer a buffer of the pcks/.p12 certificate
     * @param localFileName full path to a local file of format .pcks/.p12
     * @returns Void
     */
    createAgent(opt) {
        // Consider to add keepalive: true to new agent or have it as an option
        // Consier to add rejectUnauthorized: false to new agent or have it as an option,
        // Consier to add requestCert: true
        let agent = new https_1.Agent({ passphrase: opt.passphrase });
        if (!opt.certBuffer && !opt.localFilePath) {
            throw new Error("buffer or localFilePath needs to be defined");
        }
        if (opt.certBuffer)
            agent.options.pfx = opt.certBuffer;
        if (opt.localFilePath)
            agent.options.pfx = (0, fs_1.readFileSync)(opt.localFilePath);
        __classPrivateFieldSet(this, _Client_agent, agent, "f");
    }
    get Auth() {
        return {
            agent: __classPrivateFieldGet(this, _Client_agent, "f"),
            username: __classPrivateFieldGet(this, _Client_username, "f"),
            password: __classPrivateFieldGet(this, _Client_password, "f"),
        };
    }
    /**
     * Create a new DAR client
     * @params none
     * @return DAR client
     */
    DAR() {
        return new services_1.DAR(this.Auth);
    }
    /**
     * Create a new Ejerfortegnelse client
     * @params none
     * @return EJF client
     */
    EJF() {
        return new services_1.EJF(this.Auth);
    }
    /**
     * Create a new Bbr client
     * @params none
     * @return BBR client
     */
    BBR() {
        return new services_1.BBR(this.Auth);
    }
    /**
     * Create a new EjendomsbeliggenhedsRegister client
     * @params none
     * @return EBR client
     */
    EBR() {
        return new services_1.EBR(this.Auth);
    }
    /**
     * Create a new Events client
     * @params none
     * @return Event client
     */
    Events() {
        return new services_1.Haendelser(this.Auth);
    }
}
exports.Client = Client;
_Client_agent = new WeakMap(), _Client_username = new WeakMap(), _Client_password = new WeakMap();
