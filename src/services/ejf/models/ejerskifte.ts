import { Types } from "../../sharedTypes";

export interface EjerskifteRequest {
  BFEnr?: string;
  EjerskifteId?: Types.id_lokalId;
  Registreringstid?: Date;
  RegistreringstidFra?: Date;
  RegistreringstidTil?: Date;
  Virkningstid?: Date;
  VirkningstidFra?: Date;
  VirkningstidTil?: Date;
  Status?: string;
}

export interface Ejerskifte {
  properties: {
    datafordelerOpdateringstid: string;
    objectid: number;
    id_namespace: string;
    id_lokalId: string;
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
    behandlingsID: string;
    anmeldelsesidentifikator: string;
    betinget: boolean;
    fristDato: string | null;
    overtagelsesdato: string;
    anmeldelsesdato: string;
    overdragelsesmaade: string;
    bestemtFastEjendomBFENr: number;
    handelsoplysningerLokalId: string;
  };
  type: "Feature";
}

export interface EjerskifteResponse {
  features: Ejerskifte[];
  type: "FeatureCollection";
}
