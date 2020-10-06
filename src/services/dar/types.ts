import {} from "../../core/types";

interface adresseTilEnhedBfeRequest {
  adresseId: string;
}
interface adresseTilEnhedBfeResponseItem {
  item: number;
}
interface adresseTilEnhedBfeResponse
  extends Array<adresseTilEnhedBfeResponseItem> {}

export type Id = string;
export type Bygning = string;

export interface getAdresse {
  Id?: Id;
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
