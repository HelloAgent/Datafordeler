"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _agent, _username, _password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const https_1 = require("https");
const fs_1 = require("fs");
const all_1 = require("../services/all");
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
        _agent.set(this, void 0);
        _username.set(this, void 0);
        _password.set(this, void 0);
        __classPrivateFieldSet(this, _username, (config === null || config === void 0 ? void 0 : config.username) || "");
        __classPrivateFieldSet(this, _password, (config === null || config === void 0 ? void 0 : config.password) || "");
        __classPrivateFieldSet(this, _agent, config === null || config === void 0 ? void 0 : config.agent);
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
            agent.options.pfx = fs_1.readFileSync(opt.localFilePath);
        __classPrivateFieldSet(this, _agent, agent);
    }
    get Auth() {
        return {
            agent: __classPrivateFieldGet(this, _agent),
            username: __classPrivateFieldGet(this, _username),
            password: __classPrivateFieldGet(this, _password),
        };
    }
    /**
     * Create a new DAR client
     * @params none
     * @return DAR client
     */
    DAR() {
        return new all_1.DAR(this.Auth);
    }
    EJF() {
        return new all_1.EJF(this.Auth);
    }
    /**
     * Create a new Events client
     * @params none
     * @return Event client
     */
    Events() {
        return new all_1.Haendelser(this.Auth);
    }
}
exports.Client = Client;
_agent = new WeakMap(), _username = new WeakMap(), _password = new WeakMap();
