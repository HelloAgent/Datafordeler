import { Husnummer, adresseResponse as Adresse } from "../../dar/types";

export declare namespace EjendomsBeliggenhed {
  export interface Request {
    EBId?: string;
    BFEnr?: string;
    Registreringstid?: Date; //default Now
    Virkningstid?: Date; //default Now
    Status?: Status;
  }

  export type Status = "gældende" | "historisk";
  export type Forretningshaendelse =
    | "adresseændring"
    | "ejendomsforandring"
    | "ejerhenvendelse"
    | "konverteretFraESR";

  export type Forretningsproces = "automatiskBeregnet" | "manueltOpdateret" | "konverteretFraESR";

  export interface EjendomsBeliggenhedBasis {
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

  export interface EjendomsBeliggenhedSimpel extends EjendomsBeliggenhedBasis {
    adresseLokalId: string | null;
    husnummerLokalId: string | null;
  }

  export interface EjendomsBeliggenhed extends EjendomsBeliggenhedBasis {
    Ejendomstype: string;
    adresse: Adresse[]; // Dar Adress
    husnummer: Husnummer[]; //Dar Husnummer
  }

  export interface EjendomsBeliggenhedSimpelFeature {
    type: "Feature";
    properties: EjendomsBeliggenhedSimpel;
  }

  export interface ResponseSimpel {
    type: "FeatureCollection";
    features: EjendomsBeliggenhedSimpelFeature[];
  }

  export interface EjendomsBeliggenhedFeature {
    type: "Feature";
    properties: EjendomsBeliggenhed;
  }

  export interface ResponseFull {
    type: "FeatureCollection";
    features: EjendomsBeliggenhedFeature[];
  }
}
