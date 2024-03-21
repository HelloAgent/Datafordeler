export interface Opgang {
    datafordelerOpdateringstid?: string;
    adgangFraHusnummer?: string | null;
    bygning?: string | null;
    forretningshændelse?: string | null;
    forretningsområde?: string | null;
    forretningsproces?: string | null;
    id_lokalId?: string | null;
    id_namespace?: string | null;
    kommunekode?: string | null;
    opg020Elevator?: string | null;
    opg021HusnummerFunktion?: string | null;
    opg500Notatlinjer?: string | null;
    registreringFra?: string | null;
    registreringsaktør?: string | null;
    registreringTil?: string | null;
    status?: string | null;
    virkningFra?: string | null;
    virkningsaktør?: string | null;
    virkningTil?: string | null;
}
export interface OpgangListItem {
    id_lokalId: string | null;
    opgang?: Opgang;
}
export declare type OpgangList = OpgangListItem[];
