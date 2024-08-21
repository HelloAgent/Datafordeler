/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_0F2275F5_3B9C_4386_A7AC_95C86E2E2D91
 */
export type Ejerskabsskifte = {
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
      afstaaetAndel_taeller?: AfstaaetAndelTaeller;
      afstaaetAndel_naevner?: AfstaaetAndelNaevner;
      modtagetAndel_taeller?: ModtagetAndelTaeller;
      modtagetAndel_naevner?: ModtagetAndelNaevner;
      modtagendeEjerobjektLokalId?: ModtagendeEjerobjektLokalId;
      afgivendeEjerobjektLokalId?: AfgivendeEjerobjektLokalId;
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
      afstaaetAndel_taeller?: AfstaaetAndelTaeller;
      afstaaetAndel_naevner?: AfstaaetAndelNaevner;
      modtagetAndel_taeller?: ModtagetAndelTaeller;
      modtagetAndel_naevner?: ModtagetAndelNaevner;
      modtagendeEjerobjektLokalId?: ModtagendeEjerobjektLokalId;
      afgivendeEjerobjektLokalId?: AfgivendeEjerobjektLokalId;
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
 * EAID_F3565DB6_4C3A_414f_9506_E272A5D627EC.EAID_F4081119_31CD_4e24_8DAE_56481EBB68C1
 */
export type AfstaaetAndelTaeller = number | null;
/**
 * EAID_F3565DB6_4C3A_414f_9506_E272A5D627EC.EAID_B48E7EF3_99F8_464c_A5E0_6A3BC71D0895
 */
export type AfstaaetAndelNaevner = number | null;
/**
 * EAID_8CB947C1_27F4_4c55_BBA3_FF5693E0A557.EAID_F4081119_31CD_4e24_8DAE_56481EBB68C1
 */
export type ModtagetAndelTaeller = number | null;
/**
 * EAID_8CB947C1_27F4_4c55_BBA3_FF5693E0A557.EAID_B48E7EF3_99F8_464c_A5E0_6A3BC71D0895
 */
export type ModtagetAndelNaevner = number | null;
/**
 * EAID_dst6FA13A_FB67_4e8b_83CE_4C34C024EADC
 */
export type ModtagendeEjerobjektLokalId = string | null;
/**
 * EAID_dstE333A2_2E7C_48e2_A627_5CBADA0F119F
 */
export type AfgivendeEjerobjektLokalId = string | null;
