"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EJF = void 0;
const core_1 = require("../../core");
class EJF extends core_1.Service {
    constructor(config = {}) {
        super(config, "EJERFORTEGNELSE", "rest");
    }
    /**
     * Get an ejerSkabMedStamoplysninger object
     * @param {string} [Id] - the dar id for the address
     * @return {array} Returns array of addresses
     */
    async ejerskabMedStamoplysninger(params) {
        return await this.Request(EJF.Methods.EjerskabMedStamoplysninger, params);
    }
    async handelsoplysning(params) {
        return await this.Request(EJF.Methods.Handelsoplysninger, params);
    }
    async ejerskifte(params) {
        return await this.Request(EJF.Methods.Ejerskifte, params);
    }
    async ejerskabsskifte(params) {
        return await this.Request(EJF.Methods.Ejerskabsskifte, params);
    }
    static get Services() {
        return Object.freeze({
            Ejerfortegnelsen: "Ejerfortegnelsen",
            EjerfortegnelsenFortrolig: " EjerfortegnelsenFortrolig",
            EjerfortegnelsenFortroligBeskyttet: "EjerfortegnelsenFortroligBeskyttet",
        });
    }
    static get Methods() {
        return Object.freeze({
            EjerskabMedStamoplysninger: {
                zone: "cert5",
                service: EJF.Services.Ejerfortegnelsen,
                method: "EjerskabMedStamoplysninger",
            },
            Handelsoplysninger: {
                zone: "cert5",
                service: EJF.Services.Ejerfortegnelsen,
                method: "Handelsoplysning",
            },
            Ejerskifte: {
                zone: "cert5",
                service: EJF.Services.Ejerfortegnelsen,
                method: "Ejerskifte",
                version: "2.0.0", // Added version manuallly as Ejerskifte uses 2.0.0 and other methods in EJF uses 1.
            },
            Ejerskabsskifte: {
                zone: "cert5",
                service: EJF.Services.Ejerfortegnelsen,
                method: "Ejerskabsskifte",
            },
        });
    }
}
exports.EJF = EJF;
EJF.Register = "EJERFORTEGNELSE";
/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }
// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }
// import Buffer from "buffer"
