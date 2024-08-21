/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * EAID_422EE0E4_C1B2_4dc0_A1DD_88F37B725096
 */
export type Ejerskab = {
  features: {
    properties?: {
      bestemtFastEjendomBFENr?: BestemtFastEjendomBFENr;
      DARadresse?: DARadresse;
      administratoroplysninger?: Administratoroplysninger;
      administrerendePerson?: AdministrerendePerson;
      administrerendeProduktionsenhed?: AdministrerendeProduktionsenhed;
      administrerendeVirksomhed?: AdministrerendeVirksomhed;
      begraensning?: Begraensning;
      behandlingsID?: BehandlingsID1;
      ejendePerson?: EjendePerson;
      ejendeVirksomhed?: EjendeVirksomhed;
      ejerforholdskode?: Ejerforholdskode;
      ejeroplysninger?: Ejeroplysninger;
      ejetFoer01071998?: EjetFoer01071998;
      faktiskEjerandel_naevner?: FaktiskEjerandelNaevner;
      faktiskEjerandel_taeller?: FaktiskEjerandelTaeller;
      forretningshaendelse?: Forretningshaendelse2;
      forretningsomraade?: Forretningsomraade1;
      forretningsproces?: Forretningsproces2;
      id_lokalId?: IdLokalId2;
      id_namespace?: IdNamespace2;
      primaerKontakt?: PrimaerKontakt;
      registreringFra?: RegistreringFra4;
      registreringTil?: RegistreringTil4;
      registreringsaktoer?: Registreringsaktoer3;
      status?: Status5;
      tinglystEjerandel_naevner?: TinglystEjerandelNaevner;
      tinglystEjerandel_taeller?: TinglystEjerandelTaeller;
      virkningFra?: VirkningFra4;
      virkningTil?: VirkningTil4;
      virkningsaktoer?: Virkningsaktoer3;
    };
    type?: "Feature";
  }[];
  type: "FeatureCollection";
} & ({
  features: {
    properties?: {
      bestemtFastEjendomBFENr?: BestemtFastEjendomBFENr;
      DARadresse?: DARadresse;
      administratoroplysninger?: Administratoroplysninger;
      administrerendePerson?: AdministrerendePerson;
      administrerendeProduktionsenhed?: AdministrerendeProduktionsenhed;
      administrerendeVirksomhed?: AdministrerendeVirksomhed;
      begraensning?: Begraensning;
      behandlingsID?: BehandlingsID1;
      ejendePerson?: EjendePerson;
      ejendeVirksomhed?: EjendeVirksomhed;
      ejerforholdskode?: Ejerforholdskode;
      ejeroplysninger?: Ejeroplysninger;
      ejetFoer01071998?: EjetFoer01071998;
      faktiskEjerandel_naevner?: FaktiskEjerandelNaevner;
      faktiskEjerandel_taeller?: FaktiskEjerandelTaeller;
      forretningshaendelse?: Forretningshaendelse2;
      forretningsomraade?: Forretningsomraade1;
      forretningsproces?: Forretningsproces2;
      id_lokalId?: IdLokalId2;
      id_namespace?: IdNamespace2;
      primaerKontakt?: PrimaerKontakt;
      registreringFra?: RegistreringFra4;
      registreringTil?: RegistreringTil4;
      registreringsaktoer?: Registreringsaktoer3;
      status?: Status5;
      tinglystEjerandel_naevner?: TinglystEjerandelNaevner;
      tinglystEjerandel_taeller?: TinglystEjerandelTaeller;
      virkningFra?: VirkningFra4;
      virkningTil?: VirkningTil4;
      virkningsaktoer?: Virkningsaktoer3;
    };
    type?: "Feature";
  }[];
  type: "FeatureCollection";
} | null);
/**
 * EAID_dst911481_AA7A_425a_8B3D_DA1AE8630B36
 */
