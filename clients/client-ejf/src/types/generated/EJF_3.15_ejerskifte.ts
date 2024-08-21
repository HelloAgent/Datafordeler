/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_9F5F102E_4713_47d7_92AC_C1858DAB021C
 */
export type Ejerskifte = {
  type: "FeatureCollection";
  features: {
    type?: "Feature";
    properties?: {
      id_namespace?: IdNamespace;
      id_lokalId?: IdLokalId;
      behandlingsID?: BehandlingsID;
      bfeNummer?: BfeNummer;
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
      betinget?: Betinget;
      bilagsbankRef?: BilagsbankRef;
      fristDato?: FristDato;
      overtagelsesdato?: Overtagelsesdato;
      anmeldelsesdato?: Anmeldelsesdato;
      anmeldelsesidentifikator?: Anmeldelsesidentifikator;
      overdragelsesmaade?: Overdragelsesmaade;
      ejerskabsskifte?: Ejerskabsskifte;
      handelsoplysningerId?: Handelsoplysninger;
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
      bfeNummer?: BfeNummer;
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
      betinget?: Betinget;
      bilagsbankRef?: BilagsbankRef;
      fristDato?: FristDato;
      overtagelsesdato?: Overtagelsesdato;
      anmeldelsesdato?: Anmeldelsesdato;
      anmeldelsesidentifikator?: Anmeldelsesidentifikator;
      overdragelsesmaade?: Overdragelsesmaade;
      ejerskabsskifte?: Ejerskabsskifte;
      handelsoplysningerId?: Handelsoplysninger;
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
 * EAID_dst2E9BC3_F084_4064_A34B_334C6CC03CB8
 */
export type BfeNummer = string;
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
 * EAID_5916184F_4D3D_47e9_B332_773271ED0B84
 */
export type Betinget = boolean | null;
/**
 * EAID_F0A392A5_B8E7_4a86_AFD3_B54197380B04
 */
export type BilagsbankRef = string[];
/**
 * EAID_0D18DDD3_267E_4dec_9703_B3137049DF02
 */
export type FristDato = string | null;
/**
 * EAID_6E1517E9_FCDB_425b_A76B_E820A8F6065B
 */
export type Overtagelsesdato = string;
/**
 * EAID_049A7392_2527_4259_A517_EBA8D37E0AAC
 */
export type Anmeldelsesdato = string | null;
/**
 * EAID_9A3BAD64_62D3_474f_9B49_CF3395FC7FD4
 */
export type Anmeldelsesidentifikator = string | null;
/**
 * EAID_2323BC46_9947_4fb0_ACBA_2CF2664C1C43
 */
export type Overdragelsesmaade =
  | (
      | "Almindelig fri handel"
      | "Almindelig fri handel særlige vilkår"
      | "Familieoverdragelse"
      | "Anden overdragelse"
      | "Interessesammenfald"
      | "Mageskifte"
      | "Ikke oplyst"
    )
  | null;
/**
 * EAID_src89FF6A_2AE7_4b96_87DF_B25D0F8306D2
 *
 * @minItems 1
 */
export type Ejerskabsskifte = string[];
/**
 * EAID_srcAF2743_B4C2_4b81_BCD2_B7519A0CC2ED
 */
export type Handelsoplysninger = string | null;
