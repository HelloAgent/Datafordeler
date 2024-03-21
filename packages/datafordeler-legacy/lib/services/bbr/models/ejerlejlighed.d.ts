export interface Ejerlejlighed {
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
export interface EjerlejlighedListItem {
    id_lokalId: string | null;
    ejerlejlighed?: Ejerlejlighed;
}
export type EjerlejlighedList = EjerlejlighedListItem[];
