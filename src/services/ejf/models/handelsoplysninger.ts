import { Types } from "../../sharedTypes";

export interface HandelsoplysningerRequest {
  BFEnr?: string;
  HandelsOplysningsId?: Types.id_lokalId;
  Registreringstid?: Date;
  Virkningstid?: Date;
  Status?: string;
}

export interface Handelsoplysninger {
  properties: {
    datafordelerOpdateringstid: string;
    objectid: number;
    id_namespace: string;
    id_lokalId: string;
    forretningshaendelse:
      | "Endeligt skøde"
      | "Betinget skøde"
      | "Auktionsskøde"
      | "Bodeling"
      | "Bodeling";
    forretningsomraade: string;
    forretningsproces: string;
    status: string;
    registreringFra: string;
    registreringTil: string | null;
    registreringsaktoer: string;
    virkningFra: string;
    virkningTil: string | null;
    virkningsaktoer: string;
    behandlingsID: string;
    afstaaelsesdato: string | null;
    betalingsforpligtelsesdato: string | null;
    koebsaftaleDato: string;
    entreprisesum: number;
    husdyrbesaetningsum: number;
    loesoeresum: number | null;
    kontantKoebesum: number;
    samletKoebesum: number;
    valutakode: string;
    bygningerOmfattet?: null;
    skoedetekst?: string;
    ejerskifte?: string[];
  };
  type: "Feature";
}

export interface HandelsoplysningerResponse {
  features: Handelsoplysninger[];
  type: "FeatureCollection";
}
