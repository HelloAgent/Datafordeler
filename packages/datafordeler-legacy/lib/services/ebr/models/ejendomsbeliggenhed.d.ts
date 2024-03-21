import { Husnummer, adresseResponse as Adresse } from "../../dar/types";
export declare namespace EjendomsBeliggenhed {
    interface Request {
        EBId?: string;
        BFEnr?: string;
        Registreringstid?: Date;
        Virkningstid?: Date;
        Status?: Status;
    }
    type Status = "gældende" | "historisk";
    type Forretningshaendelse = "adresseændring" | "ejendomsforandring" | "ejerhenvendelse" | "konverteretFraESR";
    type Forretningsproces = "automatiskBeregnet" | "manueltOpdateret" | "konverteretFraESR";
    interface EjendomsBeliggenhedBasis {
        id_namespace: string;
        id_lokalId: string;
        bestemtFastEjendomBFENr: string;
        betegnelse: string | null;
        ESDHReferenceAdresse: string | null;
        ESDHReferenceKommune: string | null;
        adresseManueltAngivet: boolean;
        kommuneManueltAngivet: boolean;
        kommuneinddelingKommunekode: string;
        status: Status;
        forretningshaendelse: Forretningshaendelse;
        forretningsomraade: "52.20.05";
        forretningsproces: Forretningsproces;
        virkningFra: string;
        virkningTil: string | null;
        virkningsaktoer: string;
        registreringFra: string;
        registreringTil: string | null;
        registreringsaktoer: string;
    }
    interface EjendomsBeliggenhedSimpel extends EjendomsBeliggenhedBasis {
        adresseLokalId: string | null;
        husnummerLokalId: string | null;
    }
    interface EjendomsBeliggenhed extends EjendomsBeliggenhedBasis {
        Ejendomstype: string;
        adresse: Adresse[];
        husnummer: Husnummer[];
    }
    interface EjendomsBeliggenhedSimpelFeature {
        type: "Feature";
        properties: EjendomsBeliggenhedSimpel;
    }
    interface ResponseSimpel {
        type: "FeatureCollection";
        features: EjendomsBeliggenhedSimpelFeature[];
    }
    interface EjendomsBeliggenhedFeature {
        type: "Feature";
        properties: EjendomsBeliggenhed;
    }
    interface ResponseFull {
        type: "FeatureCollection";
        features: EjendomsBeliggenhedFeature[];
    }
}
