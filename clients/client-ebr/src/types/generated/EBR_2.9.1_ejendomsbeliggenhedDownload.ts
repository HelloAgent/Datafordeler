/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_580F09CC_77FA_4ec3_8B86_5AF54E94BED4
 */
export type Ejendomsbeliggenhed = {
  type: "FeatureCollection";
  features: {
    type: "Feature";
    properties: {
      objectid: Objectid;
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
      adresse: Adresse;
      husnummer?: Husnummer;
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
      objectid: Objectid;
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
      adresse: Adresse;
      husnummer?: Husnummer;
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
export type Objectid = string;
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
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid1 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid2 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid3 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid4 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid5 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid6 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid7 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid8 = string;
/**
 * Adresse hentet fra DAR
 */
export type Adresse = {
  datafordelerOpdateringstid?: DatafordelerOpdateringstid;
  /**
   * EAID_BB398854_F92E_4372_A20A_D7136BB5CD9C
   */
  adressebetegnelse?: string | null;
  /**
   * EAID_dst4A2C09_8035_4ca8_8AA0_CBAAB89AF135
   */
  bygning?: string | null;
  /**
   * EAID_16B39B2F_0D4D_45ca_8164_8E1D78D202FC
   */
  dørbetegnelse?: string | null;
  /**
   * EAID_805BB835_641D_49d5_93E6_80C8E3FFD91C
   */
  etagebetegnelse?: string | null;
  /**
   * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
   */
  forretningshændelse?: string | null;
  /**
   * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
   */
  forretningsområde?: string | null;
  /**
   * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
   */
  forretningsproces?: string | null;
  /**
   * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
   */
  id_lokalId?: string | null;
  /**
   * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
   */
  id_namespace?: string | null;
  /**
   * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
   */
  registreringFra?: string | null;
  /**
   * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
   */
  registreringsaktør?: string | null;
  /**
   * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
   */
  registreringTil?: string | null;
  /**
   * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
   */
  status?: string | null;
  /**
   * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
   */
  virkningFra?: string | null;
  /**
   * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
   */
  virkningsaktør?: string | null;
  /**
   * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
   */
  virkningTil?: string | null;
  /**
   * EAID_00A7AF01_C512_4a85_ADB5_98FB15541948
   */
  dørpunkt?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid1;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
     */
    oprindelse_kilde?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
     */
    oprindelse_nøjagtighedsklasse?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
     */
    oprindelse_registrering?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
     */
    oprindelse_tekniskStandard?: string | null;
    /**
     * EAID_4B062EDE_CE8C_414b_AB85_B5A1FD72AA78
     */
    position?: string | null;
  };
  /**
   * EAID_D0A626FC_CCAE_4209_B2F6_AC919B74A528
   */
  husnummer?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid2;
    /**
     * EAID_EDCC14FC_63ED_4ebe_8B52_3E406831A148
     */
    adgangsadressebetegnelse?: string | null;
    /**
     * EAID_dst3E4349_6115_4191_AF4F_243CCE561C41
     */
    adgangTilBygning?: string | null;
    /**
     * EAID_dst79A4C1_23B2_4c0c_85CC_60C6E2EA5AE0
     */
    adgangTilTekniskAnlæg?: string | null;
    /**
     * EAID_38545A1D_2A85_4020_A332_A0195A41310C
     */
    afstemningsområde?: {
      /**
       * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_60BC8063_FE94_401b_97AD_E1D1E7CD79A7
       */
      afstemningsområdenummer?: string | null;
      /**
       * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
       */
      navn?: string | null;
    };
    /**
     * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
     */
    forretningshændelse?: string | null;
    /**
     * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
     */
    forretningsområde?: string | null;
    /**
     * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
     */
    forretningsproces?: string | null;
    /**
     * EAID_dst3C28C5_D640_4bc0_9014_FDC7CBF30581
     */
    geoDanmarkBygning?: string | null;
    /**
     * EAID_1A906922_EFAC_4182_AA8C_08332D52C6EE
     */
    husnummerretning?: string | null;
    /**
     * EAID_83A4C230_5C5A_4ffb_B136_0315DD9F8DBE
     */
    husnummertekst?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
     */
    id_namespace?: string | null;
    /**
     * EAID_dst052F4B_D60C_4ccd_BAE5_6BCED78FE40C
     */
    jordstykke?: string | null;
    /**
     * EAID_25AE826A_41DD_40a6_9AF4_3D347B1DA89F
     */
    kommuneinddeling?: {
      /**
       * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_A7825EC7_D579_401e_B49C_777BC4A39A2F
       */
      kommunekode?: string | null;
      /**
       * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
       */
      navn?: string | null;
    };
    /**
     * EAID_29CD703F_24CC_4479_B620_1F3D544702AD
     */
    menighedsrådsafstemningsområde?: {
      /**
       * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_7BDEA159_0764_4a03_8D1B_94EAE2E044E2
       */
      mrafstemningsområdenummer?: string | null;
      /**
       * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
       */
      navn?: string | null;
    };
    /**
     * EAID_dstC82C82_CC9D_4d7d_9B8A_8F4A1ADFB5AE
     */
    placeretPåForeløbigtJordstykke?: string | null;
    /**
     * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
     */
    registreringFra?: string | null;
    /**
     * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
     */
    registreringsaktør?: string | null;
    /**
     * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
     */
    registreringTil?: string | null;
    /**
     * EAID_B2A1A022_22C1_47f3_89CB_DA180694F9C0
     */
    sogneinddeling?: {
      /**
       * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_E50C6E75_C1CD_4c5a_9C67_3A6463514D0E
       */
      sognekode?: string | null;
      /**
       * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
       */
      navn?: string | null;
    };
    /**
     * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
     */
    status?: string | null;
    /**
     * EAID_dstC9842D_CF82_4dc5_8114_3FF7AEF90C17
     */
    vejmidte?: string | null;
    /**
     * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
     */
    virkningFra?: string | null;
    /**
     * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
     */
    virkningsaktør?: string | null;
    /**
     * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
     */
    virkningTil?: string | null;
    /**
     * EAID_00A7AF01_C512_4a85_ADB5_98FB15541948
     */
    adgangspunkt?: {
      datafordelerOpdateringstid?: DatafordelerOpdateringstid3;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
       */
      oprindelse_kilde?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
       */
      oprindelse_nøjagtighedsklasse?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
       */
      oprindelse_registrering?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
       */
      oprindelse_tekniskStandard?: string | null;
      /**
       * EAID_4B062EDE_CE8C_414b_AB85_B5A1FD72AA78
       */
      position?: string | null;
    };
    /**
     * EAID_00A7AF01_C512_4a85_ADB5_98FB15541948
     */
    vejpunkt?: {
      datafordelerOpdateringstid?: DatafordelerOpdateringstid4;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
       */
      oprindelse_kilde?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
       */
      oprindelse_nøjagtighedsklasse?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
       */
      oprindelse_registrering?: string | null;
      /**
       * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
       */
      oprindelse_tekniskStandard?: string | null;
      /**
       * EAID_4B062EDE_CE8C_414b_AB85_B5A1FD72AA78
       */
      position?: string | null;
    };
    /**
     * EAID_0CB629B5_8D1F_486c_A319_717EDF879B82
     */
    navngivenVej?: {
      datafordelerOpdateringstid?: DatafordelerOpdateringstid5;
      /**
       * EAID_31D3BE04_2F70_4092_8381_5517A5543634
       */
      administreresAfKommune?: string | null;
      /**
       * EAID_C132D872_7F07_4ebf_BC6B_37049F2E5EB8
       */
      beskrivelse?: string | null;
      /**
       * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
       */
      forretningshændelse?: string | null;
      /**
       * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
       */
      forretningsområde?: string | null;
      /**
       * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
       */
      forretningsproces?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
       */
      id_namespace?: string | null;
      /**
       * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
       */
      registreringFra?: string | null;
      /**
       * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
       */
      registreringsaktør?: string | null;
      /**
       * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
       */
      registreringTil?: string | null;
      /**
       * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
       */
      status?: string | null;
      /**
       * EAID_788F8478_A747_412d_9DE6_FEE0DB4C1BFA
       */
      udtaltVejnavn?: string | null;
      /**
       * EAID_9621DD9D_50E3_4426_AB5A_A5E43DED4B05
       */
      vejadresseringsnavn?: string | null;
      /**
       * EAID_CA00150C_5B5C_4c32_AE72_A7EE5AEDE015
       */
      vejnavn?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
       */
      vejnavnebeliggenhed_oprindelse_kilde?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
       */
      vejnavnebeliggenhed_oprindelse_nøjagtighedsklasse?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
       */
      vejnavnebeliggenhed_oprindelse_registrering?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
       */
      vejnavnebeliggenhed_oprindelse_tekniskStandard?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_93C24B4D_0641_4073_B260_1EC7F2024CF4
       */
      vejnavnebeliggenhed_vejnavnelinje?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_1C496CD9_4541_4574_974D_B641F186077F
       */
      vejnavnebeliggenhed_vejnavneområde?: string | null;
      /**
       * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_C3E042F2_A66E_40f4_92A1_7C7024A30D16
       */
      vejnavnebeliggenhed_vejtilslutningspunkter?: string | null;
      /**
       * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
       */
      virkningFra?: string | null;
      /**
       * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
       */
      virkningsaktør?: string | null;
      /**
       * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
       */
      virkningTil?: string | null;
      /**
       * EAID_34D070E5_DD89_4984_8054_16BA70936EA0
       */
      navngivenVejKommunedelList?: {
        /**
         * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
         */
        id_lokalId?: string;
        /**
         * EAID_34D070E5_DD89_4984_8054_16BA70936EA0
         */
        navngivenVejKommunedel?: {
          datafordelerOpdateringstid?: DatafordelerOpdateringstid6;
          /**
           * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
           */
          forretningshændelse?: string | null;
          /**
           * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
           */
          forretningsområde?: string | null;
          /**
           * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
           */
          forretningsproces?: string | null;
          /**
           * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
           */
          id_lokalId?: string | null;
          /**
           * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
           */
          id_namespace?: string | null;
          /**
           * EAID_0A04B5E9_9F12_49cb_B2AF_AFEE0315AE2B
           */
          kommune?: string | null;
          /**
           * EAID_dstE87A3E_ECA3_4f38_A586_117287E4754A
           */
          navngivenVej?: string | null;
          /**
           * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
           */
          registreringFra?: string | null;
          /**
           * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
           */
          registreringsaktør?: string | null;
          /**
           * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
           */
          registreringTil?: string | null;
          /**
           * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
           */
          status?: string | null;
          /**
           * EAID_852A683F_3E30_4009_A003_B3C8F6F76930
           */
          vejkode?: string | null;
          /**
           * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
           */
          virkningFra?: string | null;
          /**
           * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
           */
          virkningsaktør?: string | null;
          /**
           * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
           */
          virkningTil?: string | null;
        };
      }[];
    };
    /**
     * EAID_449B3570_F0F7_494e_9756_D49E60644CD0
     */
    postnummer?: {
      datafordelerOpdateringstid?: DatafordelerOpdateringstid7;
      /**
       * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
       */
      forretningshændelse?: string | null;
      /**
       * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
       */
      forretningsområde?: string | null;
      /**
       * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
       */
      forretningsproces?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
       */
      id_namespace?: string | null;
      /**
       * EAID_9E7FA46D_52D9_4615_B24C_599BB28D1923
       */
      navn?: string | null;
      /**
       * EAID_8F8BACBF_E985_4dc1_BCF4_27F5C3FD0BB1
       */
      postnr?: string | null;
      /**
       * EAID_E5F5DDF9_3CF4_4304_B02D_E67AB0CDD619
       */
      postnummerinddeling?: string | null;
      /**
       * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
       */
      registreringFra?: string | null;
      /**
       * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
       */
      registreringsaktør?: string | null;
      /**
       * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
       */
      registreringTil?: string | null;
      /**
       * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
       */
      status?: string | null;
      /**
       * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
       */
      virkningFra?: string | null;
      /**
       * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
       */
      virkningsaktør?: string | null;
      /**
       * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
       */
      virkningTil?: string | null;
    };
    /**
     * EAID_9D39B21D_E73C_4f1b_9C6C_B75412DAAD77
     */
    supplerendeBynavn?: {
      datafordelerOpdateringstid?: DatafordelerOpdateringstid8;
      /**
       * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
       */
      forretningshændelse?: string | null;
      /**
       * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
       */
      forretningsområde?: string | null;
      /**
       * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
       */
      forretningsproces?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string | null;
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
       */
      id_namespace?: string | null;
      /**
       * EAID_8359992A_59C4_48c4_981D_7A42F20CA168
       */
      navn?: string | null;
      /**
       * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
       */
      registreringFra?: string | null;
      /**
       * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
       */
      registreringsaktør?: string | null;
      /**
       * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
       */
      registreringTil?: string | null;
      /**
       * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
       */
      status?: string | null;
      /**
       * EAID_C6722E9B_EF6C_425d_9373_A933C01A6A64
       */
      supplerendeBynavn?: string | null;
      /**
       * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
       */
      virkningFra?: string | null;
      /**
       * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
       */
      virkningsaktør?: string | null;
      /**
       * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
       */
      virkningTil?: string | null;
    };
  };
}[];
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid9 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid10 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid11 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid12 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid13 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid14 = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid15 = string;
/**
 * Husnummer hentet fra DAR
 */
export type Husnummer = {
  datafordelerOpdateringstid?: DatafordelerOpdateringstid9;
  /**
   * EAID_EDCC14FC_63ED_4ebe_8B52_3E406831A148
   */
  adgangsadressebetegnelse?: string | null;
  /**
   * EAID_dst3E4349_6115_4191_AF4F_243CCE561C41
   */
  adgangTilBygning?: string | null;
  /**
   * EAID_dst79A4C1_23B2_4c0c_85CC_60C6E2EA5AE0
   */
  adgangTilTekniskAnlæg?: string | null;
  /**
   * EAID_38545A1D_2A85_4020_A332_A0195A41310C
   */
  afstemningsområde?: {
    /**
     * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_60BC8063_FE94_401b_97AD_E1D1E7CD79A7
     */
    afstemningsområdenummer?: string | null;
    /**
     * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
     */
    navn?: string | null;
  };
  /**
   * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
   */
  forretningshændelse?: string | null;
  /**
   * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
   */
  forretningsområde?: string | null;
  /**
   * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
   */
  forretningsproces?: string | null;
  /**
   * EAID_dst3C28C5_D640_4bc0_9014_FDC7CBF30581
   */
  geoDanmarkBygning?: string | null;
  /**
   * EAID_1A906922_EFAC_4182_AA8C_08332D52C6EE
   */
  husnummerretning?: string | null;
  /**
   * EAID_83A4C230_5C5A_4ffb_B136_0315DD9F8DBE
   */
  husnummertekst?: string | null;
  /**
   * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
   */
  id_lokalId?: string | null;
  /**
   * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
   */
  id_namespace?: string | null;
  /**
   * EAID_dst052F4B_D60C_4ccd_BAE5_6BCED78FE40C
   */
  jordstykke?: string | null;
  /**
   * EAID_25AE826A_41DD_40a6_9AF4_3D347B1DA89F
   */
  kommuneinddeling?: {
    /**
     * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_A7825EC7_D579_401e_B49C_777BC4A39A2F
     */
    kommunekode?: string | null;
    /**
     * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
     */
    navn?: string | null;
  };
  /**
   * EAID_29CD703F_24CC_4479_B620_1F3D544702AD
   */
  menighedsrådsafstemningsområde?: {
    /**
     * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_7BDEA159_0764_4a03_8D1B_94EAE2E044E2
     */
    mrafstemningsområdenummer?: string | null;
    /**
     * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
     */
    navn?: string | null;
  };
  /**
   * EAID_dstC82C82_CC9D_4d7d_9B8A_8F4A1ADFB5AE
   */
  placeretPåForeløbigtJordstykke?: string | null;
  /**
   * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
   */
  registreringFra?: string | null;
  /**
   * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
   */
  registreringsaktør?: string | null;
  /**
   * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
   */
  registreringTil?: string | null;
  /**
   * EAID_B2A1A022_22C1_47f3_89CB_DA180694F9C0
   */
  sogneinddeling?: {
    /**
     * EAID_CA8F829A_498B_454b_86AE_9E929FD024BC.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_E50C6E75_C1CD_4c5a_9C67_3A6463514D0E
     */
    sognekode?: string | null;
    /**
     * EAID_E32FAD22_7B6E_4d9c_AB1D_43AA2F3E4BD2
     */
    navn?: string | null;
  };
  /**
   * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
   */
  status?: string | null;
  /**
   * EAID_dstC9842D_CF82_4dc5_8114_3FF7AEF90C17
   */
  vejmidte?: string | null;
  /**
   * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
   */
  virkningFra?: string | null;
  /**
   * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
   */
  virkningsaktør?: string | null;
  /**
   * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
   */
  virkningTil?: string | null;
  /**
   * EAID_0CB629B5_8D1F_486c_A319_717EDF879B82
   */
  navngivenVej?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid10;
    /**
     * EAID_31D3BE04_2F70_4092_8381_5517A5543634
     */
    administreresAfKommune?: string | null;
    /**
     * EAID_C132D872_7F07_4ebf_BC6B_37049F2E5EB8
     */
    beskrivelse?: string | null;
    /**
     * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
     */
    forretningshændelse?: string | null;
    /**
     * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
     */
    forretningsområde?: string | null;
    /**
     * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
     */
    forretningsproces?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
     */
    id_namespace?: string | null;
    /**
     * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
     */
    registreringFra?: string | null;
    /**
     * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
     */
    registreringsaktør?: string | null;
    /**
     * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
     */
    registreringTil?: string | null;
    /**
     * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
     */
    status?: string | null;
    /**
     * EAID_788F8478_A747_412d_9DE6_FEE0DB4C1BFA
     */
    udtaltVejnavn?: string | null;
    /**
     * EAID_9621DD9D_50E3_4426_AB5A_A5E43DED4B05
     */
    vejadresseringsnavn?: string | null;
    /**
     * EAID_CA00150C_5B5C_4c32_AE72_A7EE5AEDE015
     */
    vejnavn?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
     */
    vejnavnebeliggenhed_oprindelse_kilde?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
     */
    vejnavnebeliggenhed_oprindelse_nøjagtighedsklasse?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
     */
    vejnavnebeliggenhed_oprindelse_registrering?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_7F8EB510_AD02_4fd5_844B_C9AB17FB1798.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
     */
    vejnavnebeliggenhed_oprindelse_tekniskStandard?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_93C24B4D_0641_4073_B260_1EC7F2024CF4
     */
    vejnavnebeliggenhed_vejnavnelinje?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_1C496CD9_4541_4574_974D_B641F186077F
     */
    vejnavnebeliggenhed_vejnavneområde?: string | null;
    /**
     * EAID_4C594A8E_797B_40bb_B60D_0E5C9159DCD3.EAID_C3E042F2_A66E_40f4_92A1_7C7024A30D16
     */
    vejnavnebeliggenhed_vejtilslutningspunkter?: string | null;
    /**
     * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
     */
    virkningFra?: string | null;
    /**
     * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
     */
    virkningsaktør?: string | null;
    /**
     * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
     */
    virkningTil?: string | null;
    /**
     * EAID_34D070E5_DD89_4984_8054_16BA70936EA0
     */
    navngivenVejKommunedelList?: {
      /**
       * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
       */
      id_lokalId?: string;
      /**
       * EAID_34D070E5_DD89_4984_8054_16BA70936EA0
       */
      navngivenVejKommunedel?: {
        datafordelerOpdateringstid?: DatafordelerOpdateringstid11;
        /**
         * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
         */
        forretningshændelse?: string | null;
        /**
         * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
         */
        forretningsområde?: string | null;
        /**
         * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
         */
        forretningsproces?: string | null;
        /**
         * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
         */
        id_lokalId?: string | null;
        /**
         * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
         */
        id_namespace?: string | null;
        /**
         * EAID_0A04B5E9_9F12_49cb_B2AF_AFEE0315AE2B
         */
        kommune?: string | null;
        /**
         * EAID_dstE87A3E_ECA3_4f38_A586_117287E4754A
         */
        navngivenVej?: string | null;
        /**
         * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
         */
        registreringFra?: string | null;
        /**
         * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
         */
        registreringsaktør?: string | null;
        /**
         * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
         */
        registreringTil?: string | null;
        /**
         * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
         */
        status?: string | null;
        /**
         * EAID_852A683F_3E30_4009_A003_B3C8F6F76930
         */
        vejkode?: string | null;
        /**
         * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
         */
        virkningFra?: string | null;
        /**
         * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
         */
        virkningsaktør?: string | null;
        /**
         * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
         */
        virkningTil?: string | null;
      };
    }[];
  };
  /**
   * EAID_00A7AF01_C512_4a85_ADB5_98FB15541948
   */
  adgangspunkt?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid12;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
     */
    oprindelse_kilde?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
     */
    oprindelse_nøjagtighedsklasse?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
     */
    oprindelse_registrering?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
     */
    oprindelse_tekniskStandard?: string | null;
    /**
     * EAID_4B062EDE_CE8C_414b_AB85_B5A1FD72AA78
     */
    position?: string | null;
  };
  /**
   * EAID_00A7AF01_C512_4a85_ADB5_98FB15541948
   */
  vejpunkt?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid13;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_FD77FC95_714B_4779_B7FA_F9BBAB41758D
     */
    oprindelse_kilde?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_B8A27494_DF27_4aa9_B1F4_EBD68D2479A5
     */
    oprindelse_nøjagtighedsklasse?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_10DCC555_0BE9_4991_AD8C_DEA595CB08A0
     */
    oprindelse_registrering?: string | null;
    /**
     * EAID_B9AAE6C5_974D_4d20_BABA_C62874774F4B.EAID_181528AD_2DA3_4e9d_BF38_81916A924D2A
     */
    oprindelse_tekniskStandard?: string | null;
    /**
     * EAID_4B062EDE_CE8C_414b_AB85_B5A1FD72AA78
     */
    position?: string | null;
  };
  /**
   * EAID_449B3570_F0F7_494e_9756_D49E60644CD0
   */
  postnummer?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid14;
    /**
     * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
     */
    forretningshændelse?: string | null;
    /**
     * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
     */
    forretningsområde?: string | null;
    /**
     * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
     */
    forretningsproces?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
     */
    id_namespace?: string | null;
    /**
     * EAID_9E7FA46D_52D9_4615_B24C_599BB28D1923
     */
    navn?: string | null;
    /**
     * EAID_8F8BACBF_E985_4dc1_BCF4_27F5C3FD0BB1
     */
    postnr?: string | null;
    /**
     * EAID_E5F5DDF9_3CF4_4304_B02D_E67AB0CDD619
     */
    postnummerinddeling?: string | null;
    /**
     * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
     */
    registreringFra?: string | null;
    /**
     * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
     */
    registreringsaktør?: string | null;
    /**
     * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
     */
    registreringTil?: string | null;
    /**
     * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
     */
    status?: string | null;
    /**
     * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
     */
    virkningFra?: string | null;
    /**
     * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
     */
    virkningsaktør?: string | null;
    /**
     * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
     */
    virkningTil?: string | null;
  };
  /**
   * EAID_9D39B21D_E73C_4f1b_9C6C_B75412DAAD77
   */
  supplerendeBynavn?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid15;
    /**
     * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
     */
    forretningshændelse?: string | null;
    /**
     * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
     */
    forretningsområde?: string | null;
    /**
     * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
     */
    forretningsproces?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId?: string | null;
    /**
     * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
     */
    id_namespace?: string | null;
    /**
     * EAID_8359992A_59C4_48c4_981D_7A42F20CA168
     */
    navn?: string | null;
    /**
     * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
     */
    registreringFra?: string | null;
    /**
     * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
     */
    registreringsaktør?: string | null;
    /**
     * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
     */
    registreringTil?: string | null;
    /**
     * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
     */
    status?: string | null;
    /**
     * EAID_C6722E9B_EF6C_425d_9373_A933C01A6A64
     */
    supplerendeBynavn?: string | null;
    /**
     * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
     */
    virkningFra?: string | null;
    /**
     * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
     */
    virkningsaktør?: string | null;
    /**
     * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
     */
    virkningTil?: string | null;
  };
}[];
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
