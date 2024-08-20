// Types based on schema: EJF_CVR_3.14_VirksomhedSimpel.json
import type {
  RegistreringFra,
  RegistreringTil,
  Registreringsaktoer,
  Status,
  VirkningFra,
  VirkningTil,
  Virkningsaktoer,
} from '@datafordeler/types';

export interface BeliggenhedsAdresse {
  /**
   * Vejkode formatteret som tekst
   * @example "1164"
   */
  'CVRAdresse.vejkode': string;

  /**
   * Husnummer fra
   * @example "7"
   */
  'CVRAdresse.husnummerFra': string;

  /**
   * Etagebetegnelse
   * @example "1"
   */
  'CVRAdresse.etagebetegnelse': string;

  /**
   * Dørbetegnelse
   * @example "tv"
   */
  'CVRAdresse.doerbetegnelse': string;

  /**
   * Kommunekode formatteret med 3 cifre
   * @example "173"
   */
  'CVRAdresse.kommunekode': string;

  /**
   * Kommunenavn formatteret i uppercase
   * @example "KØBENHAVN"
   */
  'CVRAdresse.kommunenavn': string;

  /**
   * Postdistrikt
   * @example "Vrå"
   */
  'CVRAdresse.postdistrikt': string;

  /**
   * Vejnavn
   * @example "Hovedgaden"
   */
  'CVRAdresse.vejnavn': string;

  /**
   * Husnummer til
   * @example "9"
   */
  'CVRAdresse.husnummerTil': string;

  /**
   * Postnummer
   * @example "2830"
   */
  'CVRAdresse.postnummer': string;

  /**
   * Supplerende bynavn
   * @example "Mogenstrup"
   */
  'CVRAdresse.supplerendeBynavn': string;

  /**
   * Fritekst adresse
   */
  'CVRAdresse.adresseFritekst': string;

  /**
   * landekode
   * @example "DK"
   */
  'CVRAdresse.landekode': string;

  /**
   * co/navn ved addressering til virksomheden
   * @example "KAB"
   */
  coNavn: string;
}

export interface BaseAttributes {
  /**
   * Tidspunktet for objektets registrering
   */
  registreringFra: RegistreringFra;

  /**
   * Registreringsaktøer
   * @example "ERST"
   */
  registreringsaktoer: Registreringsaktoer;

  /**
   * Tidspunktet hvor en ny registrering er foretaget på objektet, og hvor denne version ikke længere er den seneste
   */
  registreringTil?: RegistreringTil;

  /**
   * Status for virksomheden
   */
  status: Status<'aktiv' | 'inaktiv'>;

  /**
   * Tidspunktet hvor objektets virkning starter
   */
  virkningFra: VirkningFra;

  /**
   * Virkningsaktøer
   * @example "ERST"
   */
  virkningsaktoer: Virkningsaktoer;

  /**
   * Tidspunktet hvor objektets virkning ophører
   */
  virkningTil?: VirkningTil;

  /**
   * Markering af reklamebeskyttelse i CVR register
   */
  reklamebeskyttelse: boolean;

  /**
   * Virksomhedens navn
   */
  navn: string;

  /**
   * Virksomhedens beliggenhedsadresse
   */
  beliggenhedsadresse: Partial<BeliggenhedsAdresse>;
}

export interface VirksomhedAttributes extends BaseAttributes {
  /**
   * Virksomhedens CVR nummer
   */
  CVRNummer: number;
}

export interface ProduktionenhedAttributes extends BaseAttributes {
  /**
   * Produktionsenhedens P-nummer
   */
  pNummer: number;
}

/**
 * CVR Virksomhed
 */
export interface VirksomhedSimpel {
  entityType: 'Virksomhed';
  attributes: VirksomhedAttributes;
}

/**
 * CVR Produktionenhed
 */
export interface ProduktionsenhedSimpel {
  entityType: 'Produktionsenhed';
  attributes: ProduktionenhedAttributes;
}
