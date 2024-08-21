import type { Virkningstid } from '@datafordeler/types';

import type {
  Ejendomsadministrator,
  Status,
} from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';
import type { Ejerskab } from './generated/EJF_3.14_ejerskabmedstamoplysninger';

export type { Forretningshaendelse } from './generated/EJF_3.14_ejendomsadministratormedstamoplysninger';

/**
 * Ejendomsadministrator med stamoplysninger
 */

// Rename and structure the exports for easier consumption
export type EjendomsadministratorMedStamoplysninger =
  Ejendomsadministrator['features'][0]['properties'];

export type EjendomsadministratorMedStamoplysningerRequest = {
  BFEnr?: string;
  Virkningstid?: Virkningstid;
  Status?: Status;
};

export type EjendomsadministratorMedStamoplysningerResponse =
  Ejendomsadministrator;

/**
 * EjerskabMedStamoplysninger
 */
export type EjerskabMedStamoplysninger = Ejerskab['features'][0]['properties'];
