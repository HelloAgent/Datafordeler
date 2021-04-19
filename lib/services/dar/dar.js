"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAR = void 0;
const service_1 = require("../../core/service");
class DAR extends service_1.Service {
    constructor(config) {
        super(config, "DAR", "rest");
    }
    /**
     * Get an DAR address object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    async getAdresse(params) {
        return await this.Request(DAR.Methods.adresse, params);
    }
    static get Services() {
        return Object.freeze({
            DAR: "DAR",
            DAR_BFE_Public: "DAR_BFE_Public",
        });
    }
    static get Methods() {
        return Object.freeze({
            adresse: {
                zone: "public",
                service: DAR.Services.DAR,
                method: "adresse",
            },
        });
    }
}
exports.DAR = DAR;
DAR.Register = "DAR";
/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }
// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }
// import Buffer from "buffer"
