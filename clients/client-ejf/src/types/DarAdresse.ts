import type {
  Forretningshaendelse,
  Forretningsomraade,
  Forretningsproces,
  IdLokalId,
  IdNamespace,
  RegistreringFra,
  RegistreringTil,
  Status,
  VirkningFra,
  VirkningTil,
} from '@datafordeler/types';

export interface Adresse {
  forretningshændelse: Forretningshaendelse;
  forretningsområde: Forretningsomraade;
  forretningsproces: Forretningsproces;
  id_namespace: IdNamespace;
  id_lokalId: IdLokalId;
  registreringFra: RegistreringFra;
  registreringsaktør: string;
  registreringTil?: RegistreringTil;
  status: Status;
  virkningFra: VirkningFra;
  virkningsaktør: string;
  virkningTil?: VirkningTil;
  adressebetegnelse: string;
}

export interface DARadresse {
  entityType: 'Adresse';
  attributes: Adresse;
}
