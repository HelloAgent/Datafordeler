"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EJF = void 0;
const service_1 = require("../../core/service");
class EJF extends service_1.Service {
    constructor(config) {
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
