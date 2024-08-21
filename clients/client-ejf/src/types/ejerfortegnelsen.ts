import type {
  FeatureCollection,
  IdLokalId,
  Registreringstid,
  RegistreringstidFra,
  RegistreringstidTil,
  Virkningstid,
  VirkningstidFra,
  VirkningstidTil,
} from '@datafordeler/types';

import type {
  Ejendomsadministrator,
  Status,
} from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';
import type { Ejerskab } from './generated/EJF_3.14_ejerskabmedstamoplysninger';
import type { Ejerskabsskifte as Ejerskabsskifte_ } from './generated/EJF_3.14_ejerskabsskifte';
import type { Ejerskifte as Ejerskifte_ } from './generated/EJF_3.15_ejerskifte';

export type {
  Forretningshaendelse,
  Forretningsproces,
} from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';

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
  Ejerskabsskifte_['features'][0]['properties']
>;

export type EjerskabsskifteRequest = {
  /**
   * Lokal id for et ejerskabsskifte
   */
  EjerskabsskifteId?: IdLokalId;
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidTil;
  Registreringstid?: Registreringstid;
  VirkningstidFra?: VirkningstidFra;
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

/**
 * Ejerskifte
 */
export type Ejerskifte = NonNullable<Ejerskifte_['features'][0]['properties']>;
export type EjerskifteRequest = {
  BFEnr?: string;
  EjerskifteId?: IdLokalId;
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidTil;
  Registreringstid?: Registreringstid;
  VirkningstidFra?: VirkningstidFra;
  VirkningstidTil?: VirkningstidTil;
  Virkningstid?: Virkningstid;
  Status?: Status;
};
export type EjerskifteResponse = FeatureCollection<Ejerskifte>;
