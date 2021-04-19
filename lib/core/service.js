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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _agent, _username, _password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Service {
    constructor(config, register, serviceType, version) {
        _agent.set(this, void 0);
        _username.set(this, void 0);
        _password.set(this, void 0);
        __classPrivateFieldSet(this, _username, (config === null || config === void 0 ? void 0 : config.username) || "");
        __classPrivateFieldSet(this, _password, (config === null || config === void 0 ? void 0 : config.password) || "");
        __classPrivateFieldSet(this, _agent, config === null || config === void 0 ? void 0 : config.agent);
        this.register = register;
        this.serviceType = serviceType;
        this.version = version || "1";
    }
    async Request(opt, params) {
        let url = this.buildUrl(opt, params);
        let config = {};
        if (opt.zone === "public_protected") {
            this.validateAuth();
            url = this.addAuthToUrl(url);
        }
        if (opt.zone === "cert0" || opt.zone === "cert5") {
            this.validateAgent();
            config.agent = __classPrivateFieldGet(this, _agent);
        }
        try {
            return node_fetch_1.default(url, config).then((res) => {
                if (res.ok)
                    return res.json();
                if (!res.ok)
                    throw res.statusText;
            });
        }
        catch (error) {
            // Further errorhandling
            throw new Error(error.message);
        }
    }
    validateAgent() {
        if (!__classPrivateFieldGet(this, _agent))
            throw new Error("No agent initiated. Use the createAgent method on the client or insert an https-agent on client creation");
        //Further validation
        return true;
    }
    validateAuth() {
        if (!__classPrivateFieldGet(this, _username) && !__classPrivateFieldGet(this, _password))
            throw new Error("This endpoint is protected. You need to insert username and password for your Datafordeler-account.");
        // Further validation
        return true;
    }
    addAuthToUrl(url) {
        return `${url}&${this.createQueryString({
            username: __classPrivateFieldGet(this, _username),
            password: __classPrivateFieldGet(this, _password),
        })}`;
    }
    buildUrl(opt, params) {
        const endpoint = this.getEndpoint(opt.zone);
        const register = this.register;
        const service = opt.service;
        const version = this.version; // Version = "1";
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
    getEndpoint(zone) {
        if (zone === "public")
            return "services.datafordeler.dk";
        if (zone === "public_protected")
            return "services.datafordeler.dk";
        if (zone === "cert0")
            return "certservices.datafordeler.dk";
        if (zone === "cert5")
            return "s5-certservices.datafordeler.dk";
        throw new Error("Wrong zone entered. Could not parse endpoint");
    }
    /** Takes an object {key: "value"} and creates a url string */
    createQueryString(parameters) {
        //Add validation of parameters object before init
        return Object.keys(parameters)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
            .join("&");
    }
}
exports.Service = Service;
_agent = new WeakMap(), _username = new WeakMap(), _password = new WeakMap();
