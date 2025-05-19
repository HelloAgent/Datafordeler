/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
 */

/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid = string;
/**
 * UpdateTimestamp()
 */
export type DatafordelerOpdateringstid1 = string;
export type BBR_244_Grund = {
  datafordelerOpdateringstid?: DatafordelerOpdateringstid;
  /**
   * EAID_50066AF4_06D9_4f3a_BAC2_5F83ABF0E335
   */
  forretningshændelse?: string | null;
  /**
   * EAID_C91552B7_18C0_4e28_8B06_F60332A8776B
   */
  forretningsområde?: string | null;
  /**
   * EAID_E4132152_7923_4533_8529_5E8D8C937656
   */
  forretningsproces?: string | null;
  /**
   * EAID_C0DD6345_90EB_4aef_A312_105FEF1BC4F2
   */
  gru009Vandforsyning?: string | null;
  /**
   * EAID_AE5AC661_BFA6_4fa2_8210_A3043E6F1721
   */
  gru010Afløbsforhold?: string | null;
  /**
   * EAID_8E324A0D_A43D_4d05_AD16_1E876D10E525
   */
  gru021Udledningstilladelse?: string | null;
  /**
   * EAID_C7CBA5F2_7EA3_4806_B1C4_4D81C97C7F59
   */
  gru022MedlemskabAfSpildevandsforsyning?: string | null;
  /**
   * EAID_54B03620_684B_4f51_8F6E_6C8C2405B98C
   */
  gru023PåbudVedrSpildevandsafledning?: string | null;
  /**
   * EAID_259EABD5_20FB_462d_BB9B_5C0CD7D055FF
   */
  gru024FristVedrSpildevandsafledning?: string | null;
  /**
   * EAID_039C6FD1_A8C3_438b_B701_825B2751E3DE
   */
  gru025TilladelseTilUdtræden?: string | null;
  /**
   * EAID_545F6FFE_D80C_4a6c_ADFA_9E26FDD2D24D
   */
  gru026DatoForTilladelseTilUdtræden?: string | null;
  /**
   * EAID_35B32752_5421_424d_ADD6_B1E5189F7043
   */
  gru027TilladelseTilAlternativBortskaffelseEllerAfledning?: string | null;
  /**
   * EAID_7178E3C6_4EDF_4d51_B6BD_6514F4170EC0
   */
  gru028DatoForTilladelseTilAlternativBortskaffelseEllerAfledning?: string | null;
  /**
   * EAID_C4487A68_021D_4c7b_80DE_0F1B1C879B0D
   */
  gru029DispensationFritagelseIftKollektivVarmeforsyning?: string | null;
  /**
   * EAID_E8192AB6_85B3_4f8d_B433_A3B00DA3D5AB
   */
  gru030DatoForDispensationFritagelseIftKollektivVarmeforsyning?: string | null;
  /**
   * EAID_56371547_908C_4971_8882_9B69A7BEF7B4
   */
  gru500Notatlinjer?: string | null;
  /**
   * EAID_dst86942C_071B_473a_A6B0_58F649063AFC
   */
  husnummer?: string | null;
  /**
   * EAID_F8196C58_7115_48a6_9A1D_B49BC0F6289A.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
   */
  id_lokalId: string | null;
  /**
   * EAID_F8196C58_7115_48a6_9A1D_B49BC0F6289A.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
   */
  id_namespace?: string | null;
  /**
   * EAID_C95C717A_752C_4b17_B647_850738975CAC
   */
  kommunekode?: string | null;
  /**
   * EAID_7A7F26D9_D5AE_4158_A7FF_3E6EF0B228D8
   */
  registreringFra?: string | null;
  /**
   * EAID_B3CCBA6B_52B2_4ddc_A751_ABEA39D6EE6B
   */
  registreringsaktør?: string | null;
  /**
   * EAID_E718B937_950A_4ea1_BFA0_2AE9DB8C43AD
   */
  registreringTil?: string | null;
  /**
   * EAID_6FAA8A1A_5BCF_4950_B220_F4AFCA7F35E3
   */
  status?: string | null;
  /**
   * EAID_A351A366_2F30_4c3f_B086_7FAA59339C5D
   */
  virkningFra?: string | null;
  /**
   * EAID_59A458B1_5844_4fe3_95B1_C38AD3AAFAF4
   */
  virkningsaktør?: string | null;
  /**
   * EAID_47628A51_6589_4f1e_A19F_E9943A136AEC
   */
  virkningTil?: string | null;
  /**
   * EAID_0403CBB4_5EB6_441a_BF94_EC3CDA51A2B0
   */
  jordstykkeList?: string[] | null;
  /**
   * EAID_0E5C322B_0AA8_4005_B17E_F0397230EE7D
   */
  bestemtFastEjendom?: {
    datafordelerOpdateringstid?: DatafordelerOpdateringstid1;
    /**
     * EAID_DAEA052B_1881_496a_B35B_A7BE3B6B7586
     */
    bfeNummer?: number | null;
    /**
     * EAID_dst21CE45_7C49_4653_B220_8583C4941A98
     */
    bygningPåFremmedGrund?: string | null;
    /**
     * EAID_8B9A4700_4212_4dd6_95A3_A8FA2192AF4E
     */
    ejendommensEjerforholdskode?: string | null;
    /**
     * EAID_252012AE_E95C_4c9d_AB56_C5C763AC47DE
     */
    ejendomsnummer?: number | null;
    /**
     * EAID_9858CAD1_2FAA_4312_98DE_081D40EBC659
     */
    ejendomstype?: string | null;
    /**
     * EAID_dst549CF9_6E0F_428e_876D_664717D7B27A
     */
    ejerlejlighed?: string | null;
    /**
     * EAID_4B7C4E42_30D8_42cf_BF15_306AA4EA7F22
     */
    ejerlejlighedsnummer?: number | null;
    /**
     * EAID_50066AF4_06D9_4f3a_BAC2_5F83ABF0E335
     */
    forretningshændelse?: string | null;
    /**
     * EAID_C91552B7_18C0_4e28_8B06_F60332A8776B
     */
    forretningsområde?: string | null;
    /**
     * EAID_E4132152_7923_4533_8529_5E8D8C937656
     */
    forretningsproces?: string | null;
    /**
     * EAID_F8196C58_7115_48a6_9A1D_B49BC0F6289A.EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5
     */
    id_lokalId: string | null;
    /**
     * EAID_F8196C58_7115_48a6_9A1D_B49BC0F6289A.EAID_6CEB0356_5CBF_4159_B96B_A2489DD2DAC8
     */
    id_namespace?: string | null;
    /**
     * EAID_C95C717A_752C_4b17_B647_850738975CAC
     */
    kommunekode?: string | null;
    /**
     * EAID_7A7F26D9_D5AE_4158_A7FF_3E6EF0B228D8
     */
    registreringFra?: string | null;
    /**
     * EAID_B3CCBA6B_52B2_4ddc_A751_ABEA39D6EE6B
     */
    registreringsaktør?: string | null;
    /**
     * EAID_E718B937_950A_4ea1_BFA0_2AE9DB8C43AD
     */
    registreringTil?: string | null;
    /**
     * EAID_dstC65956_C726_418b_B8B5_F61903D9D8F8
     */
    samletFastEjendom?: string | null;
    /**
     * EAID_6FAA8A1A_5BCF_4950_B220_F4AFCA7F35E3
     */
    status?: string | null;
    /**
     * EAID_528134C9_8903_404d_968E_E13E09172A7B
     */
    tinglystAreal?: number | null;
    /**
     * EAID_A351A366_2F30_4c3f_B086_7FAA59339C5D
     */
    virkningFra?: string | null;
    /**
     * EAID_59A458B1_5844_4fe3_95B1_C38AD3AAFAF4
     */
    virkningsaktør?: string | null;
    /**
     * EAID_47628A51_6589_4f1e_A19F_E9943A136AEC
     */
    virkningTil?: string | null;
    /**
     * EAID_AEEAF515_0D26_4059_8DEC_DA61BD2A4EBD
     */
    vurderingsejendomsnummer?: number | null;
  };
}[];
