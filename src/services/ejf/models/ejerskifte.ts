import { Types } from "../../sharedTypes";

export declare namespace Ejerskifte {
  export interface Request {
    BFEnr?: string;
    EjerskifteId?: Types.id_lokalId;
    Registreringstid?: Date;
    RegistreringstidFra?: Date;
    RegistreringstidTil?: Date;
    Virkningstid?: Date;
    VirkningstidFra?: Date;
    VirkningstidTil?: Date;
    Status?: "gældnede" | "tilbagerullet" | "historisk";
  }

  export type Forretningshaendelse =
    | "Ejerskifte tilbageført"
    | "Landsdækkende kørsel"
    | "Opdatering af ejendomsadministrator"
    | "Annulleret personnummer"
    | "Personnummer nedlagt pga. dobbeltregistrering"
    | "Person død"
    | "Person udrejst"
    | "Person forsvundet"
    | "Opdatering af administrator for person eller virksomhed"
    | "Opdatering af ejer uden registreret CPR- eller CVR nummer"
    | "Ophør af en produktionsenhed"
    | "Ophør af virksomhed"
    | "Skift af virksomhedsform"
    | "Administrator af ejerskab"
    | "Ægtepagt adkomst"
    | "Aflysning af betinget skøde"
    | "Aflyst eller annulleret ejerskab"
    | "Anden adkomst"
    | "Auktionsskøde"
    | "Betinget bodeling"
    | "Betinget skøde"
    | "Bodeling"
    | "Ejendomsdom"
    | "Indberettet ejerskifte"
    | "Endelig indførsel adkomst"
    | "Endeligt skøde"
    | "Hævd"
    | "Kopieret ejerskab til ny ejendom"
    | "Meddelelse fast ejendom adkomst"
    | "Meddelelse om tvangsauktion"
    | "Navneændring"
    | "Opdatering af person- eller virksomhedsoplysninger"
    | "Opretning af ejerandele"
    | "Oprettet ejerskab af ny ejendom"
    | "Rettelse af ejerskab"
    | "Skifteretsattest"
    | "SkifteretsattestÆgtefælle"
    | "Påtegning adkomst"
    | "Ukendt - konverteret fra ESR";

  export type Forretningsproces =
    | "Hændelse fra Digital Tinglysning"
    | "Konvertering fra ESR"
    | "Landsdækkende kørsel"
    | "Manuel opdatering"
    | "Hændelse fra CPR"
    | "Hændelse fra CVR"
    | "Opdatering fra Matriklen"
    | "Opdatering fra Skifte- eller Fogedret";

  export type Overdragelsesmaade =
    | "Almindelig fri handel"
    | "Almindelig fri handel særlige vilkår"
    | "Familieoverdragelse"
    | "Anden overdragelse"
    | "Interessesammenfald"
    | "Mageskifte"
    | "Ikke oplyst";

  export interface Ejerskifte {
    id_namespace: string;
    id_lokalId: string;
    behandlingsID: string;
    forretningshaendelse: Forretningshaendelse;
    forretningsomraade: "54.15";
    forretningsproces: Forretningsproces;
    status: "gældende" | "tilbagerullet" | "historisk";
    registreringFra: string;
    registreringTil: string | null;
    registreringsaktoer: string;
    virkningFra: string;
    virkningTil: string | null;
    virkningsaktoer: string;

    betinget: boolean | null;
    bilagsbankRef?: string[]; //Er angivet i schema men er ikke set nogen steder
    fristDato: string | null;
    overtagelsesdato: string;
    anmeldelsesdato: string | null;
    anmeldelsesidentifikator: string | null;
    overdragelsesmaade: Overdragelsesmaade | null;
    bestemtFastEjendomBFENr: number;
    ejerskabsskifte: string[];
    handelsoplysningerLokalId: string | null;
  }

  export interface EjerskifteFeature {
    properties: Ejerskifte;
    type: "Feature";
  }

  export interface Response {
    features: EjerskifteFeature[];
    type: "FeatureCollection";
  }
}
