export interface Fordelingsareal {
    datafordelerOpdateringstid?: string;
    bygning?: string | null;
    for002Fordelingsarealnummer?: number | null;
    for003ArealTilFordeling?: number | null;
    for004FordelingsNøgle?: string | null;
    for005Navn?: string | null;
    for006Rest?: number | null;
    for500Notatlinjer?: string | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    status?: string | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
}
export interface FordelingsarealListItem {
    id_lokalId: string | null;
    fordelingsareal?: Fordelingsareal;
}
export type FordelingsarealList = FordelingsarealListItem[];
