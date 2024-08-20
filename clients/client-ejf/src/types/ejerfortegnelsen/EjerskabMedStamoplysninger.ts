import type {
  FeatureCollection,
  IdLokalId,
  RegistreringFra,
  RegistreringTil,
  Status,
  VirkningFra,
  VirkningTil,
} from '@datafordeler/types';

import type { DARadresse } from '../DarAdresse';
import type { Ejerforholdskode } from '../Ejerforholdskode';
import type { Forretningshaendelse } from '../Forretningshaendelse';
import type { Forretningsproces } from '../Forretningsproces';
import type { PersonEllerVirksomhedsOplysning } from '../PersonEllerVirksomhedsOplysning';
import type { PersonSimpel } from '../PersonSimpel';
import type {
  ProduktionsenhedSimpel,
  VirksomhedSimpel,
} from '../VirksomhedSimpel';

export interface EjerskabMedStamoplysninger {
  bestemtFastEjendomBFENr: number;

  /**
   * Anvendes hvis der er ejeroplysninger, ejendePerson eller ejendeVirksomhed indeholder en reference til en DAR adresse
   */
  DARadresse?: DARadresse;

  /**
   * Anvendes, når administrator ikke er i CPR eller CVR
   */
  administratoroplysninger: PersonEllerVirksomhedsOplysning;

  /**
   * Anvendes når administrator er en person i CPR
   */
  administrerendePerson?: PersonSimpel;

  /**
   * Anvendes når administrator er en produktionsenhed i CVR
   */
  administrerendeProduktionsenhed?: ProduktionsenhedSimpel;

  /**
   * Anvendes når administrator er en virksomhed i CVR
   */
  administrerendeVirksomhed?: VirksomhedSimpel;

  /**
   * Markering af, om ejeren ifølge tinglysning, har begrænset dispositionsret til ejendommen
   */
  begraensning?: boolean;

  /**
   * BehandlingsId
   */
  behandlingsID: string;

  /**
   * Anvendes når ejer er en person i CPR
   */
  ejendePerson?: PersonSimpel;

  /**
   * Anvendes når ejer er en virksomhed i CVR
   */
  ejendeVirksomhed?: VirksomhedSimpel;

  /**
   * kode der klassificerer ejeren af ejendommen
   */
  ejerforholdskode: Ejerforholdskode;

  /**
   * Anvendes, når ejer ikke er i CPR eller CVR
   */
  ejeroplysninger: PersonEllerVirksomhedsOplysning;

  /**
   * Markering af om ejerskabet falder ind under bestemmelsen om ejendomme ejet siden 01.07.1998
   */
  ejetFoer01071998: boolean;

  /**
   * Angiver samlet antal andele i ejendommen.
   * @example 2
   */
  faktiskEjerandel_naevner: number;

  /**
   * Angiver ejerens andel af ejendommen.
   * Er tæller 1 og nævner 2, ejer vedkommende 50% af ejendommen.
   * @example 1
   */
  faktiskEjerandel_taeller: number;
  forretningshaendelse: Forretningshaendelse;
  forretningsomraade: '54.15';
  forretningsproces: Forretningsproces;
  id_lokalId: IdLokalId;
  id_namespace: 'http://data.gov.dk/ejerfortegnelse';

  /**
   * Angiver om ejer er den som offenlige myndigheder skal kontakte vedrørende ejendommen
   */
  primaerKontakt: boolean;
  registreringFra: RegistreringFra;
  registreringTil?: RegistreringTil;
  registreringsaktoer: string;
  status: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
  tinglystEjerandel_naevner?: number | null;
  tinglystEjerandel_taeller?: number | null;
  virkningFra: VirkningFra;
  virkningTil?: VirkningTil;
  virkningsaktoer: string;
}

export interface EjerskabMedStamoplysningerRequest {
  /**
   * Bestemt Fast Ejendom nummer
   */
  BFEnr?: string;

  /**
   * Lokalid for et ejerskab
   */
  Ejerskabsid?: string;

  /**
   * Dato som falder indenfor en virkningstidsperiode.
   * Anvendes fx 2015-09-02 vil de instanser med en gældende virkningstid på denne dato udvælges
   * @example 2015-09-02
   * @default NOW()
   */
  Virkningstid?: string;

  /**
   * Status jf. grunddatamodellens udfaldsrum for Ejerfortegnelsestatus
   * @example gældende
   * @default null
   */
  Status?: Status<'gældende' | 'tilbagerullet' | 'historisk'>;
}

export type EjerskabMedStamoplysningerResponse =
  FeatureCollection<EjerskabMedStamoplysninger>;
