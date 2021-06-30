import { Types } from "../../sharedTypes";

export interface EjerskabsskifteRequest {
  EjerskabsskifteId?: Types.id_lokalId;
  Registreringstid?: Date;
  RegistreringstidFra?: Date;
  RegistreringstidTil?: Date;
  Virkningstid?: Date;
  VirkningstidFra?: Date;
  VirkningstidTil?: Date;
  Status?: string;
}

export interface Ejerskabsskifte {
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
    afstaaetAndel_taeller: number | null;
    afstaaetAndel_naevner: number | null;
    modtagetAndel_taeller: number | null;
    modtagetAndel_naevner: number | null;
    modtagendeEjerobjektLokalId: null;
    ejerskifteLokalId: string;
    afgivendeEjerobjektLokalId: string;
  };
  type: "Feature";
}

export interface EjerskabsskifteResponse {
  features: Ejerskabsskifte[];
  type: "FeatureCollection";
}
