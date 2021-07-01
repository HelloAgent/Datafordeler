export declare namespace BfenrAdresse {
  export interface Request {
    AdresseId?: string; //string eller list! lokalid UUID for DAR AdresseId
    HusnummerId?: string; //string eller list! lokalid UUID for DAR AdresseId
    Registreringstid?: Date; //default Now
    Virkningstid?: Date; //default Now
    Status?: Status;
  }

  export type Ejendomstype = "BygningPaaFremmedGrund" | "Ejerlejlighed" | "SamletFastEjendom";
  export type Status = "gældende" | "historisk";
  export type Forretningshaendelse =
    | "adresseændring"
    | "ejendomsforandring"
    | "ejerhenvendelse"
    | "konverteretFraESR";

  export type Forretningsproces = "automatiskBeregnet" | "manueltOpdateret" | "konverteretFraESR";

  export interface BFEnrAdresse {
    id_namespace: string;
    id_lokalId: string;
    bestemtFastEjendomBFENr: string;
    Ejendomstype: Ejendomstype;
    adresseManueltAngivet: boolean;
    ESDHReferenceAdresse: string | null;
    ESDHReferenceKommune: string | null;
    kommuneManueltAngivet: boolean;
    kommuneinddelingKommunekode: string;
    betegnelse: string | null;
    adresseLokalId: string | null;
    husnummerLokalId: string | null;
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

  export interface BfenrAdresseFeature {
    type: "Feature";
    properties: BFEnrAdresse;
  }

  export interface Response {
    type: "FeatureCollection";
    features: BfenrAdresseFeature[];
  }
}
