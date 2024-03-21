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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Service_agent, _Service_username, _Service_password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Service {
    constructor(config = {}, register, serviceType, version) {
        _Service_agent.set(this, void 0);
        _Service_username.set(this, void 0);
        _Service_password.set(this, void 0);
        __classPrivateFieldSet(this, _Service_username, (config === null || config === void 0 ? void 0 : config.username) || "", "f");
        __classPrivateFieldSet(this, _Service_password, (config === null || config === void 0 ? void 0 : config.password) || "", "f");
        __classPrivateFieldSet(this, _Service_agent, config === null || config === void 0 ? void 0 : config.agent, "f");
        this.register = register;
        this.serviceType = serviceType;
        this.version = version || "1";
    }
    set apiVersion(version) {
        this.version = version;
    }
    async Request(opt, params) {
        let url = this.buildUrl(opt, params);
        let config = {};
        if (opt.zone === "public_protected") {
            this.validateAuth();
            url = this.addAuthToUrl(url);
        }
        if (opt.zone === "cert0" || opt.zone === "cert5") {
            this.validateAgent(opt.zone);
            config.agent = __classPrivateFieldGet(this, _Service_agent, "f");
        }
        try {
            return (0, node_fetch_1.default)(url, config).then((res) => {
                if (res.ok)
                    return res.json();
                if (!res.ok)
                    throw res.statusText;
            });
        }
        catch (error) {
            // Further errorhandling
            if (error instanceof Error) {
                throw error.message;
            }
            throw error;
        }
    }
    validateAgent(zone) {
        if (!__classPrivateFieldGet(this, _Service_agent, "f"))
            throw new Error(`This endpoint is proctected (zone ${zone}) and no agent/certificate was initiated.\nUse the createAgent method on the client or insert an https-agent on client creation.`);
        //Further validation
        return true;
    }
    validateAuth() {
        if (!__classPrivateFieldGet(this, _Service_username, "f") && !__classPrivateFieldGet(this, _Service_password, "f"))
            throw new Error("This endpoint is protected. You need to insert username and password for your Datafordeler-account.");
        // Further validation
        return true;
    }
    addAuthToUrl(url) {
        return `${url}&${this.createQueryString({
            username: __classPrivateFieldGet(this, _Service_username, "f"),
            password: __classPrivateFieldGet(this, _Service_password, "f"),
        })}`;
    }
    buildUrl(opt, params) {
        var _a;
        const endpoint = this.getEndpoint(opt.zone);
        const register = this.register;
        const service = opt.service;
        const version = (_a = opt.version) !== null && _a !== void 0 ? _a : this.version;
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
        throw new Error("Wrong zone, could not parse a correct endpoint");
    }
    /** Takes an object {key: "value"} and creates a url string */
    createQueryString(parameters) {
        //Add validation of parameters object before init
        return Object.keys(parameters)
            .map((key) => {
            const valueIsArray = Array.isArray(parameters[key]);
            const value = valueIsArray ? parameters[key].join("|") : parameters[key];
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
            .join("&");
    }
}
exports.Service = Service;
_Service_agent = new WeakMap(), _Service_username = new WeakMap(), _Service_password = new WeakMap();
