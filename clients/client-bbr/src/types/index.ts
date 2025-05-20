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
import type { BBR_244_Bygning as BBRBygning_ } from './generated/BBR_2.4.4_Bygning.schema';

/* BBR Sag */
export type BBRSag = BBRSag_[number];
export type BBRSagUdenDybde = Omit<BBRSag, 'sagsniveauList'> & {
  sagsniveauList?: { id_lokalId?: IdLokalId }[];
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

/* BBR Bygning */
export type BBRBygning = BBRBygning_[number];
export type BBRBygningUdenDybde = Omit<
  BBRBygning,
  | 'etageList'
  | 'opgangList'
  | 'fordelingsarealList'
  | 'bygningPåFremmedGrundList'
> & {
  etageList?: { id_lokalId?: IdLokalId }[];
  opgangList?: { id_lokalId?: IdLokalId }[];
  fordelingsarealList?: { id_lokalId?: IdLokalId }[];
  bygningPåFremmedGrundList?: { id_lokalId?: IdLokalId }[];
};

export type BBRBygningRequest = {
  /**
   * Identifikation af bygværkselementet igennem hele dets livscyklus
   */
  Id?: IdLokalId | IdLokalId[];
  /**
   * Tidspunktet hvorfra den pågældende version af bygværkselement har virkning
   */
  VirkningFra?: VirkningstidFra;
  /**
   * Tidspunktet hvor virkningen af den pågældende version af bygværkselementet ophører
   */
  VirkningTil?: VirkningstidTil;
  /**
   * Den aktør der har afstedkommet virkningsegenskaberne for den pågældende version af bygværkselementet
   */
  Virkningsaktoer?: string;
  /**
   * Tidspunktet hvor registreringen af den pågældende version af bygværkselementet er foretaget
   */
  RegistreringFra?: RegistreringstidFra;
  /**
   * Tidspunktet hvor en ny registrering på bygværkselementet er foretaget, og hvor denne version således ikke længere er den seneste.
   */
  RegistreringTil?: RegistreringstidTil;
  /**
   * Den aktør der har foretaget registreringen af den pågældende version af bygværkselementet
   */
  Registreringsaktoer?: string;
  /**
   * Bygværkselementets status i den pågældende version, dvs. elementets tilstand i den samlede livscyklus
   */
  Status?: Livscyklus | Livscyklus[];
  /**
   * Den forretningsproces, som afstedkom opdateringen af bygværkselementet til den pågældende version
   */
  Forretningsproces?: string;
  /**
   * Det forretningsområde som har opdateret bygværkselementet til den pågældende version
   */
  Forretningsomraade?: string;
  /**
   * Den forretningshændelse, som afstedkom opdateringen af bygværkselementet til den pågældende version
   */
  Forretningshaendelse?: string;
  /**
   * Den kommune som bygværkselementet ligger i
   */
  Kommunekode?: string;
  /**
   * Angiver om resultatet skal indeholde nested data fra joins eller kun ID'er.
   * @default true
   */
  MedDybde?: boolean;
  /**
   * Fra Datafordeler opdateringstidspunkt
   */
  DAFTimestampFra?: DateString;
  /**
   * Til Datafordeler opdateringstidspunkt
   */
  DAFTimestampTil?: DateString;
  /**
   * BBR Etage ID
   */
  Etage?: IdLokalId | IdLokalId[];
  /**
   * BBR Fordelingsareal ID
   */
  Fordelingsareal?: IdLokalId;
  /**
   * BBR Opgang ID
   */
  Opgang?: IdLokalId | IdLokalId[];
  /**
   * BBR TekniskAnlæg ID
   */
  TekniskAnlaeg?: IdLokalId;
  /**
   * BBR Grund ID
   */
  Grund?: IdLokalId;
  /**
   * MU Jordstykke ID
   */
  Jordstykke?: number;
  /**
   * BBR Ejendomsrelation ID
   * Bemærk BBR systemet tillader, at en BBR Bygning kan have relation til flere BFE(BPFG)-numre.
   */
  Ejendomsrelation?: IdLokalId;
  /**
   * DAR Husnummer ID
   */
  Husnummer?: IdLokalId;
  /**
   * BFE-nummer
   * Se bemærkninger i dokumentation.
   */
  BFENummer?: number;
  /**
   * Nordlig koordinat afgrænsning
   */
  Nord?: number;
  /**
   * Sydlig koordinat afgrænsning
   */
  Syd?: number;
  /**
   * Østlig koordinat afgrænsning
   */
  Oest?: number;
  /**
   * Vestlig koordinat afgrænsning
   */
  Vest?: number;
  /**
   * Tidspunkt hvor perioden med ændringer begynder. Kan kun benyttes i kombination med PeriodeaendringTil.
   */
  PeriodeaendringFra?: DateString;
  /**
   * Tidspunkt hvor perioden med ændringer slutter. Kan kun benyttes i kombination med PeriodeaendringFra.
   */
  PeriodeaendringTil?: DateString;
  /**
   * Angives hvis man kun vil have de nye versioner af dataobjekterne. Kan kun benyttes i kombination med PeriodeaendringFra og PeriodeaendringTil.
   * @default false
   */
  KunNyesteIPeriode?: boolean;
};

export type BBRBygningResponse = Array<BBRBygning>;
export type BBRBygningResponseUdenDybde = Array<BBRBygningUdenDybde>;
