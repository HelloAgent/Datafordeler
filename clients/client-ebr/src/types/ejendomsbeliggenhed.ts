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
import type { Ejendomsbeliggenhed as Ejendomsbeliggenhed_ } from './generated/EBR_2.9.1_ejendomsbeliggenhedDownload';
import type { Ejendomsbeliggenhed as EjendomsbeliggenhedSimpel_ } from './generated/EBR_2.9.1_ejendomsbeliggenhedSimpelDownload';

export type {
  Adresse,
  Husnummer,
} from './generated/EBR_2.9.1_ejendomsbeliggenhedDownload';

/**
 * BFEnrAdresse
 */
export type BFEnrAdresse = ExtractProperties<BFEnrAdresse_>;
export type BFEnrAdresseRequest = {
  /**
   * One or more adresse id_lokalIds.
   */
  AdresseId?: IdLokalId | IdLokalId[];

  /**
   * One or more husnummer id_lokalIds.
   */
  HusnummerId?: IdLokalId | IdLokalId[];
  Registreringstid?: Registreringstid;
  Virkningstid?: Virkningstid;
  Status?: Status;
};
export type BFEnrAdresseResponse = FeatureCollection<BFEnrAdresse>;

/**
 * Ejendomsbeliggenhed
 */
export type Ejendomsbeliggenhed = ExtractProperties<Ejendomsbeliggenhed_>;

export type EjendomsbeliggenhedRequest = {
  /**
   * One or more ejendomsbeliggenhed id_lokalIds.
   */
  EBId?: IdLokalId | IdLokalId[];

  /**
   * One or more BFE numbers.
   */
  BFEnr?: number | number[];
  Registreringstid?: Registreringstid;
  Virkningstid?: Virkningstid;
  Status?: Status;
};
export type EjendomsbeliggenhedResponse =
  FeatureCollection<Ejendomsbeliggenhed>;

/**
 * EjendomsbeliggenhedSimpel
 */
export type EjendomsbeliggenhedSimpel =
  ExtractProperties<EjendomsbeliggenhedSimpel_>;
export type EjendomsbeliggenhedSimpelRequest = {
  /**
   * One or more ejendomsbeliggenhed id_lokalIds.
   */
  EBId?: IdLokalId | IdLokalId[];

  /**
   * One or more BFE numbers.
   */
  BFEnr?: number | number[];
  RegistreringstidFra?: RegistreringstidFra;
  RegistreringstidTil?: RegistreringstidTil;
  VirkningstidFra?: VirkningstidFra;
  VirkningstidTil?: VirkningstidTil;
  Registreringstid?: Registreringstid;
  Virkningstid?: Virkningstid;
  Status?: Status;
};
export type EjendomsbeliggenhedSimpelResponse =
  FeatureCollection<EjendomsbeliggenhedSimpel>;
