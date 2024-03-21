import { EjerlejlighedList } from "./ejerlejlighed";
import { FordelingsarealList } from "./fordelingsareal";

export interface EnhedRequest {
  Id?: string; //can be array!
  VirkningFra?: Date;
  VirkningTil?: Date;
  Virkningsaktoer?: string;
  RegistreringFra?: Date;
  RegistreringTil?: Date;
  Registreringsaktoer?: string;
  Status?: string; //can be array of 1-19, see https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  Kommunekode?: string;
  MedDybde?: boolean;
  DAFTimestampFra?: Date;
  DAFTimestampTil?: Date;
  BFENummer?: number;
  Etage?: string; //BBR etage ID, can be array of UUID
  Fordelingsareal?: string; //BBR fordelingsareal UUID
  Opgang?: string; //BBR opgang UUIDcan be array of UUID
  TekniskAnlaeg?: string; //BBR teknisk anlæg Id UUID
  Ejendomsrelation?: string; //BBR ejd.relation ID
  AdresseIdentificerer?: string; //Dar adresse Id
  Bygning?: string; //BBR Bygning ID ARRAY
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

export interface Enhed {
  datafordelerOpdateringstid?: string;
  adresseIdentificerer?: string | null;
  bygning?: string | null;
  enh008UUIDTilModerlejlighed?: string | null;
  enh020EnhedensAnvendelse?: string | null;
  enh023Boligtype?: string | null;
  enh024KondemneretBoligenhed?: string | null;
  enh025OprettelsesdatoForEnhedensIdentifikation?: string | null;
  enh026EnhedensSamledeAreal?: number | null;
  enh027ArealTilBeboelse?: number | null;
  enh028ArealTilErhverv?: number | null;
  enh030KildeTilEnhedensArealer?: string | null;
  enh031AntalVærelser?: number | null;
  enh032Toiletforhold?: string | null;
  enh033Badeforhold?: string | null;
  enh034Køkkenforhold?: string | null;
  enh035Energiforsyning?: string | null;
  enh039AndetAreal?: number | null;
  enh041LovligAnvendelse?: string | null;
  enh042DatoForTidsbegrænsetDispensation?: string | null;
  enh044DatoForDelvisIbrugtagningsTilladelse?: string | null;
  enh045Udlejningsforhold?: string | null;
  enh046OffentligStøtte?: string | null;
  enh047IndflytningDato?: string | null;
  enh048GodkendtTomBolig?: string | null;
  enh051Varmeinstallation?: string | null;
  enh052Opvarmningsmiddel?: string | null;
  enh053SupplerendeVarme?: string | null;
  enh060EnhedensAndelFællesAdgangsareal?: number | null;
  enh061ArealAfÅbenOverdækning?: number | null;
  enh062ArealAfLukketOverdækningUdestue?: number | null;
  enh063AntalVærelserTilErhverv?: number | null;
  enh065AntalVandskylledeToiletter?: number | null;
  enh066AntalBadeværelser?: number | null;
  enh067Støjisolering?: number | null;
  enh068FlexboligTilladelsesart?: string | null;
  enh069FlexboligOphørsdato?: string | null;
  enh070ÅbenAltanTagterrasseAreal?: number | null;
  enh071AdresseFunktion?: string | null;
  enh101Gyldighedsdato?: string | null;
  enh102HerafAreal1?: number | null;
  enh103HerafAreal2?: number | null;
  enh104HerafAreal3?: number | null;
  enh105SupplerendeAnvendelseskode1?: string | null;
  enh106SupplerendeAnvendelseskode2?: string | null;
  enh107SupplerendeAnvendelseskode3?: string | null;
  enh127FysiskArealTilBeboelse?: number | null;
  enh128FysiskArealTilErhverv?: number | null;
  enh500Notatlinjer?: string | null;
  etage?: string | null;
  forretningshændelse?: string | null;
  forretningsområde?: string | null;
  forretningsproces?: string | null;
  id_lokalId: string | null;
  id_namespace?: string | null;
  kommunekode?: string | null;
  opgang?: string | null;
  registreringFra?: string | null;
  registreringsaktør?: string | null;
  registreringTil?: string | null;
  status?: string | null;
  virkningFra?: string | null;
  virkningsaktør?: string | null;
  virkningTil?: string | null;
  fordelingsarealList?: FordelingsarealList;
  ejerlejlighedList?: EjerlejlighedList;
}

export type EnhedResponse = Enhed[];
