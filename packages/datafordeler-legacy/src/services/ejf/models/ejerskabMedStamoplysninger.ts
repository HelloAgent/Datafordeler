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

  export interface CprAdresse {
    bygningsnummer: string;
    bynavn: string;
    cprKommunekode: string;
    cprKommunenavn: string;
    cprVejkode: string;
    darAdresseId: string;
    etage?: string;
    husnummer: string;
    postdistrikt: string;
    sidedoer?: string;
    postnummer: string;
    vejadresseringsnavn: string;
  }

  export interface Udenlandsadresse {
    adresselinie1: string;
    adresselinie2: string;
    adresselinie3: string;
    adresselinie4: string;
    adresselinie5: string;
  }
  export interface UdrejseIndrejse {
    Udenlandsadresse: Udenlandsadresse;
    cprLandUdrejse: string;
    cprLandekodeUdrejse: string;
  }

  export interface EjendePerson {
    Person: {
      Adresseoplysninger?: { adresseringsnavn?: string };
      Beskyttelser?: Beskyttelser[];
      CprAdresse?: CprAdresse;
      Navn?: {
        adresseringsnavn: string;
      };
      Standardadresse?: string;
      UdrejseIndrejse?: UdrejseIndrejse;
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
      registreringFra: string;
      registreringTil?: string;
      registreringsaktoer: string;
      status: string;
      virkningFra: string;
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

  export interface ProduktionsEnhed {
    entityType: string;
    attributes: {
      registreringFra: string;
      registreringsaktoer: string;
      status: string;
      virkningFra: string;
      virkningsaktoer: string;
      pNummer: number;
      reklamebeskyttelse: boolean;
      navn: string;
      beliggenhedsadresse: {
        "CVRAdresse.vejkode": string;
        "CVRAdresse.husnummerFra": string;
        "CVRAdresse.etagebetegnelse": string;
        "CVRAdresse.doerbetegnelse": string;
        "CVRAdresse.kommunekode": string;
        "CVRAdresse.kommunenavn": string;
        "CVRAdresse.postdistrikt": string;
        "CVRAdresse.vejnavn": string;
        "CVRAdresse.husnummerTil": string;
        "CVRAdresse.postnummer": string;
        "CVRAdresse.supplerendeBynavn": string;
        "CVRAdresse.adresseFritekst": string;
        "CVRAdresse.landekode": string;
        coNavn: string;
      };
    };
  }

  export interface Feature<T> {
    type: string;
    features: T[];
  }

  export interface AdministratorType {
    id_namespace: string;
    id_lokalId: string;
    behandlingsID: string;
    forretningshaendelse: string;
    forretningsomraade: string;
    forretningsproces: string;
    status: string;
    registreringFra: string;
    registreringTil: string | null;
    registreringsaktoer: string;
    virkningFra: string;
    virkningTil: string | null;
    virkningsaktoer: string;
    navn: string;
    fiktivtPVnummer: number;
    adresse: string | null;
    kommuneinddelingKommunekode: string;
    alternativAdresse: {
      adresselinje1: string;
      landeKodeNumerisk: string;
      adresselinje2: string;
      adresselinje3: string;
      adresselinje4: string;
      adresselinje5: string;
      adresselinje6: string;
      adresselinje7: string;
      adresselinje8: string;
      adresselinje9: string;
      adresselinje10: string;
    };
  }

  export type Administrator = AdministratorType;
  export type Administratoroplysninger = Feature<Administrator>;

  export type Ejeroplysning = AdministratorType;
  export type Ejeroplysninger = Feature<Ejeroplysning>;

  export type AdministrerendePerson = EjendePerson;
  export type AdministrerendeVirksomhed = EjendeVirksomhed;

  export interface Ejerskab {
    bestemtFastEjendomBFENr: number;
    DARadresse?: unknown;
    administratoroplysninger?: Administratoroplysninger;
    administrerendePerson?: AdministrerendePerson;
    administrerendeProduktionsenhed?: ProduktionsEnhed;
    administrerendeVirksomhed?: AdministrerendeVirksomhed;
    begraensning?: boolean | null;
    behandlingsID: string;
    ejendePerson?: EjendePerson;
    ejendeVirksomhed?: EjendeVirksomhed;
    ejerforholdskode: string;
    ejeroplysninger?: Ejeroplysninger;
    ejetFoer01071998: boolean;
    faktiskEjerandel_naevner: number;
    faktiskEjerandel_taeller: number;
    tinglystEjerandel_naevner: number | null;
    tinglystEjerandel_taeller: number | null;
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
