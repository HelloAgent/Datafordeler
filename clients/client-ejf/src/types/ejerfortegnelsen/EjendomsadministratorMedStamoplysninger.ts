import type {
  DateString,
  FeatureCollection,
  IdLokalId,
  Status,
  Virkningstid,
} from '@datafordeler/types';

import type { DARadresse } from '../DarAdresse';
import type { Forretningshaendelse } from '../Forretningshaendelse';
import type { Forretningsproces } from '../Forretningsproces';
import type { PersonEllerVirksomhedsOplysning } from '../PersonEllerVirksomhedsOplysning';
import type { PersonSimpel } from '../PersonSimpel';
import type {
  ProduktionsenhedSimpel,
  VirksomhedSimpel,
} from '../VirksomhedSimpel';

export interface EjendomsadministratorMedStamoplysninger {
  id_namespace: 'http://data.gov.dk/ejerfortegnelse';
  id_lokalId: IdLokalId;
  behandlingsID: string;
  forretningshaendelse: Forretningshaendelse;
  forretningsomraade: '54.15';
  forretningsproces: Forretningsproces;
  status: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
  registreringFra: DateString;
  registreringTil?: DateString;
  registreringsaktoer: string;
  virkningFra: DateString;
  virkningTil?: DateString;
  virkningsaktoer: string;

  /**
   * Anvendes, når administrator ikke er i CPR eller CVR
   */
  personEllerVirksomhed?: PersonEllerVirksomhedsOplysning;

  /**
   * Anvendes når administrator er en person i CPR
   */
  person?: PersonSimpel;

  /**
   * Anvendes når administrator er en virksomhed i CVR
   */
  virksomhed?: VirksomhedSimpel;

  /**
   * Anvendes når administrator er en produktionsenhed i CVR
   */
  produktionsenhed?: ProduktionsenhedSimpel;

  /**
   * Denne anvendes hvis der er personEllerVirksomhed, person eller virksomhed indeholder en reference til en DAR adresse
   */
  DARadresse?: DARadresse;

  bestemtFastEjendomBFENr: string;
}

export interface EjendomsadministratorMedStamoplysningerRequest {
  BFEnr?: string;
  Virkningstid?: Virkningstid;
  Status?: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
}

export type EjendomsadministratorMedStamoplysningerResponse =
  FeatureCollection<EjendomsadministratorMedStamoplysninger>;
