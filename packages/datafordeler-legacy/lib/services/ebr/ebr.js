"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBR = void 0;
const core_1 = require("../../core");
//To do: Make it possible to call EBR with a cert at https://certservices.datafordeler.dk/EBR/Ejendomsbeliggenhed
//https://services.datafordeler.dk/EBR/Ejendomsbeliggenhed/1/REST/BFEnrAdresse
class EBR extends core_1.Service {
    constructor(config = {}) {
        super(config, "EBR", "rest");
    }
    async bfeNrAdresse(params) {
        return await this.Request(EBR.Methods.BFEnrAdresse, params);
    }
    async ejendomsbeliggenhed(params) {
        return await this.Request(EBR.Methods.Ejendomsbeliggenhed, params);
    }
    async ejendomsbeliggenhedSimpel(params) {
        return await this.Request(EBR.Methods.EjendomsbeliggenhedSimpel, params);
    }
    static get Services() {
        return Object.freeze({
            Ejendomsbeliggenhed: "Ejendomsbeliggenhed",
        });
    }
    static get Methods() {
        return Object.freeze({
            BFEnrAdresse: {
                zone: "public_protected",
                service: EBR.Services.Ejendomsbeliggenhed,
                method: "BFEnrAdresse",
            },
            Ejendomsbeliggenhed: {
                zone: "public_protected",
                service: EBR.Services.Ejendomsbeliggenhed,
                method: "Ejendomsbeliggenhed",
            },
            EjendomsbeliggenhedSimpel: {
                zone: "public_protected",
                service: EBR.Services.Ejendomsbeliggenhed,
                method: "EjendomsbeliggenhedSimpel",
            },
        });
    }
}
exports.EBR = EBR;
EBR.Register = "EBR";
