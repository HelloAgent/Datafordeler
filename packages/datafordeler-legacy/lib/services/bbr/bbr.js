"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BBR = void 0;
const core_1 = require("../../core");
class BBR extends core_1.Service {
    constructor(config = {}) {
        super(config, "BBR", "rest");
    }
    /**
     * Get an ejerSkabMedStamoplysninger object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    async enhed(params) {
        return await this.Request(BBR.Methods.Enhed, params);
    }
    async bygning(params) {
        return await this.Request(BBR.Methods.Bygning, params);
    }
    async ejendomsrelation(params) {
        return await this.Request(BBR.Methods.Ejendomsrelation, params);
    }
    static get Services() {
        return Object.freeze({
            BBRPublic: "BBRPublic",
        });
    }
    static get Methods() {
        return Object.freeze({
            Enhed: {
                zone: "public_protected",
                service: BBR.Services.BBRPublic,
                method: "enhed",
            },
            Bygning: {
                zone: "public_protected",
                service: BBR.Services.BBRPublic,
                method: "bygning",
            },
            Ejendomsrelation: {
                zone: "public_protected",
                service: BBR.Services.BBRPublic,
                method: "ejendomsrelation",
            },
        });
    }
}
exports.BBR = BBR;
BBR.Register = "BBR";
