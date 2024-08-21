/* Basic types */
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

export type Forretningshaendelse<T extends string = string> = T;
export type Forretningsomraade<T extends string = string> = T;
export type Forretningsproces<T extends string = string> = T;

/* Types used in request objects */
export type Registreringstid = DateString;
export type RegistreringstidFra = DateString;
export type RegistreringstidTil = DateString;

export type Virkningstid = DateString;
export type VirkningstidFra = DateString;
export type VirkningstidTil = DateString;

/* Types used in response objects */
export interface Feature<T = Record<string, unknown>> {
  type: 'Feature';
  properties: T;
}

export interface FeatureCollection<T = Record<string, unknown>> {
  type: 'FeatureCollection';
  features: Feature<T>[];
}

/* Helpers */

/**
 * Infers the type from the properties of a FeatureCollection.
 *
 * @example ExtractProperties<FeatureCollection<{ foo: string }>> // { foo: string }
 */
export type ExtractProperties<T> = T extends {
  features: Array<{
    properties?: infer P;
  }>;
}
  ? P
  : never;

// export interface DatafordelerItem {
//   /**
//    * Lokal identifikation
//    */
//   id_lokalId: IdLokalId;

//   /**
//    * Identifikation af namespace
//    * @example "http://data.gov.dk/ejerfortegnelse"
//    */
//   id_namespace: IdNamespace;

//   /**
//    * Forretningshændelse
//    * @example "Endeligt skøde"
//    */
//   forretningshaendelse: Forretningshaendelse;

//   /**
//    * Forretningsområde
//    * @example "54.15"
//    */
//   forretningsomraade: Forretningsomraade;

//   /**
//    * Forretningsproces
//    * @example "Hændelse fra Digital Tinglysning"
//    */
//   forretningsproces: Forretningsproces;

//   /**
//    * Tidspunktet for objektets registrering
//    */
//   registreringFra: RegistreringFra;

//   /**
//    * Registreringsaktøer
//    * @example "ERST"
//    */
//   registreringsaktoer: Registreringsaktoer;

//   /**
//    * Tidspunktet hvor en ny registrering er foretaget på objektet, og hvor denne version ikke længere er den seneste
//    */
//   registreringTil?: RegistreringTil;

//   /**
//    * Tidspunktet hvor objektets virkning starter
//    */
//   virkningFra: VirkningFra;

//   /**
//    * Tidspunktet hvor objektets virkning ophører
//    */
//   virkningTil?: VirkningTil;

//   /**
//    * Virkningsaktøer
//    * @example "ERST"
//    */
//   virkningsaktoer: Virkningsaktoer;

//   /**
//    * Objektets status
//    * @example "gældende"
//    */
//   status: Status;
// }
