export type IdLokalId = string;
export type IdNamespace = string;
export type Status<T extends string = string> = T;

export type DateString = string;

export type RegistreringFra = DateString;
export type RegistreringTil = DateString | null;
export type Registreringsaktoer = string;

export type VirkningFra = DateString;
export type VirkningTil = DateString | null;
export type Virkningsaktoer = string;

export type ForretningsHaendelse<T extends string = string> = T;
export type ForretningsOmraade<T extends string = string> = T;
export type ForretningsProces<T extends string = string> = T;

export interface Feature<T = Record<string, unknown>> {
  properties: T;
  type: 'Feature';
}

export interface FeatureCollection<T = Record<string, unknown>> {
  features: Feature<T>[];
  type: 'FeatureCollection';
}

export interface DatafordelerItem {
  id_lokalId: IdLokalId;
  id_namespace: IdNamespace;
  forretningshaendelse: ForretningsHaendelse;
  forretningsomraade: ForretningsOmraade;
  forretningsproces: ForretningsProces;
  registreringFra: RegistreringFra;
  registreringsaktoer: Registreringsaktoer;
  registreringTil?: RegistreringTil;
  virkningFra: VirkningFra;
  virkningTil?: VirkningTil;
  virkningsaktoer: Virkningsaktoer;
  status: Status;
}