export type BestemtFastEjendomBFENr = number;
/**
 * Denne anvendes hvis der er ejeroplysninger, ejendePerson eller ejendeVirksomhed indeholder en reference til en DAR adresse
 */
export type DARadresse = {
  entityType?: FeatureObjectType;
  attributes?: FeatureAttributes;
} & ({
  entityType?: FeatureObjectType;
  attributes?: FeatureAttributes;
} | null);
export type FeatureObjectType = string;
/**
 * EAID_1CE948DD_FC3D_4638_8913_A2D35A00F64D
 */
export type Forretningshaendelse = string;
/**
 * EAID_C955CFEC_E2A0_47da_9F76_6452FCC9E4E2
 */
export type Forretningsomrade = string;
/**
 * EAID_A9A40479_E58D_4c7a_A0EA_F8EC4829ECAC
 */
export type Forretningsproces = string;
/**
 * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
 */
export type IdNamespace = string;
/**
 * EAID_D273E3D8_A3F4_41bc_AF9C_E67B4A29C008.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type IdLokalId = string;
/**
 * EAID_96862BAA_95CA_46aa_A6A0_757327A10BF7
 */
export type RegistreringFra = string;
/**
 * EAID_9F724D2B_7763_4997_8C85_580610BABC1F
 */
export type Registreringsaktor = string;
/**
 * EAID_301BF58F_26E7_4d1f_B7B6_3881F8C1B0A5
 */
export type RegistreringTil = string;
/**
 * EAID_22AF1E6A_73A8_4c89_96EB_C307235DFD19
 */
export type Status = string;
/**
 * EAID_AB768062_FD24_4960_8AA1_C6BFF90C00C5
 */
export type VirkningFra = string;
/**
 * EAID_8E60197F_D857_47c6_8611_75B63D0940FD
 */
export type Virkningsaktor = string;
/**
 * EAID_3058C5FD_9824_48ba_B62C_C24587BF6537
 */
export type VirkningTil = string;
/**
 * EAID_BB398854_F92E_4372_A20A_D7136BB5CD9C
 */
export type Adressebetegnelse = string;
/**
 * Anvendes, når administrator ikke er i CPR eller CVR
 */
export type Administratoroplysninger = {
  type: "FeatureCollection";
  features: {
    type?: "Feature";
    properties?: {
      id_namespace?: IdNamespace1;
      id_lokalId?: IdLokalId1;
      behandlingsID?: BehandlingsID;
      forretningshaendelse?: Forretningshaendelse1;
      forretningsomraade?: Forretningsomraade;
      forretningsproces?: Forretningsproces1;
      status?: Status1;
      registreringFra?: RegistreringFra1;
      registreringTil?: RegistreringTil1;
      registreringsaktoer?: Registreringsaktoer;
      virkningFra?: VirkningFra1;
      virkningTil?: VirkningTil1;
      virkningsaktoer?: Virkningsaktoer;
      navn?: Navn;
      fiktivtPVnummer?: FiktivtPVnummer;
      adresse?: Adresse;
      kommuneinddelingKommunekode?: KommuneinddelingKommunekode;
      alternativAdresse?: AlternativAdresse;
    };
  }[];
} | null;
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
 */
export type IdNamespace1 = string;
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type IdLokalId1 = string;
/**
 * EAID_A7C68DBB_D219_40c4_84A4_8BCF63D9C26B
 */
export type BehandlingsID = string;
/**
 * EAID_EDB900B1_E09F_41af_9925_81793C8AD137
 */
export type Forretningshaendelse1 =
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
export type Forretningsproces1 =
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
export type Status1 = "gældende" | "tilbagerullet" | "historisk";
/**
 * EAID_76A43210_69E9_4a22_8D1F_A4CBCF5D362D
 */
export type RegistreringFra1 = string;
/**
 * EAID_E41A79F3_7D5D_4314_AA49_2610AFC92738
 */
