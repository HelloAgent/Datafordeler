/**
 * Obligatoriske parametre:
  Et ID på enten Bygning, Grund, Enhed, TekniskAnlæg, BBRSag eller Ejendomsrelation og et interval for enten registreringstid, virkningstid eller DAF opdateringstid.
 */

//Regex for matching code comments: /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/

// Make it possible to insert arrays of Id etc. that will be called concacenated like <id123>|<id456>
export interface BygningRequest {
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
  Etage?: string; //BBR etage ID, can be array of UUID
  Fordelingsareal?: string; //BBR fordelingsareal UUID
  Opgang?: string; //BBR opgang UUIDcan be array of UUID
  TekniskAnlaeg?: string; //BBR teknisk anlæg Id UUID
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

interface B {
  datafordelerOpdateringstid: string;
  byg007Bygningsnummer: number;
  byg021BygningensAnvendelse: string | null;
  byg024AntalLejlighederMedKøkken: number | null;
  byg025AntalLejlighederUdenKøkken: number | null;
  byg026Opførelsesår: 1954;
  byg027OmTilbygningsår: 1984;
  byg032YdervæggensMateriale: "1";
  byg033Tagdækningsmateriale: "5";
  byg037KildeTilBygningensMaterialer: "2";
  byg038SamletBygningsareal: 120;
  byg039BygningensSamledeBoligAreal: 122;
  byg041BebyggetAreal: 120;
  byg053BygningsarealerKilde: "2";
  byg054AntalEtager: 1;
  byg056Varmeinstallation: "2";
  byg057Opvarmningsmiddel: "7";
  byg094Revisionsdato: "2017-08-28T11:20:35.724018+02:00";
  byg133KildeTilKoordinatsæt: "K";
  byg134KvalitetAfKoordinatsæt: "1";
  byg135SupplerendeOplysningOmKoordinatsæt: "31";
  byg136PlaceringPåSøterritorie: "0";
  byg404Koordinat: "POINT(716559.2 6188503.13)";
  byg406Koordinatsystem: "5";
  forretningshændelse: "Bygning";
  forretningsområde: "54.15.05.05";
  forretningsproces: "25";
  grund: "47a81dcb-eba9-4603-8a13-21cb901892f2";
  husnummer: "0a3f507d-523b-32b8-e044-0003ba298018";
  id_lokalId: "e1d1dba2-be87-46ca-85f7-a672cc5ad741";
  id_namespace: "http://data.gov.dk/bbr/bygning";
  jordstykke: "2467057";
  kommunekode: "0173";
  registreringFra: "2017-08-28T11:20:35.724018+02:00";
  registreringsaktør: "BBR";
  status: "6";
  virkningFra: "2017-08-28T11:20:35.724018+02:00";
  virkningsaktør: "EksterntSystem";
  etageList: [
    {
      id_lokalId: "79c628db-854e-4d7a-bbc9-6758d1ace0cb";
      etage: {
        datafordelerOpdateringstid: "2021-04-03T23:46:58.449665+02:00";
        bygning: "e1d1dba2-be87-46ca-85f7-a672cc5ad741";
        eta006BygningensEtagebetegnelse: "kl";
        eta020SamletArealAfEtage: 62;
        eta022Kælderareal: 62;
        eta025Etagetype: "2";
        forretningshændelse: "Bygning";
        forretningsområde: "54.15.05.05";
        forretningsproces: "0";
        id_lokalId: "79c628db-854e-4d7a-bbc9-6758d1ace0cb";
        id_namespace: "http://data.gov.dk/bbr/etage";
        kommunekode: "0173";
        registreringFra: "2020-06-12T18:24:45.000022+02:00";
        registreringsaktør: "BBR";
        status: "6";
        virkningFra: "2020-06-12T18:24:45.000022+02:00";
        virkningsaktør: "BBR21";
      };
    },
    {
      id_lokalId: "bb79eb31-e609-4ec4-9365-91f5140c411b";
      etage: {
        datafordelerOpdateringstid: "2021-04-03T23:14:55.288997+02:00";
        bygning: "e1d1dba2-be87-46ca-85f7-a672cc5ad741";
        eta006BygningensEtagebetegnelse: "st";
        eta025Etagetype: "0";
        forretningshændelse: "Bygning";
        forretningsområde: "54.15.05.05";
        forretningsproces: "0";
        id_lokalId: "bb79eb31-e609-4ec4-9365-91f5140c411b";
        id_namespace: "http://data.gov.dk/bbr/etage";
        kommunekode: "0173";
        registreringFra: "2017-06-02T14:29:37.000000+02:00";
        registreringsaktør: "BBR";
        status: "6";
        virkningFra: "2000-02-05T20:57:22.000000+01:00";
        virkningsaktør: "Konvertering2017";
      };
    }
  ];
  opgangList: [
    {
      id_lokalId: "8bc64d44-96c6-472d-9e23-60f361af36c4";
      opgang: {
        datafordelerOpdateringstid: "2021-04-04T02:19:41.527393+02:00";
        adgangFraHusnummer: "0a3f507d-523b-32b8-e044-0003ba298018";
        bygning: "e1d1dba2-be87-46ca-85f7-a672cc5ad741";
        forretningshændelse: "Bygning";
        forretningsområde: "54.15.05.05";
        forretningsproces: "0";
        id_lokalId: "8bc64d44-96c6-472d-9e23-60f361af36c4";
        id_namespace: "http://data.gov.dk/bbr/opgang";
        kommunekode: "0173";
        opg020Elevator: "0";
        registreringFra: "2018-09-14T18:25:55.086667+02:00";
        registreringsaktør: "BBR";
        status: "6";
        virkningFra: "2018-09-14T18:25:55.086667+02:00";
        virkningsaktør: "BBR";
      };
    }
  ];
}

export type DatafordelerOpdateringstid = string;

export interface Etage {
  id_lokalId: string | null;
  etage?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid;
    bygning?: string | null;
    eta006BygningensEtagebetegnelse?: string | null;
    eta020SamletArealAfEtage?: number | null;
    eta021ArealAfUdnyttetDelAfTagetage?: number | null;
    eta022Kælderareal?: number | null;
    eta023ArealAfLovligBeboelseIKælder?: number | null;
    eta024EtagensAdgangsareal?: number | null;
    eta025Etagetype?: string | null;
    eta026ErhvervIKælder?: number | null;
    eta500Notatlinjer?: string | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    status?: string | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
  };
}

