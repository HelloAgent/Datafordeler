declare type DateTime = Date | string;
declare namespace Types {
    type id_lokalId = string;
    type id_namespace = string;
    type registreringsaktør = "";
    type registreringFra = DateTime;
    type virkningFra = DateTime;
    type datafordelerOpdateringstid = DateTime;
    type forretningshændelse = string;
    type forretningsområde = string;
    type forretningsproces = string;
    type virkningsaktør = string;
    type status = string;
}
export { Types };