export type RegistreringTil1 = string | null;
/**
 * EAID_F6836D58_7AD0_404b_920E_FD8764511D5A
 */
export type Registreringsaktoer = string;
/**
 * EAID_DB0ADB0B_AEF4_4c51_846D_D3404DC85449
 */
export type VirkningFra1 = string;
/**
 * EAID_06091801_5AC6_4262_825D_0B4C2FA3D57C
 */
export type VirkningTil1 = string | null;
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
/**
 * EAID_741EF37B_4051_4519_9679_BBE002387552
 */
export type Conavn = string;
/**
 * EAID_dst0DF442_9282_4181_B43D_23B02F422804
 */
export type Beskyttelsestype = "lokal_vejviser" | "markedsfoering" | "navne_og_adresse" | "kreditadvarsel";
/**
 * EAID_ACD32207_32F0_4915_AAA8_9E2788B44F2F
 */
export type Bygningsnummer = string;
/**
 * EAID_B5548113_C452_4341_8E8F_CF25F0D4C303
 */
export type Bynavn = string;
/**
 * EAID_CFBC5E5D_1439_41ba_B8AB_356A1859A89F
 */
export type CprKommunekode = string;
/**
 * EAID_726EF7E6_C1A9_451b_B96E_F8089B1F5737
 */
export type CprKommunenavn = string;
/**
 * EAID_D813A2D9_DEE3_4173_8CD1_8870F48BDE80
 */
export type CprVejkode = string;
/**
 * EAID_0B2FDA44_B0BA_46c7_B1E5_12720402B077
 */
export type DarAdresseId = string;
/**
 * EAID_F7EC8E87_F0CC_497c_8CBA_540BF38A0841
 */
export type Etage = string;
/**
 * EAID_83469B46_64B3_49f1_8A47_357349B12725
 */
export type Husnummer = string;
/**
 * EAID_220BE81E_5B14_406c_B503_BD96ABEB559A
 */
export type Postdistrikt = string;
/**
 * EAID_2E49BFE4_0E7D_47e1_934F_4A2BEF38D14E
 */
export type Postnummer = string;
/**
 * EAID_542068CC_8B0B_41de_845D_63E39479BA22
 */
export type Sidedoer = string;
/**
 * EAID_F35B588E_8604_45be_88EE_D88095DA8AE1
 */
export type Vejadresseringsnavn = string;
/**
 * EAID_2B7D329F_7E3B_4bce_85BC_2B084619649D
 */
export type Adresseringsnavn = string;
/**
 * Sammensat af: vejadresseringsnavn husnummer, etage, sidedoer bygningsnummer
 */
export type Standardadresse = string;
/**
 * EAID_65467DBA_54ED_4da7_8F09_3646D0052892
 */
export type Adresselinie1 = string;
/**
 * EAID_9F3B7E21_B625_4f58_890D_D3EAFDB84112
 */
export type Adresselinie2 = string;
/**
 * EAID_730F4C3D_8B73_4bdc_9B62_BB758FF03018
 */
export type Adresselinie3 = string;
/**
 * EAID_3B60F849_84EE_4774_A3A3_8AD836836C84
 */
export type Adresselinie4 = string;
/**
 * EAID_A791BBA5_8145_4f31_A1E0_9E6813148B82
 */
export type Adresselinie5 = string;
/**
 * EAID_13FA5170_102B_42cc_8AD5_ED692015DBA3
 */
export type CprLandUdrejse = string;
/**
 * EAID_DA761AC7_7D23_42be_88DE_D8766666D055
 */
export type CprLandekodeUdrejse = string;
/**
 * EAID_73A30E1A_3B25_4e2a_A0A0_3CFA34BBB97B
 */
export type Foedselsdato = string;
/**
 * EAID_01234969_FFF0_4963_873C_711C364B53A7
 */
