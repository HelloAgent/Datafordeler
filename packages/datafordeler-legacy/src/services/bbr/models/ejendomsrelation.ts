export interface EjendomsrelationRequest {
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
  BFENummer?: number; //SFE, BPFG (bygning på fremmed grund), ejerlejlighed
  BPFG?: number; //MU BygningPåFremmedGrund ID
  Ejerforholdskode?: string;
  Ejerlejlighed?: number; //MU Ejerlejlighed ID
  Ejendomsnummer?: number;
  SamletFastEjendom?: number; //MU SamletFastEjendom ID
  Vurderingsejendomsnummer?: number; //Vurderingsejendomsnummer
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

export interface Ejendomsrelation {
  datafordelerOpdateringstid?: string;
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

export type EjendomsrelationResponse = Ejendomsrelation[];
