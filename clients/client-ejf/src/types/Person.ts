/**
 * Types based on schema: EJF_CPR_3.14_PersonSimpel.json
 */
import type { IdLokalId, Status } from '@datafordeler/types';

export type PersonStatus =
  | 'annulleret'
  | 'bopael_i_danmark'
  | 'bopael_i_danmark_hoej_vejkode'
  | 'bopael_i_groenland'
  | 'bopael_i_groenland_hoej_vejkode'
  | 'doed'
  | 'ej_bopael'
  | 'forsvundet'
  | 'nedlagt_person'
  | 'udrejst';

export interface Adresseoplysninger {
  adresseringsnavn?: string;
}

export interface Beskyttelse {
  Beskyttelse?: {
    beskyttelsestype:
      | 'lokal_vejviser'
      | 'markedsfoering'
      | 'navne_og_adresse'
      | 'kreditadvarsel';
  };
}

export interface CprAdresse {
  bygningsnummer?: string;
  bynavn?: string;
  cprKommunekode?: string;
  cprKommunenavn?: string;
  cprVejkode?: string;
  darAdresseId?: string;
  etage?: string;
  husnummer?: string;
  postdistrikt?: string;
  postnummer?: string;
  sidedoer?: string;
  vejadresseringsnavn?: string;
}

export interface Navn {
  /**
   * Sammensætning af fornavn og efternavn
   * @example 'Hansen, Marie Kirstine'
   */
  adresseringsnavn?: string;
}

export interface UdrejseIndrejse {
  Udenlandsadresse?: {
    adresselinie1?: string;
    adresselinie2?: string;
    adresselinie3?: string;
    adresselinie4?: string;
    adresselinie5?: string;
  };
  cprLandUdrejse?: string;
  cprLandekodeUdrejse?: string;
}

export interface PersonSimpel {
  Person: {
    /**
     * c/o adresseoplysninger
     */
    Adresseoplysninger?: Adresseoplysninger;

    /**
     * Oplysninger om beskyttelser på personen, f.eks. navne- og adressebeskyttelse
     */
    Beskyttelser?: Beskyttelse[];

    /**
     * Personens adresseoplysninger
     */
    CprAdresse?: CprAdresse;

    /**
     * Personens navn hvis tilgængeligt
     */
    Navn?: Navn;

    /**
     * Sammensat af: vejadresseringsnavn husnummer, etage, sidedoer bygningsnummer
     */
    Standardadresse?: string;

    /**
     * Oplysninger om udrejse/indrejse
     */
    UdrejseIndrejse?: UdrejseIndrejse;

    /**
     * Fødselsdato formatteret som ISO 8601
     * @example '1981-02-16T12:00:00.000000+02:00'
     */
    foedselsdato: string;

    /**
     * Usikkerhedsmarkering for fødselsdato
     */
    foedselsdatoUsikkerhedsmarkering: boolean;

    /**
     * Personens lokale ID
     */
    id: IdLokalId;

    /**
     * Personens køn
     */
    koen: 'mand' | 'kvinde';

    /**
     * Personens status
     */
    status: Status<PersonStatus>;

    /**
     * Status formatteret som ISO 8601
     * @example '1981-02-16T12:00:00.000000+02:00'
     */
    statusdato: string;

    /**
     * Usikkerhedsmarkering for statusdato
     */
    statusdatoUsikkerhedsmarkering: boolean;
  };
}
