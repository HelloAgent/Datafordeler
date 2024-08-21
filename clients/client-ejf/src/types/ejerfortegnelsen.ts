import type {
  FeatureCollection,
  IdLokalId,
  Registreringstid,
  RegistreringstidFra,
  RegistreringstidTil,
  Virkningstid,
  VirkningstidTil,
} from '@datafordeler/types';

import type {
  Ejendomsadministrator,
  Status,
} from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';
import type { Ejerskab } from './generated/EJF_3.14_ejerskabmedstamoplysninger';
import type { Ejerskabsskifte as RefEjerskabsskifte } from './generated/EJF_3.14_ejerskabsskifte';

export type { Forretningshaendelse } from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';

/**
 * EjendomsadministratorMedStamoplysninger
 */
export type EjendomsadministratorMedStamoplysninger = NonNullable<
  Ejendomsadministrator['features'][0]['properties']
>;

export type EjendomsadministratorMedStamoplysningerRequest = {
  BFEnr?: string;
  Virkningstid?: Virkningstid;
  Status?: Status;
};

export type EjendomsadministratorMedStamoplysningerResponse =
  FeatureCollection<EjendomsadministratorMedStamoplysninger>;

/**
 * EjerskabMedStamoplysninger
 */
export type EjerskabMedStamoplysninger = NonNullable<
  Ejerskab['features'][0]['properties']
>;

export type EjerskabMedStamoplysningerRequest = {
  BFEnr?: string;
  Ejerskabsid?: IdLokalId;
  Virkningstid?: Virkningstid;
  Status?: Status;
};

export type EjerskabMedStamoplysningerResponse =
  FeatureCollection<EjerskabMedStamoplysninger>;

/**
 *  Ejerskabsskifte
 */
export type Ejerskabsskifte = NonNullable<
  RefEjerskabsskifte['features'][0]['properties']
>;

export type EjerskabsskifteRequest = {
  /**
   * Lokal id for et ejerskabsskifte
   */
  EjerskabsskifteId?: IdLokalId;
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidTil;
  Registreringstid?: Registreringstid;
  VirkningstidTil?: VirkningstidTil;
  Virkningstid?: Virkningstid;

  /**
   * Status jf. grunddatamodellens udfaldsrum for Ejerfortegnelsestatus
   * @example gældende
   * @default null
   */
  Status?: Status;
};

export type EjerskabsskifteResponse = FeatureCollection<Ejerskabsskifte>;
