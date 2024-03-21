"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Haendelser = void 0;
const core_1 = require("../../core/");
class Haendelser extends core_1.Service {
    constructor(config) {
        super(config, "system", "custom", "1.0.0");
    }
    /**
     * Get an DAR address object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    async getPublicEvents(params) {
        return await this.Request(Haendelser.Methods.public, params);
    }
    async getPrivateEvents(params) {
        return await this.Request(Haendelser.Methods.protected, params);
    }
    static get Services() {
        return Object.freeze({
            EventMessages: "EventMessages",
        });
    }
    static get Methods() {
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
exports.Haendelser = Haendelser;
Haendelser.Register = "system";
