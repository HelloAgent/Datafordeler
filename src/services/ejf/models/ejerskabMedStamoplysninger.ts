import { Types } from "../../sharedTypes";

export declare namespace EjerskabMedStamoplysninger {
  export interface Request {
    BFEnr?: string;
    Ejerskabsid?: Types.id_lokalId;
    Virkningstid?: Date;
    Status?: "gældende" | "tilbagerullet" | "historisk";
  }

  export interface Beskyttelser {
    Beskyttelse: {
      beskyttelsestype: string;
    };
  }

  export interface EjendePerson {
    Person: {
      Beskyttelser?: Beskyttelser[];
      CprAdresse?: {
        cprKommunekode: string;
        cprKommunenavn: string;
        cprVejkode: string;
        husnummer: string;
        etage?: string;
        sidedoer?: string;
        postdistrikt: string;
        postnummer: string;
        vejadresseringsnavn: string;
      };
      Navn: {
        adresseringsnavn: string;
      };
      Standardadresse: string;
      foedselsdato: string;
      foedselsdatoUsikkerhedsmarkering: boolean;
      id: string;
      koen: string;
      status: string;
      statusdato: string;
      statusdatoUsikkerhedsmarkering: boolean;
    };
  }
  export interface EjendeVirksomhed {
    entityType: string;
    attributes: {
      registreringFra?: string;
      registreringTil?: string;
      registreringsaktoer?: string;
      status?: string;
      virkningFra?: string;
      virkningTil?: string;
      virkningsaktoer?: string;
      CVRNummer?: number;
      reklamebeskyttelse?: boolean;
      navn?: string;
      beliggenhedsadresse?: {
        "CVRAdresse.adresseFritekst"?: string;
        "CVRAdresse.doerbetegnelse"?: string;
        "CVRAdresse.etagebetegnelse"?: string;
        "CVRAdresse.husnummerFra"?: string;
        "CVRAdresse.husnummerTil"?: string;
        "CVRAdresse.kommunekode"?: string;
        "CVRAdresse.kommunenavn"?: string;
        "CVRAdresse.landekode"?: string;
        "CVRAdresse.postdistrikt"?: string;
        "CVRAdresse.postnummer"?: string;
        "CVRAdresse.supplerendeBynavn"?: string;
        "CVRAdresse.vejkode"?: string;
        "CVRAdresse.vejnavn"?: string;
        coNavn?: string;
      };
    };
  }

  export interface Ejerskab {
    bestemtFastEjendomBFENr: number;
    administratoroplysninger: {
      type: string;
      features: [];
    };
    behandlingsID: string;
    ejendePerson?: EjendePerson;
    ejendeVirksomhed?: EjendeVirksomhed;
    ejerforholdskode: string;
    ejeroplysninger: {
      type: string;
      features: [];
    };
    ejetFoer01071998: boolean;
    faktiskEjerandel_naevner: number;
    faktiskEjerandel_taeller: number;
    forretningshaendelse: string;
    forretningsomraade: string;
    forretningsproces: string;
    id_lokalId: string;
    id_namespace: string;
    primaerKontakt: boolean;
    registreringFra: string;
    registreringsaktoer: string;
    status: string;
    virkningFra: string;
    virkningsaktoer: string;
  }

  export interface EjerskabsFeature {
    properties: Ejerskab;
    type: "Feature";
  }

  export interface Response {
    features: EjerskabsFeature[];
    type: "FeatureCollection";
  }
}
