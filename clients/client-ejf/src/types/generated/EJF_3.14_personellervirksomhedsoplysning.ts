/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_DA2687C8_18A3_49ba_BC1F_BAAAB720DAB0
 */
export type PersonEllerVirksomhedsoplysning = {
  type: "FeatureCollection";
  features: {
    type?: "Feature";
    properties?: {
      id_namespace?: IdNamespace;
      id_lokalId?: IdLokalId;
      behandlingsID?: BehandlingsID;
      forretningshaendelse?: Forretningshaendelse;
      forretningsomraade?: Forretningsomraade;
      forretningsproces?: Forretningsproces;
      status?: Status;
      registreringFra?: RegistreringFra;
      registreringTil?: RegistreringTil;
      registreringsaktoer?: Registreringsaktoer;
      virkningFra?: VirkningFra;
      virkningTil?: VirkningTil;
      virkningsaktoer?: Virkningsaktoer;
      navn?: Navn;
      fiktivtPVnummer?: FiktivtPVnummer;
      adresse?: Adresse;
      kommuneinddelingKommunekode?: KommuneinddelingKommunekode;
      alternativAdresse?: AlternativAdresse;
    };
  }[];
} & ({
  type: "FeatureCollection";
  features: {
    type?: "Feature";
    properties?: {
      id_namespace?: IdNamespace;
      id_lokalId?: IdLokalId;
      behandlingsID?: BehandlingsID;
      forretningshaendelse?: Forretningshaendelse;
      forretningsomraade?: Forretningsomraade;
      forretningsproces?: Forretningsproces;
      status?: Status;
      registreringFra?: RegistreringFra;
      registreringTil?: RegistreringTil;
      registreringsaktoer?: Registreringsaktoer;
      virkningFra?: VirkningFra;
      virkningTil?: VirkningTil;
      virkningsaktoer?: Virkningsaktoer;
      navn?: Navn;
      fiktivtPVnummer?: FiktivtPVnummer;
      adresse?: Adresse;
      kommuneinddelingKommunekode?: KommuneinddelingKommunekode;
      alternativAdresse?: AlternativAdresse;
    };
  }[];
} | null);
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
 */
export type IdNamespace = string;
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type IdLokalId = string;
/**
 * EAID_A7C68DBB_D219_40c4_84A4_8BCF63D9C26B
 */
export type BehandlingsID = string;
/**
 * EAID_EDB900B1_E09F_41af_9925_81793C8AD137
 */
export type Forretningshaendelse =
  | "Ejerskifte tilbageført"
  | "Landsdækkende kørsel"
  | "Opdatering af ejendomsadministrator"
  | "Annulleret personnummer"
  | "Personnummer nedlagt pga. dobbeltregistrering"
  | "Person død"
  | "Person udrejst"
  | "Person forsvundet"
  | "Opdatering af administrator for person eller virksomhed"
  | "Opdatering af ejer uden registreret CPR- eller CVR nummer"
  | "Ophør af en produktionsenhed"
  | "Ophør af virksomhed"
  | "Skift af virksomhedsform"
  | "Administrator af ejerskab"
  | "Ægtepagt adkomst"
  | "Aflysning af betinget skøde"
  | "Aflyst eller annulleret ejerskab"
  | "Anden adkomst"
  | "Auktionsskøde"
  | "Betinget bodeling"
  | "Betinget skøde"
  | "Bodeling"
  | "Ejendomsdom"
  | "Indberettet ejerskifte"
  | "Endelig indførsel adkomst"
  | "Endeligt skøde"
  | "Hævd"
  | "Kopieret ejerskab til ny ejendom"
  | "Meddelelse fast ejendom adkomst"
  | "Meddelelse om tvangsauktion"
  | "Navneændring"
  | "Opdatering af person- eller virksomhedsoplysninger"
  | "Opretning af ejerandele"
  | "Oprettet ejerskab af ny ejendom"
  | "Rettelse af ejerskab"
  | "Skifteretsattest"
  | "SkifteretsattestÆgtefælle"
  | "Påtegning adkomst"
  | "Ukendt - konverteret fra ESR";
/**
 * EAID_C2D4C015_3079_4907_A85B_B2A4D66188BE
 */
