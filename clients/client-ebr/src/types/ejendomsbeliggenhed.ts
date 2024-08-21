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
  BFEnrAdresse as BFEnrAdresse_,
  Status,
} from './generated/EBR_2.9.1_BFEnrAdresse';

/**
 * BFEnrAdresse
 */
export type BFEnrAdresse = ExtractProperties<BFEnrAdresse_>;
export type BFEnrAdresseRequest = {
  AdresseId?: IdLokalId;
  HusnummerId?: IdLokalId;
  Registreringstid?: Registreringstid;
  Virkningstid?: Virkningstid;
  Status?: Status;
};
export type BFEnrAdresseResponse = FeatureCollection<BFEnrAdresse>;
