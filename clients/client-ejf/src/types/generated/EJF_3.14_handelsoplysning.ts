/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_49531FA9_4AE5_45b3_9DD6_05E60F3CB9A2
 */
export type Handelsoplysninger = {
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
      afstaaelsesdato?: Afstaaelsesdato;
      betalingsforpligtelsesdato?: Betalingsforpligtelsesdato;
      bygningerOmfattet?: BygningerOmfattet;
      loesoeresum?: Loesoeresum;
      samletKoebesum?: SamletKoebesum;
      skoedetekst?: Skoedetekst;
      koebsaftaleDato?: KoebsaftaleDato;
      valutakode?: Valutakode;
      kontantKoebesum?: KontantKoebesum;
      entreprisesum?: Entreprisesum;
      husdyrbesaetningsum?: Husdyrbesaetningsum;
      ejerskifte?: Ejerskifte;
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
      afstaaelsesdato?: Afstaaelsesdato;
      betalingsforpligtelsesdato?: Betalingsforpligtelsesdato;
      bygningerOmfattet?: BygningerOmfattet;
      loesoeresum?: Loesoeresum;
      samletKoebesum?: SamletKoebesum;
      skoedetekst?: Skoedetekst;
      koebsaftaleDato?: KoebsaftaleDato;
      valutakode?: Valutakode;
      kontantKoebesum?: KontantKoebesum;
      entreprisesum?: Entreprisesum;
      husdyrbesaetningsum?: Husdyrbesaetningsum;
      ejerskifte?: Ejerskifte;
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
 * EAID_D4111412_4601_4b18_8305_DA7CD7D61221
 */
export type Afstaaelsesdato = string | null;
/**
 * EAID_F6348186_62D3_42c2_9EEA_CAC95D681930
 */
export type Betalingsforpligtelsesdato = string | null;
/**
 * EAID_BCE0E660_7C5B_4099_9D19_266752580DF9
 */
export type BygningerOmfattet = string | null;
/**
 * EAID_425C2926_5C24_46a1_8984_3FD9D832E52B
 */
export type Loesoeresum = number | null;
/**
 * EAID_BD45AB85_C593_4f0a_B67B_6E857056047E
 */
export type SamletKoebesum = number | null;
/**
 * EAID_A5CD530F_4E55_4140_8E03_9D2FCE2F8F38
 */
export type Skoedetekst = string | null;
/**
 * EAID_0060BFA0_6C67_49de_8618_DB66B1C3AA6E
 */
export type KoebsaftaleDato = string | null;
/**
 * EAID_46325A8B_74E5_432c_892F_9E88628946FB
 */
export type Valutakode = string | null;
/**
 * EAID_C4C7340C_39A8_4f2c_BD5E_490061B51479
 */
export type KontantKoebesum = number | null;
/**
 * EAID_3E452068_699F_4922_ACC0_EE5F1A0A50EB
 */
export type Entreprisesum = number | null;
/**
 * EAID_46BB2551_BE54_4e53_A793_4EFA76263A6F
 */
export type Husdyrbesaetningsum = number | null;
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 *
 * @minItems 1
 */
export type Ejerskifte = string[];