export type FoedselsdatoUsikkerhedsmarkering = boolean;
/**
 * EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type Id = string;
/**
 * EAID_dstF7A403_40CF_47c0_B8E8_819BC58A1DC4
 */
export type Koen = "kvinde" | "mand";
/**
 * EAID_dstB8BFA9_D6E2_43e8_AF38_A6C1F0174C5A
 */
export type Status2 =
  | "annulleret"
  | "bopael_i_danmark"
  | "bopael_i_danmark_hoej_vejkode"
  | "bopael_i_groenland"
  | "bopael_i_groenland_hoej_vejkode"
  | "doed"
  | "ej_bopael"
  | "forsvundet"
  | "nedlagt_person"
  | "udrejst";
/**
 * EAID_1CB4F47F_E13B_4440_9297_8F25FEC71C49
 */
export type Statusdato = string;
/**
 * EAID_EFF81ED0_3AE0_4535_B0B5_AC4F29FDD5A7
 */
export type StatusdatoUsikkerhedsmarkering = boolean;
export type FeatureObjectType1 = string;
/**
 * EAID_1BEEC8C1_4BA3_46ff_861B_E46E0984DDB2
 */
export type RegistreringFra2 = string;
/**
 * EAID_CF2E7BAA_4C9F_4a96_877A_C5CEAA8C13F9
 */
export type Registreringsaktoer1 = string;
/**
 * EAID_6C72E382_468E_4634_8880_4F67DCB93FF5
 */
export type RegistreringTil2 = string;
export type Status3 = string;
export type VirkningFra2 = string;
export type Virkningsaktoer1 = string;
export type VirkningTil2 = string;
/**
 * EAID_C579CB46_0ED3_4bdf_BA0D_9F4C362BAA2F
 */
export type PNummer = number;
/**
 * EAID_049CB9E9_F315_4be4_95C9_FDE2BFC6A20C.EAID_144A417F_EA68_4352_A9CC_EFF3978E2D8F
 */
export type Beskrivelse = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_9512F445_32B7_4b72_83FE_83FDF36AC2D8
 */
export type CVRAdresseVejkode = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_561373D6_30BC_4e42_86F4_76B1D9B60E10
 */
export type CVRAdresseHusnummerFra = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_EF69553F_A19E_4605_8EB4_4F61995B201D
 */
export type CVRAdresseEtagebetegnelse = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_22C40CDE_4925_4dc9_BA4C_9E4AFA692D67
 */
export type CVRAdresseDoerbetegnelse = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_3F9DE3E9_9D86_4722_B59E_09B95A75A9DA
 */
export type CVRAdresseKommunekode = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_EAEDB565_367E_4a95_8CB8_EE9C308A6F4E
 */
export type CVRAdresseKommunenavn = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_8C2C9C6C_E45C_4278_97CC_41AE042337F8
 */
export type CVRAdressePostdistrikt = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_1F5BF752_E7DF_4e61_8DA1_39C86F8DC6DE
 */
export type CVRAdresseVejnavn = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_126ABFBD_6A02_4454_B5F9_3DCEECE7B620
 */
export type CVRAdresseHusnummerTil = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_5FC3AC5A_0DF5_459a_8A17_483105CF8B83
 */
export type CVRAdressePostnummer = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_591A2633_FC34_4381_9532_43D88644B500
 */
export type CVRAdresseSupplerendeBynavn = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_DBBF0C2A_3B2B_4ccd_9BCA_02765BA69D58
 */
export type CVRAdresseAdresseFritekst = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_F4B6B4AF_D20F_43b1_B6C1_0185881B1F39
 */
export type CVRAdresseLandekode = string;
/**
 * EAID_18DDA050_1B3F_434b_B300_E3371C0CDC2C
 */
export type CoNavn = string;
export type FeatureObjectType2 = string;
/**
 * EAID_1BEEC8C1_4BA3_46ff_861B_E46E0984DDB2
 */
