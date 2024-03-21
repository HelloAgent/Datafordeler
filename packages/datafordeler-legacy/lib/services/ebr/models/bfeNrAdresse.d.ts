export declare namespace BFEnrAdresse {
    interface Request {
        AdresseId?: string | string[];
        HusnummerId?: string | string[];
        Registreringstid?: Date;
        Virkningstid?: Date;
        Status?: Status;
    }
    type Ejendomstype = "BygningPaaFremmedGrund" | "Ejerlejlighed" | "SamletFastEjendom";
    type Status = "gældende" | "historisk";
    type Forretningshaendelse = "adresseændring" | "ejendomsforandring" | "ejerhenvendelse" | "konverteretFraESR";
    type Forretningsproces = "automatiskBeregnet" | "manueltOpdateret" | "konverteretFraESR";
    interface BFEnrAdresse {
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
    interface BFEnrAdresseFeature {
        type: "Feature";
        properties: BFEnrAdresse;
    }
    interface Response {
        type: "FeatureCollection";
        features: BFEnrAdresseFeature[];
    }
}
