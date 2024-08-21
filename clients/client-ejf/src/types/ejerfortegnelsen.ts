import type {
  ExtractProperties,
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
  Ejendomsadministrator as Ejendomsadministrator_,
  Status,
} from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';
import type { Ejerskab as Ejerskab_ } from './generated/EJF_3.14_ejerskabmedstamoplysninger';
import type { Ejerskabsskifte as Ejerskabsskifte_ } from './generated/EJF_3.14_ejerskabsskifte';
import type { Handelsoplysninger as Handelsoplysninger_ } from './generated/EJF_3.14_handelsoplysning';
import type { PersonEllerVirksomhedsoplysning as PersonEllerVirksomhedsoplysning_ } from './generated/EJF_3.14_personellervirksomhedsoplysning';
import type { Ejerskifte as Ejerskifte_ } from './generated/EJF_3.15_ejerskifte';

/**
 * EjendomsadministratorMedStamoplysninger
 */
export type EjendomsadministratorMedStamoplysninger =
  ExtractProperties<Ejendomsadministrator_>;

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
export type EjerskabMedStamoplysninger = ExtractProperties<Ejerskab_>;
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
export type Ejerskabsskifte = ExtractProperties<Ejerskabsskifte_>;
export type EjerskabsskifteRequest = {
  EjerskabsskifteId?: IdLokalId;
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidTil;
  Registreringstid?: Registreringstid;
  VirkningstidFra?: VirkningstidFra;
  VirkningstidTil?: VirkningstidTil;
  Virkningstid?: Virkningstid;
  Status?: Status;
};

export type EjerskabsskifteResponse = FeatureCollection<Ejerskabsskifte>;

/**
 * Ejerskifte
 */
export type Ejerskifte = ExtractProperties<Ejerskifte_>;
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

/**
 * Handelsoplysninger
 */
export type Handelsoplysninger = ExtractProperties<Handelsoplysninger_>;
export type HandelsoplysningerRequest = {
  BFEnr?: string;
  HandelsOplysningsId?: string;
  Registreringstid?: Registreringstid;
  VirkningstidTil?: VirkningstidTil;
  Status?: Status;
};

export type HandelsoplysningerResponse = FeatureCollection<Handelsoplysninger>;

/**
 * PersonEllerVirksomhedsoplysning
 */
export type PersonEllerVirksomhedsoplysning =
  ExtractProperties<PersonEllerVirksomhedsoplysning_>;

export type PersonEllerVirksomhedsoplysningRequest = {
  PVOId?: string;
  FiktivtPVnummer?: string;
  Registreringstid?: Registreringstid;
  VirkningstidTil?: VirkningstidTil;
  Status?: Status;
};

export type PersonEllerVirksomhedsoplysningResponse =
  FeatureCollection<PersonEllerVirksomhedsoplysning>;