export type RegistreringFra3 = string;
/**
 * EAID_CF2E7BAA_4C9F_4a96_877A_C5CEAA8C13F9
 */
export type Registreringsaktoer2 = string;
/**
 * EAID_6C72E382_468E_4634_8880_4F67DCB93FF5
 */
export type RegistreringTil3 = string;
export type Status4 = string;
export type VirkningFra3 = string;
export type Virkningsaktoer2 = string;
export type VirkningTil3 = string;
/**
 * EAID_564C37C6_7647_4f64_9116_5B273C30D955
 */
export type CVRNummer = number;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_9512F445_32B7_4b72_83FE_83FDF36AC2D8
 */
export type CVRAdresseVejkode1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_561373D6_30BC_4e42_86F4_76B1D9B60E10
 */
export type CVRAdresseHusnummerFra1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_EF69553F_A19E_4605_8EB4_4F61995B201D
 */
export type CVRAdresseEtagebetegnelse1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_22C40CDE_4925_4dc9_BA4C_9E4AFA692D67
 */
export type CVRAdresseDoerbetegnelse1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_3F9DE3E9_9D86_4722_B59E_09B95A75A9DA
 */
export type CVRAdresseKommunekode1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_EAEDB565_367E_4a95_8CB8_EE9C308A6F4E
 */
export type CVRAdresseKommunenavn1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_8C2C9C6C_E45C_4278_97CC_41AE042337F8
 */
export type CVRAdressePostdistrikt1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_1F5BF752_E7DF_4e61_8DA1_39C86F8DC6DE
 */
export type CVRAdresseVejnavn1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_126ABFBD_6A02_4454_B5F9_3DCEECE7B620
 */
export type CVRAdresseHusnummerTil1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_5FC3AC5A_0DF5_459a_8A17_483105CF8B83
 */
export type CVRAdressePostnummer1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_591A2633_FC34_4381_9532_43D88644B500
 */
export type CVRAdresseSupplerendeBynavn1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_DBBF0C2A_3B2B_4ccd_9BCA_02765BA69D58
 */
export type CVRAdresseAdresseFritekst1 = string;
/**
 * EAID_E52F02C1_A082_463e_9F55_E2CED8CDEA52.EAID_F4B6B4AF_D20F_43b1_B6C1_0185881B1F39
 */
export type CVRAdresseLandekode1 = string;
/**
 * EAID_18DDA050_1B3F_434b_B300_E3371C0CDC2C
 */
export type CoNavn1 = string;
/**
 * EAID_A4BFDABD_4993_4654_A8FD_CDB60B9A89A4
 */
export type Begraensning = boolean | null;
/**
 * EAID_A7C68DBB_D219_40c4_84A4_8BCF63D9C26B
 */
export type BehandlingsID1 = string;
/**
 * EAID_1910B76C_A9D5_4e34_9A1D_495F70E4D887
 */
export type Ejerforholdskode = "10" | "20" | "30" | "40" | "41" | "50" | "60" | "70" | "80" | "90" | "99";
/**
 * Anvendes, når ejer ikke er i CPR eller CVR
 */
export type Ejeroplysninger = {
  type: "FeatureCollection";
  features: {
    type?: "Feature";
    properties?: {
      id_namespace?: IdNamespace1;
      id_lokalId?: IdLokalId1;
      behandlingsID?: BehandlingsID;
      forretningshaendelse?: Forretningshaendelse1;
      forretningsomraade?: Forretningsomraade;
      forretningsproces?: Forretningsproces1;
      status?: Status1;
      registreringFra?: RegistreringFra1;
      registreringTil?: RegistreringTil1;
      registreringsaktoer?: Registreringsaktoer;
      virkningFra?: VirkningFra1;
      virkningTil?: VirkningTil1;
      virkningsaktoer?: Virkningsaktoer;
      navn?: Navn;
      fiktivtPVnummer?: FiktivtPVnummer;
      adresse?: Adresse;
      kommuneinddelingKommunekode?: KommuneinddelingKommunekode;
      alternativAdresse?: AlternativAdresse;
    };
  }[];
} | null;
/**
 * EAID_2E6C5DAC_516D_488a_866E_DF247291610D
 */
