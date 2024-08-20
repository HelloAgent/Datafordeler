import type {
  FeatureCollection,
  IdLokalId,
  RegistreringFra,
  RegistreringTil,
  Status,
  VirkningFra,
  VirkningTil,
} from '@datafordeler/types';

import type { Forretningshaendelse } from './Forretningshaendelse';
import type { Forretningsproces } from './Forretningsproces';

export interface AlternativAdresse {
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
}

export interface PersonEllerVirksomhedsOplysningProperties {
  id_namespace: string;
  id_lokalId: IdLokalId;
  behandlingsID: string;
  forretningshaendelse: Forretningshaendelse;
  forretningsomraade: '54.15';
  forretningsproces: Forretningsproces;
  status: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
  registreringFra: RegistreringFra;
  registreringTil?: RegistreringTil;
  registreringsaktoer: string;
  virkningFra: VirkningFra;
  virkningTil?: VirkningTil;
  virkningsaktoer: string;
  navn: string;
  fiktivtPVnummer?: string;
  adresse?: string;
  kommuneinddelingKommunekode?: string;
  alternativAdresse?: AlternativAdresse;
}

export type PersonEllerVirksomhedsOplysning =
  FeatureCollection<PersonEllerVirksomhedsOplysningProperties>;
