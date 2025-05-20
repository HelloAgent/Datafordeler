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
import type { BBR_244_Bygning as Bygning_ } from './generated/BBR_2.4.4_Bygning.schema';
import type { BBR_244_EjendomsRelation as Ejendomsrelation_ } from './generated/BBR_2.4.4_EjendomsRelation.schema';
import type { BBR_244_Enhed as Enhed_ } from './generated/BBR_2.4.4_Enhed.schema';
import type { BBR_244_Grund as Grund_ } from './generated/BBR_2.4.4_Grund.schema';

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
export type Bygning = Bygning_[number];
export type BygningUdenDybde = Omit<
  Bygning,
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

export type BygningRequest = {
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

export type BygningResponse = Array<Bygning>;
export type BygningResponseUdenDybde = Array<BygningUdenDybde>;

/* BBR Ejendomsrelation */
export type Ejendomsrelation = Ejendomsrelation_[number];

export type EjendomsrelationRequest = {
  /**
   * Identifikation af ejendomsrelationen igennem hele sin livscyklus
   */
  Id?: IdLokalId | IdLokalId[];
  /**
   * Tidspunktet hvorfra den pågældende version af ejendomsrelationen har virkning
   */
  VirkningFra?: VirkningstidFra;
  /**
   * Tidspunktet hvor virkningen af den pågældende version af ejendomsrelationen ophører
   */
  VirkningTil?: VirkningstidTil;
  /**
   * Den aktør der har afstedkommet virkningsegenskaberne for den pågældende version af ejendomsrelationen
   */
  Virkningsaktoer?: string;
  /**
   * Tidspunktet hvor registreringen af den pågældende version af ejendomsrelationen er foretaget
   */
  RegistreringFra?: RegistreringstidFra;
  /**
   * Tidspunktet hvor en ny registrering på ejendomsrelationen er foretaget, og hvor denne version således ikke længere er den seneste.
   */
  RegistreringTil?: RegistreringstidTil;
  /**
   * Den aktør der har foretaget registreringen af den pågældende version af ejendomsrelationen
   */
  Registreringsaktoer?: string;
  /**
   * Ejendomsrelationens status i den pågældende version, dvs. ejendomsrelationens tilstand i den samlede livscyklus
   */
  Status?: Livscyklus | Livscyklus[];
  /**
   * Den forretningsproces, som afstedkom opdateringen af ejendomsrelationen til den pågældende version
   */
  Forretningsproces?: string;
  /**
   * Det forretningsområde som har opdateret ejendomsrelationen til den pågældende version
   */
  Forretningsomraade?: string;
  /**
   * Den forretningshændelse, som afstedkom opdateringen af ejendomsrelationen til den pågældende version
   */
  Forretningshaendelse?: string;
  /**
   * Den kommune som ejendomsrelationen er registreret i
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
   * BFE-nummer er altid én af følgende tre ejendomstyper: SFE, BPFG eller Ejerlejlighed
   */
  BFENummer?: number;
  /**
   * MU BygningPåFremmedGrund ID
   */
  BPFG?: number;
  /**
   * Ejerforholdskode
   */
  Ejerforholdskode?: string;
  /**
   * MU Ejerlejlighed ID
   */
  Ejerlejlighed?: number;
  /**
   * Ejendomsnummer (unik sammen med Kommunekode)
   */
  Ejendomsnummer?: number;
  /**
   * MU SamletFastEjendom ID
   */
  SamletFastEjendom?: number;
  /**
   * Vurderingsejendomsnummer
   */
  Vurderingsejendomsnummer?: number;
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

export type EjendomsrelationResponse = Array<Ejendomsrelation>;

/* BBR Enhed */
export type Enhed = Enhed_[number];
export type EnhedUdenDybde = Omit<
  Enhed,
  'ejerlejlighedList' | 'fordelingsarealList'
> & {
  ejerlejlighedList?: { id_lokalId?: IdLokalId }[];
  fordelingsarealList?: { id_lokalId?: IdLokalId }[];
};

export type EnhedRequest = {
  /**
   * Identifikation af enheden igennem hele sin livscyklus
   */
  Id?: IdLokalId | IdLokalId[];
  /**
   * Tidspunktet hvorfra den pågældende version af enheden har virkning
   */
  VirkningFra?: VirkningstidFra;
  /**
   * Tidspunktet hvor virkningen af den pågældende version af enheden ophører
   */
  VirkningTil?: VirkningstidTil;
  /**
   * Den aktør der har afstedkommet virkningsegenskaberne for den pågældende version af enheden
   */
  Virkningsaktoer?: string;
  /**
   * Tidspunktet hvor registreringen af den pågældende version af enheden er foretaget
   */
  RegistreringFra?: RegistreringstidFra;
  /**
   * Tidspunktet hvor en ny registrering på enheden er foretaget, og hvor denne version således ikke længere er den seneste.
   */
  RegistreringTil?: RegistreringstidTil;
  /**
   * Den aktør der har foretaget registreringen af den pågældende version af enheden
   */
  Registreringsaktoer?: string;
  /**
   * Enhedens status i den pågældende version, dvs. enhedens tilstand i den samlede livscyklus
   */
  Status?: Livscyklus | Livscyklus[];
  /**
   * Den forretningsproces, som afstedkom opdateringen af enheden til den pågældende version
   */
  Forretningsproces?: string;
  /**
   * Det forretningsområde som har opdateret enheden til den pågældende version
   */
  Forretningsomraade?: string;
  /**
   * Den forretningshændelse, som afstedkom opdateringen af enheden til den pågældende version
   */
  Forretningshaendelse?: string;
  /**
   * Den kommune som enheden ligger i
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
   * BFE-nummer
   * Er enheden af ejendomstypen Ejerlejlighed kan BFE-nummer bruges som inputparameter.
   */
  BFENummer?: number;
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
  TekniskAnlaeg?: IdLokalId | IdLokalId[];
  /**
   * BBR Ejendomsrelation ID
   */
  Ejendomsrelation?: IdLokalId;
  /**
   * DAR Adresse ID
   */
  AdresseIdentificerer?: IdLokalId;
  /**
   * BBR Bygning ID
   */
  Bygning?: IdLokalId | IdLokalId[];
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

export type EnhedResponse = Array<Enhed>;
export type EnhedResponseUdenDybde = Array<EnhedUdenDybde>;

/* BBR Grund */
export type Grund = Grund_[number];
export type GrundUdenDybde = Omit<Grund, 'bestemtFastEjendom'> & {
  bestemtFastEjendom: { id_lokalId?: IdLokalId };
};

export type GrundRequest = {
  /**
   * Identifikation af grunden igennem hele sin livscyklus
   */
  Id?: IdLokalId | IdLokalId[];
  /**
   * Tidspunktet hvorfra den pågældende version af grunden har virkning
   */
  VirkningFra?: VirkningstidFra;
  /**
   * Tidspunktet hvor virkningen af den pågældende version af grunden ophører
   */
  VirkningTil?: VirkningstidTil;
  /**
   * Den aktør der har afstedkommet virkningsegenskaberne for den pågældende version af grunden
   */
  Virkningsaktoer?: string;
  /**
   * Tidspunktet hvor registreringen af den pågældende version af grunden er foretaget
   */
  RegistreringFra?: RegistreringstidFra;
  /**
   * Tidspunktet hvor en ny registrering på grunden er foretaget, og hvor denne version således ikke længere er den seneste.
   */
  RegistreringTil?: RegistreringstidTil;
  /**
   * Den aktør der har foretaget registreringen af den pågældende version af grunden
   */
  Registreringsaktoer?: string;
  /**
   * Grundens status i den pågældende version, dvs. grundens tilstand i den samlede livscyklus
   */
  Status?: Livscyklus | Livscyklus[];
  /**
   * Den forretningsproces, som afstedkom opdateringen af grunden til den pågældende version
   */
  Forretningsproces?: string;
  /**
   * Det forretningsområde som har opdateret grunden til den pågældende version
   */
  Forretningsomraade?: string;
  /**
   * Den forretningshændelse, som afstedkom opdateringen af grunden til den pågældende version
   */
  Forretningshaendelse?: string;
  /**
   * Den kommune som grunden er registret i
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
   * BFE-nummer
   * En grund er altid af ejendomstypen Samlet Fast Ejendom. Kun BFE-numre af ejendomstypen Samlet Fast Ejendom kan bruges som inputparameter.
   */
  BFENummer?: number;
  /**
   * BBR Bygning ID
   */
  Bygning?: IdLokalId;
  /**
   * BBR TekniskAnlæg ID
   */
  TekniskAnlaeg?: IdLokalId;
  /**
   * BBR Ejendomsrelation ID
   */
  Ejendomsrelation?: IdLokalId;
  /**
   * MU Jordstykke ID
   */
  Jordstykke?: number;
  /**
   * DAR Husnummer ID
   */
  Husnummer?: IdLokalId | IdLokalId[];
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

export type GrundResponse = Array<Grund>;
export type GrundResponseUdenDybde = Array<GrundUdenDybde>;