export type EjetFoer01071998 = boolean;
/**
 * EAID_73EA95A7_5898_4baa_9E07_75AB0397FF92.EAID_B48E7EF3_99F8_464c_A5E0_6A3BC71D0895
 */
export type FaktiskEjerandelNaevner = number;
/**
 * EAID_73EA95A7_5898_4baa_9E07_75AB0397FF92.EAID_F4081119_31CD_4e24_8DAE_56481EBB68C1
 */
export type FaktiskEjerandelTaeller = number;
/**
 * EAID_EDB900B1_E09F_41af_9925_81793C8AD137
 */
export type Forretningshaendelse2 =
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
export type Forretningsomraade1 = "54.15";
/**
 * EAID_6E09BC0B_4FEB_4fe5_9D75_A0A0A1D121B7
 */
export type Forretningsproces2 =
  | "Hændelse fra Digital Tinglysning"
  | "Konvertering fra ESR"
  | "Landsdækkende kørsel"
  | "Manuel opdatering"
  | "Hændelse fra CPR"
  | "Hændelse fra CVR"
  | "Opdatering fra Matriklen"
  | "Opdatering fra Skifte- eller Fogedret";
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
 */
export type IdLokalId2 = string;
/**
 * EAID_42EEFD36_07DE_48e5_AF47_A3302D9EDEF5.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
 */
export type IdNamespace2 = string;
/**
 * EAID_907CD008_A727_4260_BD0F_EF47C23A9829
 */
export type PrimaerKontakt = boolean;
/**
 * EAID_76A43210_69E9_4a22_8D1F_A4CBCF5D362D
 */
export type RegistreringFra4 = string;
/**
 * EAID_E41A79F3_7D5D_4314_AA49_2610AFC92738
 */
export type RegistreringTil4 = string | null;
/**
 * EAID_F6836D58_7AD0_404b_920E_FD8764511D5A
 */
export type Registreringsaktoer3 = string;
/**
 * EAID_5DF93B9F_50AA_49aa_9481_F04517799FFF
 */
export type Status5 = "gældende" | "tilbagerullet" | "historisk";
/**
 * EAID_D8EF2154_5CF4_493d_9CBE_6D3FB667563F.EAID_B48E7EF3_99F8_464c_A5E0_6A3BC71D0895
 */
export type TinglystEjerandelNaevner = number | null;
/**
 * EAID_D8EF2154_5CF4_493d_9CBE_6D3FB667563F.EAID_F4081119_31CD_4e24_8DAE_56481EBB68C1
 */
export type TinglystEjerandelTaeller = number | null;
/**
 * EAID_DB0ADB0B_AEF4_4c51_846D_D3404DC85449
 */
export type VirkningFra4 = string;
/**
 * EAID_06091801_5AC6_4262_825D_0B4C2FA3D57C
 */
export type VirkningTil4 = string | null;
/**
 * EAID_96D2147C_1A0D_45cf_85B2_5C8F69EB084D
 */
export type Virkningsaktoer3 = string;

export interface FeatureAttributes {
  forretningshændelse?: Forretningshaendelse;
  forretningsområde?: Forretningsomrade;
  forretningsproces?: Forretningsproces;
  id_namespace?: IdNamespace;
  id_lokalId?: IdLokalId;
  registreringFra?: RegistreringFra;
  registreringsaktør?: Registreringsaktor;
  registreringTil?: RegistreringTil;
  status?: Status;
  virkningFra?: VirkningFra;
  virkningsaktør?: Virkningsaktor;
  virkningTil?: VirkningTil;
  adressebetegnelse?: Adressebetegnelse;
}
/**
 * Anvendes når administrator er en person i CPR
 */