export interface Opgang {
  id_lokalId: string | null;
  opgang?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid;
    adgangFraHusnummer?: string | null;
    bygning?: string | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    opg020Elevator?: string | null;
    opg021HusnummerFunktion?: string | null;
    opg500Notatlinjer?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    status?: string | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
  };
}

export interface Fordelingsareal {
  id_lokalId: string | null;
  fordelingsareal?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid;
    bygning?: string | null;
    for002Fordelingsarealnummer?: number | null;
    for003ArealTilFordeling?: number | null;
    for004FordelingsNøgle?: string | null;
    for005Navn?: string | null;
    for006Rest?: number | null;
    for500Notatlinjer?: string | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    status?: string | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
  };
}

export interface Ejerlejlighed {
  datafordelerOpdateringstid?: DatafordelerOpdateringstid;
  bfeNummer?: number | null;
  bygningPåFremmedGrund?: string | null;
  ejendommensEjerforholdskode?: string | null;
  ejendomsnummer?: number | null;
  ejendomstype?: string | null;
  ejerlejlighed?: string | null;
  ejerlejlighedsnummer?: number | null;
  forretningshændelse?: string | null;
  forretningsområde?: string | null;
  forretningsproces?: string | null;
  id_lokalId: string | null;
  id_namespace?: string | null;
  kommunekode?: string | null;
  registreringFra?: string | null;
  registreringsaktør?: string | null;
  registreringTil?: string | null;
  samletFastEjendom?: string | null;
  status?: string | null;
  tinglystAreal?: number | null;
  virkningFra?: string | null;
  virkningsaktør?: string | null;
  virkningTil?: string | null;
  vurderingsejendomsnummer?: number | null;
}

export interface BygningPaaFremmedGrund {
  id_lokalId: string | null;
  bygningPåFremmedGrund?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid;
    bfeNummer?: number | null;
    bygningPåFremmedGrund?: string | null;
    ejendommensEjerforholdskode?: string | null;
    ejendomsnummer?: number | null;
    ejendomstype?: string | null;
    ejerlejlighed?: string | null;
    ejerlejlighedsnummer?: number | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    samletFastEjendom?: string | null;
    status?: string | null;
    tinglystAreal?: number | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
    vurderingsejendomsnummer?: number | null;
  };
}
export interface Bygning {
  datafordelerOpdateringstid?: DatafordelerOpdateringstid;
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
  byg129DatoForTilladelseTilAlternativBortskaffelseEllerAfledning?: string | null;
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

  //Objects
  etageList?: Etage[];
  opgangList?: Opgang[];
  fordelingsarealList?: Fordelingsareal[];
  ejerlejlighed?: Ejerlejlighed;
  bygningPåFremmedGrundList?: BygningPaaFremmedGrund[];
}

export type BygningResponse = Bygning[];