export type Forretningsomraade = "54.15";
/**
 * EAID_6E09BC0B_4FEB_4fe5_9D75_A0A0A1D121B7
 */
export type Forretningsproces =
  | "Hændelse fra Digital Tinglysning"
  | "Konvertering fra ESR"
  | "Landsdækkende kørsel"
  | "Manuel opdatering"
  | "Hændelse fra CPR"
  | "Hændelse fra CVR"
  | "Opdatering fra Matriklen"
  | "Opdatering fra Skifte- eller Fogedret";
/**
 * EAID_5DF93B9F_50AA_49aa_9481_F04517799FFF
 */
export type Status = "gældende" | "tilbagerullet" | "historisk";
/**
 * EAID_76A43210_69E9_4a22_8D1F_A4CBCF5D362D
 */
export type RegistreringFra = string;
/**
 * EAID_E41A79F3_7D5D_4314_AA49_2610AFC92738
 */
export type RegistreringTil = string | null;
/**
 * EAID_F6836D58_7AD0_404b_920E_FD8764511D5A
 */
export type Registreringsaktoer = string;
/**
 * EAID_DB0ADB0B_AEF4_4c51_846D_D3404DC85449
 */
export type VirkningFra = string;
/**
 * EAID_06091801_5AC6_4262_825D_0B4C2FA3D57C
 */
export type VirkningTil = string | null;
/**
 * EAID_96D2147C_1A0D_45cf_85B2_5C8F69EB084D
 */
export type Virkningsaktoer = string;
/**
 * EAID_D6A62534_41FE_4276_8329_3199BEA7FA6D
 */
export type Navn = string;
/**
 * EAID_7A84F94B_7116_48ba_B35E_37757DA1DFC9
 */
export type FiktivtPVnummer = number | null;
/**
 * EAID_dst8AAAC3_A278_48da_8981_F945A55A36D0
 */
export type Adresse = string | null;
/**
 * EAID_dst40CD2F_3E58_440d_9205_958F38C3B650
 */
export type KommuneinddelingKommunekode = null | string;
/**
 * EAID_0879F43E_7722_4dbf_826A_2F912C2705E5
 */
export type AlternativAdresse = {
  adresselinje1?: Adresselinje1;
  landeKodeNumerisk?: LandeKodeNumerisk;
  adresselinje2?: Adresselinje2;
  adresselinje3?: Adresselinje3;
  adresselinje4?: Adresselinje4;
  adresselinje5?: Adresselinje5;
  adresselinje6?: Adresselinje6;
  adresselinje7?: Adresselinje7;
  adresselinje8?: Adresselinje8;
  adresselinje9?: Adresselinje9;
  adresselinje10?: Adresselinje10;
} | null;
/**
 * EAID_B050D271_8341_48db_87A2_7DC640FAAC2C
 */
export type Adresselinje1 = string;
/**
 * EAID_3E1400AF_484E_43c4_B9F5_209D824174B0
 */
export type LandeKodeNumerisk = string;
/**
 * EAID_AA254756_CF77_4be6_BB6A_8C387EDBA6E9
 */
export type Adresselinje2 = string;
/**
 * EAID_B42EF18B_19AF_46d2_9AE4_EB317C22940B
 */
export type Adresselinje3 = string;
/**
 * EAID_5318D302_8E05_4610_97FB_389F411E99A6
 */
export type Adresselinje4 = string;
/**
 * EAID_7E27D876_7A7F_43fd_A511_D5D5234D41F1
 */
export type Adresselinje5 = string;
/**
 * EAID_39CEAC1F_89D9_4442_89F3_EF2324B8C59F
 */
export type Adresselinje6 = string;
/**
 * EAID_58DFD53C_9307_45b3_AB1B_6F0A8FE2564C
 */
export type Adresselinje7 = string;
/**
 * EAID_9F767153_2115_470e_9C98_180D962BA789
 */
export type Adresselinje8 = string;
/**
 * EAID_88E7A246_88B5_4d84_B97B_D855F43BF2D1
 */
export type Adresselinje9 = string;
/**
 * EAID_2F1290A0_6AB7_49b3_8B89_555B3BDEE655
 */
export type Adresselinje10 = string;
