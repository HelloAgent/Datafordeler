type DateTime = Date | string;

declare namespace Types {
  export type id_lokalId = string;
  export type id_namespace = string;
  export type registreringsaktør = ''; //DAR?? BFE??

  export type registreringFra = DateTime;
  export type virkningFra = DateTime;

  export type datafordelerOpdateringstid = DateTime;
  export type forretningshændelse = string;
  export type forretningsområde = string;
  export type forretningsproces = string;
  export type virkningsaktør = string;
  export type status = string; //| "3";
}

export { Types };
