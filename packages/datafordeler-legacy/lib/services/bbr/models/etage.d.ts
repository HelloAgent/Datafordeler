export interface Etage {
    datafordelerOpdateringstid?: string;
    bygning?: string | null;
    eta006BygningensEtagebetegnelse?: string | null;
    eta020SamletArealAfEtage?: number | null;
    eta021ArealAfUdnyttetDelAfTagetage?: number | null;
    eta022Kælderareal?: number | null;
    eta023ArealAfLovligBeboelseIKælder?: number | null;
    eta024EtagensAdgangsareal?: number | null;
    eta025Etagetype?: string | null;
    eta026ErhvervIKælder?: number | null;
    eta500Notatlinjer?: string | null;
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
export interface EtageListItem {
    id_lokalId: string | null;
    etage?: Etage;
}
export declare type EtageList = EtageListItem[];
