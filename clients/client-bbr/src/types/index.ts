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
import type { BBR_244_TekniskAnlaeg } from './generated/BBR_2.4.4_TekniskAnlæg.schema';

export type BaseRequest = {
  /**
   * Identifikation af det objektet igennem hele dets livscyklus
   */
  Id?: IdLokalId | IdLokalId[];
  /**
   * Tidspunktet hvorfra den pågældende version af objektet har virkning
   */
  VirkningFra?: VirkningstidFra;
  /**
   * Tidspunktet hvor virkningen af den pågældende version af objektet ophører
   */
  VirkningTil?: VirkningstidTil;
  /**
   * Den aktør der har afstedkommet virkningsegenskaberne for den pågældende version af objektet
   */
  Virkningsaktoer?: string;
  /**
   * Tidspunktet hvor registreringen af den pågældende version af objektet er foretaget
   */
  RegistreringFra?: RegistreringstidFra;
  /**
   * Tidspunktet hvor en ny registrering på objektet er foretaget, og hvor denne version således ikke længere er den seneste.
   */
  RegistreringTil?: RegistreringstidTil;
  /**
   * Den aktør der har foretaget registreringen af den pågældende version af objektet
   */
  Registreringsaktoer?: string;
  /**
   * Objektets status i den pågældende version, dvs. objektets tilstand i den samlede livscyklus
   */
  Status?: Livscyklus | Livscyklus[];
  /**
   * Den forretningsproces, som afstedkom opdateringen af objektet til den pågældende version
   */
  Forretningsproces?: string;
  /**
   * Det forretningsområde som har opdateret objektet til den pågældende version
   */
  Forretningsomraade?: string;
  /**
   * Den forretningshændelse, som afstedkom opdateringen af objektet til den pågældende version
   */
  Forretningshaendelse?: string;
  /**
   * Den kommune som objektet er registreret i
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

/* BBR Sag */
export type BBRSag = BBRSag_[number];
export type BBRSagUdenDybde = Omit<BBRSag, 'sagsniveauList'> & {
  sagsniveauList?: { id_lokalId?: IdLokalId }[];
};

export type BBRSagRequest = BaseRequest & {
  /**
   * BBR Bygning UUID bbr sagen er tilknyttet
   */
  Bygning?: IdLokalId;
  /**
   * BBR Enhed UUID bbr sagen er tilknyttet
   */
  Enhed?: IdLokalId;
  /**
   * BBR Etage UUID bbr sagen er tilknyttet
   */
  Etage?: IdLokalId;
  /**
   * BBR Grund UUID bbr sagen er tilknyttet
   */
  Grund?: IdLokalId;
  /**
   * BBR Opgang UUID bbr sagen er tilknyttet
   */
  Opgang?: IdLokalId;
  /**
   * BBR TekniskAnlaeg UUID bbr sagen er tilknyttet
   */
  TekniskAnlaeg?: IdLokalId;
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

export type BygningRequest = BaseRequest & {
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
};

export type BygningResponse = Array<Bygning>;
export type BygningResponseUdenDybde = Array<BygningUdenDybde>;

/* BBR Ejendomsrelation */
export type Ejendomsrelation = Ejendomsrelation_[number];

export type EjendomsrelationRequest = BaseRequest & {
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

export type EnhedRequest = BaseRequest & {
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
};

export type EnhedResponse = Array<Enhed>;
export type EnhedResponseUdenDybde = Array<EnhedUdenDybde>;

/* BBR Grund */
export type Grund = Grund_[number];
export type GrundUdenDybde = Omit<Grund, 'bestemtFastEjendom'> & {
  bestemtFastEjendom: { id_lokalId?: IdLokalId };
};

export type GrundRequest = BaseRequest & {
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
};

export type GrundResponse = Array<Grund>;
export type GrundResponseUdenDybde = Array<GrundUdenDybde>;

/* BBR TekniskAnlæg */
export type TekniskAnlaeg = BBR_244_TekniskAnlaeg[number];
export type TekniskAnlaegUdenDybde = Omit<
  TekniskAnlaeg,
  'bygningPåFremmedGrund' | 'ejerlejlighed'
> & {
  bygningPåFremmedGrund?: { id_lokalId?: IdLokalId };
  ejerlejlighed?: { id_lokalId?: IdLokalId };
};

export type TekniskAnlaegRequest = BaseRequest & {
  /**
   * MU Jordstykke ID
   */
  Jordstykke?: number;
  /**
   * BBR Ejendomsrelation ID
   */
  Ejendomsrelation?: IdLokalId;
  /**
   * DAR Husnummer ID
   */
  Husnummer?: IdLokalId;
  /**
   * BBR Bygning ID
   */
  Bygning?: IdLokalId;
  /**
   * BBR Enhed ID
   */
  Enhed?: IdLokalId;
  /**
   * BBR Grund ID
   */
  Grund?: IdLokalId;
  /**
   * BFE-nummer
   * Er dit BFE-nummer af ejendomstypen Bygning På Fremmed Grund eller Ejerlejlighed og indeholder den teknisk anlæg kan BFE-nummer bruges som inputparameter.
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
};

export type TekniskAnlaegResponse = Array<TekniskAnlaeg>;
export type TekniskAnlaegResponseUdenDybde = Array<TekniskAnlaegUdenDybde>;
