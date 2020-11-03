import { Types } from "../sharedTypes";

export type Id = string;
export type Bygning = string;

type addressId = Types.id_lokalId;
type husnummerId = Types.id_lokalId;
type vejId = Types.id_lokalId;

export namespace adresse {
  export interface request {}
  export interface response {}
}



export interface adresseRequest {
  Id?: addressId;
  VirkningFra?: string;
  VirkningTil?: string;
  Virkningsaktoer?: string;
  RegistreringFra?: string;
  RegistreringTil?: string;
  Registreringsaktoer?: string;
  Status?: string;
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  MedDybde?: string;
  DAFTimestampFra?: string;
  DAFTimestampTil?: string;
  Husnummer?: string;
  Bygning?: Bygning;
  NavngivenVej?: string;
  NavngivenVejKommunedel?: string;
  Kommunekode?: string;
  Vejkode?: string;
  Nord?: string;
  Syd?: string;
  Oest?: string;
  Vest?: string;
}

export interface adresseResponse {
  id_lokalId: addressId;
  husnummer: {
    id_lokalId: husnummerId;
    navngivenVej: {
      id_lokalId: vejId;
    };
  };
}