export interface AdministrerendePerson {
  Person?: Person;
}
/**
 * EAID_88677603_1144_48ed_B41E_90321AC84A84
 */
export interface Person {
  Adresseoplysninger?: Adresseoplysninger;
  Beskyttelser?: {
    Beskyttelse?: Beskyttelse;
  }[];
  CprAdresse?: CprAdresse;
  Navn?: Navn1;
  Standardadresse?: Standardadresse;
  UdrejseIndrejse?: UdrejseIndrejse;
  foedselsdato: Foedselsdato;
  foedselsdatoUsikkerhedsmarkering: FoedselsdatoUsikkerhedsmarkering;
  id: Id;
  koen: Koen;
  status: Status2;
  statusdato: Statusdato;
  statusdatoUsikkerhedsmarkering: StatusdatoUsikkerhedsmarkering;
}
/**
 * EAID_730BF9DA_9B85_4d13_8BE2_7D49D0F326FD
 */
export interface Adresseoplysninger {
  adresseringsnavn?: Conavn;
}
/**
 * EAID_1C8B099A_4D09_4c75_8B36_F8B92F853D6D
 */
export interface Beskyttelse {
  beskyttelsestype: Beskyttelsestype;
}
/**
 * EAID_5B1E3DAB_0235_4b7b_9EE5_2C5F8B8A17F8
 */
export interface CprAdresse {
  bygningsnummer?: Bygningsnummer;
  bynavn?: Bynavn;
  cprKommunekode?: CprKommunekode;
  cprKommunenavn?: CprKommunenavn;
  cprVejkode?: CprVejkode;
  darAdresseId?: DarAdresseId;
  etage?: Etage;
  husnummer?: Husnummer;
  postdistrikt?: Postdistrikt;
  postnummer?: Postnummer;
  sidedoer?: Sidedoer;
  vejadresseringsnavn?: Vejadresseringsnavn;
}
/**
 * EAID_20C79015_D907_485a_98A4_0517A9899FC2
 */
export interface Navn1 {
  adresseringsnavn?: Adresseringsnavn;
}
/**
 * EAID_EF1C0CBC_3539_467f_8B44_2AA54A4C1B03
 */
export interface UdrejseIndrejse {
  Udenlandsadresse?: Udenlandsadresse;
  cprLandUdrejse?: CprLandUdrejse;
  cprLandekodeUdrejse?: CprLandekodeUdrejse;
}
/**
 * EAID_264167B9_E694_4f62_A268_0CE927CEF721
 */
export interface Udenlandsadresse {
  adresselinie1?: Adresselinie1;
  adresselinie2?: Adresselinie2;
  adresselinie3?: Adresselinie3;
  adresselinie4?: Adresselinie4;
  adresselinie5?: Adresselinie5;
}
/**
 * Anvendes når administrator er en produktionsenhed i CVR
 */
