//Regex for matching code comments: /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/
// Make it possible to insert arrays of Id etc. that will be called concacenated like <id123>|<id456>
import { BygningPaaFremmedGrundList } from './bygningPaaFremmedGrund';
import { Ejerlejlighed } from './ejerlejlighed';
import { EtageList } from './etage';
import { FordelingsarealList } from './fordelingsareal';
import { OpgangList } from './opgang';

/**
 * Obligatoriske parametre:
  Et ID på enten Bygning, Grund, Enhed, TekniskAnlæg, BBRSag eller Ejendomsrelation og et interval for enten registreringstid, virkningstid eller DAF opdateringstid.
 */

export type Status =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19';

export interface BygningRequest {
  Id?: string | string[]; //can be array!
  VirkningFra?: Date;
  VirkningTil?: Date;
  Virkningsaktoer?: string;
  RegistreringFra?: Date;
  RegistreringTil?: Date;
  Registreringsaktoer?: string;
  Status?: Status | Status[]; //can be array of 1-19, see https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  Husnummer?: string; //Dar HusnummerId
  Kommunekode?: string;
  MedDybde?: boolean;
  DAFTimestampFra?: Date;
  DAFTimestampTil?: Date;
  Etage?: string | string[]; //BBR etage ID, can be array of UUID
  Fordelingsareal?: string | string[]; //BBR fordelingsareal UUID
  Opgang?: string | string[]; //BBR opgang UUIDcan be array of UUID
  TekniskAnlaeg?: string | string[]; //BBR teknisk anlæg Id UUID
  Grund?: string; //BBR Grund UUID
  Jordstykke?: number; //MU Jordstykke ID
  Ejendomsrelation?: string; //BBR ejd.relation ID
  BFENummer?: number;
  Nord?: string; //Double
  Syd?: string; //Double
  Oest?: string; //Double
  Vest?: string; //Double
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

export interface Bygning {
  datafordelerOpdateringstid?: string;
  byg007Bygningsnummer?: number | null;
  byg021BygningensAnvendelse?: string | null;
  byg024AntalLejlighederMedKøkken?: number | null;
  byg025AntalLejlighederUdenKøkken?: number | null;
  byg026Opførelsesår?: number | null;
  byg027OmTilbygningsår?: number | null;
  byg029DatoForMidlertidigOpførtBygning?: string | null;
  byg030Vandforsyning?: string | null;
  byg031Afløbsforhold?: string | null;
  byg032YdervæggensMateriale?: string | null;
  byg033Tagdækningsmateriale?: string | null;
  byg034SupplerendeYdervæggensMateriale?: string | null;
  byg035SupplerendeTagdækningsMateriale?: string | null;
  byg036AsbestholdigtMateriale?: string | null;
  byg037KildeTilBygningensMaterialer?: string | null;
  byg038SamletBygningsareal?: number | null;
  byg039BygningensSamledeBoligAreal?: number | null;
  byg040BygningensSamledeErhvervsAreal?: number | null;
  byg041BebyggetAreal?: number | null;
  byg042ArealIndbyggetGarage?: number | null;
  byg043ArealIndbyggetCarport?: number | null;
  byg044ArealIndbyggetUdhus?: number | null;
  byg045ArealIndbyggetUdestueEllerLign?: number | null;
  byg046SamletArealAfLukkedeOverdækningerPåBygningen?: number | null;
  byg047ArealAfAffaldsrumITerrænniveau?: number | null;
  byg048AndetAreal?: number | null;
  byg049ArealAfOverdækketAreal?: number | null;
  byg050ArealÅbneOverdækningerPåBygningenSamlet?: number | null;
  byg051Adgangsareal?: number | null;
  byg052BeregningsprincipCarportAreal?: string | null;
  byg053BygningsarealerKilde?: string | null;
  byg054AntalEtager?: number | null;
  byg055AfvigendeEtager?: string | null;
  byg056Varmeinstallation?: string | null;
  byg057Opvarmningsmiddel?: string | null;
  byg058SupplerendeVarme?: string | null;
  byg069Sikringsrumpladser?: number | null;
  byg070Fredning?: string | null;
  byg071BevaringsværdighedReference?: string | null;
  byg094Revisionsdato?: string | null;
  byg111StormrådetsOversvømmelsesSelvrisiko?: string | null;
  byg112DatoForRegistreringFraStormrådet?: string | null;
  byg113Byggeskadeforsikringsselskab?: string | null;
  byg114DatoForByggeskadeforsikring?: string | null;
  byg119Udledningstilladelse?: string | null;
  byg121OmfattetAfByggeskadeforsikring?: string | null;
  byg122Gyldighedsdato?: string | null;
  byg123MedlemskabAfSpildevandsforsyning?: string | null;
  byg124PåbudVedrSpildevandsafledning?: string | null;
  byg125FristVedrSpildevandsafledning?: string | null;
  byg126TilladelseTilUdtræden?: string | null;
  byg127DatoForTilladelseTilUdtræden?: string | null;
  byg128TilladelseTilAlternativBortskaffelseEllerAfledning?: string | null;
  byg129DatoForTilladelseTilAlternativBortskaffelseEllerAfledning?:
    | string
    | null;
  byg130ArealAfUdvendigEfterisolering?: number | null;
  byg131DispensationFritagelseIftKollektivVarmeforsyning?: string | null;
  byg132DatoForDispensationFritagelseIftKollektivVarmeforsyning?: string | null;
  byg133KildeTilKoordinatsæt?: string | null;
  byg134KvalitetAfKoordinatsæt?: string | null;
  byg135SupplerendeOplysningOmKoordinatsæt?: string | null;
  byg136PlaceringPåSøterritorie?: string | null;
  byg137BanedanmarkBygværksnummer?: string | null;
  byg140ServitutForUdlejningsEjendomDato?: string | null;
  byg150Gulvbelægning?: string | null;
  byg151Frihøjde?: number | null;
  byg152ÅbenLukketKonstruktion?: string | null;
  byg153Konstruktionsforhold?: string | null;
  byg301TypeAfFlytning?: string | null;
  byg302Tilflytterkommune?: number | null;
  byg403ØvrigeBemærkningerFraStormrådet?: string | null;
  byg404Koordinat?: string | null;
  byg406Koordinatsystem?: string | null;
  byg500Notatlinjer?: string | null;
  forretningshændelse?: string | null;
  forretningsområde?: string | null;
  forretningsproces?: string | null;
  grund?: string | null;
  husnummer?: string | null;
  id_lokalId: string | null;
  id_namespace?: string | null;
  jordstykke?: string | null;
  kommunekode?: string | null;
  registreringFra?: string | null;
  registreringsaktør?: string | null;
  registreringTil?: string | null;
  status?: string | null;
  virkningFra?: string | null;
  virkningsaktør?: string | null;
  virkningTil?: string | null;
  //Nested objects
  etageList?: EtageList;
  opgangList?: OpgangList;
  fordelingsarealList?: FordelingsarealList;
  ejerlejlighed?: Ejerlejlighed;
  bygningPåFremmedGrundList?: BygningPaaFremmedGrundList;
}

export type BygningResponse = Bygning[];
