/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_580F09CC_77FA_4ec3_8B86_5AF54E94BED4
 */
export type BFEnrAdresse = {
  type: "FeatureCollection";
  features: {
    type: "Feature";
    properties: {
      id_namespace: IdNamespace;
      id_lokalId: IdLokalId;
      bestemtFastEjendomBFENr: BestemtFastEjendomBFENr;
      Ejendomstype: Ejendomstype;
      adresseManueltAngivet: AdresseManueltAngivet;
      ESDHReferenceAdresse: ESDHReferenceAdresse;
      ESDHReferenceKommune: ESDHReferenceKommune;
      kommuneManueltAngivet: KommuneManueltAngivet;
      kommuneinddelingKommunekode: KommuneinddelingKommunekode;
      betegnelse: Betegnelse;
      adresseLokalId: AdresseLokalId;
      husnummerLokalId: HusnummerLokalId;
      status: Status;
      forretningshaendelse: Forretningshaendelse;
      forretningsomraade: Forretningsomraade;
      forretningsproces: Forretningsproces;
      virkningFra: VirkningFra;
      virkningTil: VirkningTil;
      virkningsaktoer: Virkningsaktoer;
      registreringFra: RegistreringFra;
      registreringTil: RegistreringTil;
      registreringsaktoer: Registreringsaktoer;
    };
  }[];
} & ({
  type: "FeatureCollection";
  features: {
    type: "Feature";
    properties: {
      id_namespace: IdNamespace;
      id_lokalId: IdLokalId;
      bestemtFastEjendomBFENr: BestemtFastEjendomBFENr;
      Ejendomstype: Ejendomstype;
      adresseManueltAngivet: AdresseManueltAngivet;
      ESDHReferenceAdresse: ESDHReferenceAdresse;
      ESDHReferenceKommune: ESDHReferenceKommune;
      kommuneManueltAngivet: KommuneManueltAngivet;
      kommuneinddelingKommunekode: KommuneinddelingKommunekode;
      betegnelse: Betegnelse;
      adresseLokalId: AdresseLokalId;
      husnummerLokalId: HusnummerLokalId;
      status: Status;
      forretningshaendelse: Forretningshaendelse;
      forretningsomraade: Forretningsomraade;
      forretningsproces: Forretningsproces;
      virkningFra: VirkningFra;
      virkningTil: VirkningTil;
      virkningsaktoer: Virkningsaktoer;
      registreringFra: RegistreringFra;
      registreringTil: RegistreringTil;
      registreringsaktoer: Registreringsaktoer;
    };
  }[];
} | null);
/**
 * EAID_033C3051_F5C6_435a_95BB_4168879EAAB4.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
 */
export type IdNamespace = string;
/**
 * EAID_033C3051_F5C6_435a_95BB_4168879EAAB4.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type IdLokalId = string;
/**
 * EAID_dstF27CCF_AE25_44fb_9CD3_5A709497983A
 */
export type BestemtFastEjendomBFENr = string;
/**
 * Der er ikke et UUID til en attribut, kun objekternes UUID
 */
export type Ejendomstype = "BygningPaaFremmedGrund" | "Ejerlejlighed" | "SamletFastEjendom";
/**
 * EAID_083D2F42_D193_43c8_A9AA_68E5A4835101
 */
export type AdresseManueltAngivet = boolean;
/**
 * EAID_35C158DF_FCEF_4c32_90D9_DBFA6EB55287
 */
export type ESDHReferenceAdresse = string | null;
/**
 * EAID_75A3178C_C05D_40af_96A1_E547059D42AF
 */
export type ESDHReferenceKommune = string | null;
/**
 * EAID_AC77530E_590B_4225_B31D_8A698D129E23
 */
export type KommuneManueltAngivet = boolean;
/**
 * EAID_dstE46CDC_6416_4a05_A01F_6CF3E337F0FC
 */
export type KommuneinddelingKommunekode = string;
/**
 * EAID_DFA7AE10_1BBD_4844_889D_91961BD18AC1
 */
export type Betegnelse = string | null;
/**
 * EAID_dstD4A261_DC16_404d_BC3C_7FA91424ACD3
 */
export type AdresseLokalId = string | null;
/**
 * EAID_dst83583C_B905_471b_9DDE_D2E75E34CB37
 */
export type HusnummerLokalId = string | null;
/**
 * EAID_0309F182_1A14_4098_B718_11034C06F679
 */
export type Status = "gældende" | "historisk";
/**
 * EAID_84122756_5B71_49d5_B68A_FD77F18EEB00
 */
export type Forretningshaendelse = "adresseændring" | "ejendomsforandring" | "ejerhenvendelse" | "konverteretFraESR";
/**
 * EAID_3CAEDE8E_F447_447b_883B_EF794AAAA503
 */
export type Forretningsomraade = "52.20.05";
/**
 * EAID_7013D39D_BB95_49fd_92DC_48CC909D792B
 */
export type Forretningsproces = "automatiskBeregnet" | "manueltOpdateret" | "konverteretFraESR";
/**
 * EAID_586C3BB8_D2B2_410f_9DA6_DBD9A66BE76E
 */
export type VirkningFra = string;
/**
 * EAID_AF4B2D78_EDED_4816_BA07_9C96D4876D17
 */
export type VirkningTil = string | null;
/**
 * EAID_0751B148_D672_4c1c_94A4_F9441FFFA3A7
 */
export type Virkningsaktoer = string;
/**
 * EAID_DFA31DDB_671D_41d3_B174_4129A6500F08
 */
export type RegistreringFra = string;
/**
 * EAID_A19BB6FA_289E_4c0b_B11C_39F12A4F3105
 */
export type RegistreringTil = string | null;
/**
 * EAID_C5FE3EFF_05A9_4230_8275_41158CC6F6F5
 */
export type Registreringsaktoer = string;