export interface AdministrerendeProduktionsenhed {
  entityType?: FeatureObjectType1;
  attributes?: FeatureAttributes1;
}
export interface FeatureAttributes1 {
  registreringFra?: RegistreringFra2;
  registreringsaktoer?: Registreringsaktoer1;
  registreringTil?: RegistreringTil2;
  status?: Status3;
  virkningFra?: VirkningFra2;
  virkningsaktoer?: Virkningsaktoer1;
  virkningTil?: VirkningTil2;
  pNummer?: PNummer;
  /**
   * EAID_F2A643F4_61DC_4b33_B8E4_03D4F90C0108.EAID_657F68FA_4810_48dc_B118_59191B6F874B
   */
  reklamebeskyttelse?: boolean;
  navn?: Beskrivelse;
  /**
   * EAID_FF2F21EC_1140_4cc7_B178_C5DE10D1EE78
   */
  beliggenhedsadresse?: {
    "CVRAdresse.vejkode"?: CVRAdresseVejkode;
    "CVRAdresse.husnummerFra"?: CVRAdresseHusnummerFra;
    "CVRAdresse.etagebetegnelse"?: CVRAdresseEtagebetegnelse;
    "CVRAdresse.doerbetegnelse"?: CVRAdresseDoerbetegnelse;
    "CVRAdresse.kommunekode"?: CVRAdresseKommunekode;
    "CVRAdresse.kommunenavn"?: CVRAdresseKommunenavn;
    "CVRAdresse.postdistrikt"?: CVRAdressePostdistrikt;
    "CVRAdresse.vejnavn"?: CVRAdresseVejnavn;
    "CVRAdresse.husnummerTil"?: CVRAdresseHusnummerTil;
    "CVRAdresse.postnummer"?: CVRAdressePostnummer;
    "CVRAdresse.supplerendeBynavn"?: CVRAdresseSupplerendeBynavn;
    "CVRAdresse.adresseFritekst"?: CVRAdresseAdresseFritekst;
    "CVRAdresse.landekode"?: CVRAdresseLandekode;
    coNavn?: CoNavn;
  };
}
/**
 * Anvendes når administrator er en virksomhed i CVR
 */
export interface AdministrerendeVirksomhed {
  entityType?: FeatureObjectType2;
  attributes?: FeatureAttributes2;
}
export interface FeatureAttributes2 {
  registreringFra?: RegistreringFra3;
  registreringsaktoer?: Registreringsaktoer2;
  registreringTil?: RegistreringTil3;
  status?: Status4;
  virkningFra?: VirkningFra3;
  virkningsaktoer?: Virkningsaktoer2;
  virkningTil?: VirkningTil3;
  CVRNummer?: CVRNummer;
  /**
   * EAID_F2A643F4_61DC_4b33_B8E4_03D4F90C0108.EAID_657F68FA_4810_48dc_B118_59191B6F874B
   */
  reklamebeskyttelse?: boolean;
  /**
   * EAID_AE8C2560_67DF_41e3_98D3_AD8500846E9B.EAID_144A417F_EA68_4352_A9CC_EFF3978E2D8F
   */
  navn?: string;
  /**
   * EAID_41A2C86F_F7B7_494c_952D_536E915A1AA6
   */
  beliggenhedsadresse?: {
    "CVRAdresse.vejkode"?: CVRAdresseVejkode1;
    "CVRAdresse.husnummerFra"?: CVRAdresseHusnummerFra1;
    "CVRAdresse.etagebetegnelse"?: CVRAdresseEtagebetegnelse1;
    "CVRAdresse.doerbetegnelse"?: CVRAdresseDoerbetegnelse1;
    "CVRAdresse.kommunekode"?: CVRAdresseKommunekode1;
    "CVRAdresse.kommunenavn"?: CVRAdresseKommunenavn1;
    "CVRAdresse.postdistrikt"?: CVRAdressePostdistrikt1;
    "CVRAdresse.vejnavn"?: CVRAdresseVejnavn1;
    "CVRAdresse.husnummerTil"?: CVRAdresseHusnummerTil1;
    "CVRAdresse.postnummer"?: CVRAdressePostnummer1;
    "CVRAdresse.supplerendeBynavn"?: CVRAdresseSupplerendeBynavn1;
    "CVRAdresse.adresseFritekst"?: CVRAdresseAdresseFritekst1;
    "CVRAdresse.landekode"?: CVRAdresseLandekode1;
    coNavn?: CoNavn1;
  };
}
/**
 * Anvendes når ejer er en person i CPR
 */
export interface EjendePerson {
  Person?: Person;
}
/**
 * Anvendes når ejer er en virksomhed i CVR
 */
export interface EjendeVirksomhed {
  entityType?: FeatureObjectType2;
  attributes?: FeatureAttributes2;
}
