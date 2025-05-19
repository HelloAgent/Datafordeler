import type {
  DateString,
  IdLokalId,
  RegistreringstidFra,
  RegistreringstidTil,
  VirkningstidFra,
  VirkningstidTil,
} from '@datafordeler/types';

import type { Livscyklus } from '../livscyklus';
import type { BBR_244_BBRSag as BBRSag_ } from './generated/BBR_2.4.4_BBRSag.schema';

/* BBR Sag */
export type BBRSag = BBRSag_[number];
export type BBRSagUdenDybde = Omit<BBRSag, 'sagsniveauList'> & {
  sagsniveauList: Array<{
    id_lokalid: IdLokalId;
  }>;
};

export type BBRSagRequest = {
  Id?: IdLokalId | IdLokalId[];
  VirkningFra?: VirkningstidFra;
  VirkningTil?: VirkningstidTil;
  Virkningsaktoer?: string;
  RegistreringFra?: RegistreringstidFra;
  RegistreringTil?: RegistreringstidTil;
  Registreringsaktoer?: string;
  /**
   * Byggesagens status i den pågældende version, dvs. byggesagens tilstand i den samlede livscyklus.
   *
   * https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
   * @default null
   */
  Status?: Livscyklus | Livscyklus[];
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  /**
   * Den kommune som byggesagen er registret i.
   * @default null
   */
  Kommunekode?: string;
  /**
   * Angiver om resultatet skal indeholde nested data fra joins eller kun ID'er.
   * @default true
   */
  MedDybde?: boolean;
  DAFTimestampFra?: DateString;
  DAFTimestampTil?: DateString;
  Bygning?: IdLokalId;
  Enhed?: IdLokalId;
  Etage?: IdLokalId;
  Grund?: IdLokalId;
  Opgang?: IdLokalId;
  TekniskAnlaeg?: IdLokalId;
  PeriodeaendringFra?: DateString;
  PeriodeaendringTil?: DateString;
  /**
   * Angives hvis man kun vil have de nye versioner af dataobjekterne. Kan kun benyttes i kombination med PeriodeaendringFra og PeriodeaendringTil.
   * @default false
   */
  KunNyesteIPeriode?: boolean;
};

export type BBRSagResponse = Array<BBRSag>;
export type BBRSagResponseUdenDybde = Array<BBRSagUdenDybde>;
