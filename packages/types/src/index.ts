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
  type: 'Feature';
  properties: T;
}

export interface FeatureCollection<T = Record<string, unknown>> {
  type: 'FeatureCollection';
  features: Feature<T>[];
}

export interface DatafordelerItem {
  /**
   * Lokal identifikation
   */
  id_lokalId: IdLokalId;

  /**
   * Identifikation af namespace
   * @example "http://data.gov.dk/ejerfortegnelse"
   */
  id_namespace: IdNamespace;

  /**
   * Forretningshændelse
   * @example "Endeligt skøde"
   */
  forretningshaendelse: ForretningsHaendelse;

  /**
   * Forretningsområde
   * @example "54.15"
   */
  forretningsomraade: ForretningsOmraade;

  /**
   * Forretningsproces
   * @example "Hændelse fra Digital Tinglysning"
   */
  forretningsproces: ForretningsProces;

  /**
   * Tidspunktet for objektets registrering
   */
  registreringFra: RegistreringFra;

  /**
   * Registreringsaktøer
   * @example "ERST"
   */
  registreringsaktoer: Registreringsaktoer;

  /**
   * Tidspunktet hvor en ny registrering er foretaget på objektet, og hvor denne version ikke længere er den seneste
   */
  registreringTil?: RegistreringTil;

  /**
   * Tidspunktet hvor objektets virkning starter
   */
  virkningFra: VirkningFra;

  /**
   * Tidspunktet hvor objektets virkning ophører
   */
  virkningTil?: VirkningTil;

  /**
   * Virkningsaktøer
   * @example "ERST"
   */
  virkningsaktoer: Virkningsaktoer;

  /**
   * Objektets status
   * @example "gældende"
   */
  status: Status;
}
