import type {
  DateString,
  FeatureCollection,
  IdLokalId,
  Registreringstid,
  RegistreringstidFra,
  Status,
  Virkningstid,
  VirkningstidTil,
} from '@datafordeler/types';

import { Forretningshaendelse } from '../Forretningshaendelse';
import { Forretningsproces } from '../Forretningsproces';

export interface Ejerskabsskifte {
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
  afstaaetAndel_taeller?: number;
  afstaaetAndel_naevner?: number;
  modtagetAndel_taeller?: number;
  modtagetAndel_naevner?: number;
  modtagendeEjerobjektLokalId?: IdLokalId;
  afgivendeEjerobjektLokalId?: IdLokalId;
}

/**
 * Metoden returnerer Ejerfortegnelsens oplysninger om ejerskabsskifte.
 * Selve ejerskabene samt Stamoplysninger for ejere, som er involveret i ejerskiftet, udstilles ikke via denne service.
 */
export interface EjerskabsskifteRequest {
  /**
   * Lokal id for et ejerskabsskifte
   */
  EjerskabsskifteId?: IdLokalId;
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidFra;
  Registreringstid?: Registreringstid;
  VirkningstidTil?: VirkningstidTil;
  Virkningstid?: Virkningstid;

  /**
   * Status jf. grunddatamodellens udfaldsrum for Ejerfortegnelsestatus
   * @example gældende
   * @default null
   */
  Status?: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
}

export type EjerskabsskifteResponse = FeatureCollection<Ejerskabsskifte>;
