import { Types } from "../sharedTypes";
export type Id = string;
export type Bygning = string;
type addressId = Types.id_lokalId;
export declare namespace adresse {
    interface request {
    }
    interface response {
    }
}
export interface adresseRequest {
    Id?: addressId;
    VirkningFra?: string;
    VirkningTil?: string;
    Virkningsaktoer?: string;
    RegistreringFra?: string;
    RegistreringTil?: string;
    Registreringsaktoer?: string;
    Status?: string;
    Forretningsproces?: string;
    Forretningsomraade?: string;
    Forretningshaendelse?: string;
    MedDybde?: string;
    DAFTimestampFra?: string;
    DAFTimestampTil?: string;
    Husnummer?: string;
    Bygning?: Bygning;
    NavngivenVej?: string;
    NavngivenVejKommunedel?: string;
    Kommunekode?: string;
    Vejkode?: string;
    Nord?: string;
    Syd?: string;
    Oest?: string;
    Vest?: string;
}
export interface Postnummer {
    datafordelerOpdateringstid: string;
    forretningshændelse: string;
    forretningsområde: string;
    forretningsproces: string;
    id_lokalId: string;
    id_namespace: string;
    navn: string;
    postnr: string;
    postnummerinddeling: string;
    registreringFra: string;
    registreringsaktør: string;
    status: string;
    virkningFra: string;
    virkningsaktør: string;
}
export interface Husnummer {
    datafordelerOpdateringstid: string;
    adgangsadressebetegnelse: string;
    adgangTilBygning: string;
    afstemningsområde: {
        id: string;
        afstemningsområdenummer: string;
        navn: string;
    };
    forretningshændelse: string;
    forretningsområde: string;
    forretningsproces: string;
    geoDanmarkBygning: string;
    husnummerretning: string;
    husnummertekst: string;
    id_lokalId: string;
    id_namespace: string;
    jordstykke: string;
    kommuneinddeling: {
        id: string;
        kommunekode: string;
        navn: string;
    };
    registreringFra: string;
    registreringsaktør: string;
    sogneinddeling: {
        id: string;
        sognekode: string;
        navn: string;
    };
    status: string;
    vejmidte: string;
    virkningFra: string;
    virkningsaktør: string;
    adgangspunkt: {
        datafordelerOpdateringstid: string;
        oprindelse_kilde: string;
        oprindelse_nøjagtighedsklasse: string;
        oprindelse_registrering: string;
        oprindelse_tekniskStandard: string;
        position: string;
    };
    vejpunkt: {
        datafordelerOpdateringstid: string;
        oprindelse_kilde: string;
        oprindelse_nøjagtighedsklasse: string;
        oprindelse_registrering: string;
        oprindelse_tekniskStandard: string;
        position: string;
    };
    navngivenVej: {
        datafordelerOpdateringstid: string;
        administreresAfKommune: string;
        forretningshændelse: string;
        forretningsområde: string;
        forretningsproces: string;
        id_lokalId: string;
        id_namespace: string;
        registreringFra: string;
        registreringsaktør: string;
        status: string;
        udtaltVejnavn: string;
        vejadresseringsnavn: string;
        vejnavn: string;
        vejnavnebeliggenhed_oprindelse_kilde: string;
        vejnavnebeliggenhed_oprindelse_nøjagtighedsklasse: string;
        vejnavnebeliggenhed_oprindelse_registrering: string;
        vejnavnebeliggenhed_oprindelse_tekniskStandard: string;
        vejnavnebeliggenhed_vejnavnelinje: string;
        virkningFra: string;
        virkningsaktør: string;
        navngivenVejKommunedelList: [
            {
                id_lokalId: string;
                navngivenVejKommunedel: {
                    datafordelerOpdateringstid: string;
                    forretningshændelse: string;
                    forretningsområde: string;
                    forretningsproces: string;
                    id_lokalId: string;
                    id_namespace: string;
                    kommune: string;
                    navngivenVej: string;
                    registreringFra: string;
                    registreringsaktør: string;
                    status: string;
                    vejkode: string;
                    virkningFra: string;
                    virkningsaktør: string;
                };
            }
        ];
    };
    postnummer: Postnummer;
}
export interface adresseResponse {
    datafordelerOpdateringstid: string;
    adressebetegnelse: string;
    dørbetegnelse: string;
    etagebetegnelse: string;
    forretningshændelse: string;
    forretningsområde: string;
    forretningsproces: string;
    id_lokalId: string;
    id_namespace: string;
    registreringFra: string;
    registreringsaktør: string;
    status: string;
    virkningFra: string;
    virkningsaktør: string;
    husnummer: Husnummer;
}
export {};
