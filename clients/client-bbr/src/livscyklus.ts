/**
 * Livscyklus repræsenterer stadier i et bbr objekts livsforløb.
 *
 * https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
 *
 * Ikke alle objekter har alle livscyklus stadier. Information om hvilke stadier
 * der er relevante for et givent objekt kan findes i BBR's informationsmodel her: https://bbr.dk/file/665192/bbr-informationsmodel.pdf
 */
export class Livscyklus {
  public readonly livscyklus_code: string;

  /**
   * Livscyklus svarende til koden "1"
   */
  public static readonly Start = new Livscyklus('1');

  /**
   * Livscyklus svarende til koden "2"
   */
  public static readonly Projekteret = new Livscyklus('2');

  /**
   * Livscyklus svarende til koden "3"
   */
  public static readonly UnderOpførelse = new Livscyklus('3');

  /**
   * Livscyklus svarende til koden "4"
   */
  public static readonly Sagsgrund = new Livscyklus('4');

  /**
   * Livscyklus svarende til koden "5"
   */
  public static readonly Oprettet = new Livscyklus('5');

  /**
   * Livscyklus svarende til koden "6"
   */
  public static readonly Opført = new Livscyklus('6');

  /**
   * Livscyklus svarende til koden "7"
   */
  public static readonly Gældende = new Livscyklus('7');

  /**
   * Livscyklus svarende til koden "8"
   */
  public static readonly Godkendt = new Livscyklus('8');

  /**
   * Livscyklus svarende til koden "9"
   */
  public static readonly Afsluttet = new Livscyklus('9');

  /**
   * Livscyklus svarende til koden 1"0"
   */
  public static readonly Historisk = new Livscyklus('10');

  /**
   * Livscyklus svarende til koden 1"1"
   */
  public static readonly Fejlregistreret = new Livscyklus('11');

  /**
   * Livscyklus svarende til koden 1"2"
   */
  public static readonly MidlertidigAfsluttet = new Livscyklus('12');

  /**
   * Livscyklus svarende til koden 1"3"
   */
  public static readonly DelvisAfsluttet = new Livscyklus('13');

  /**
   * Livscyklus svarende til koden 1"4"
   */
  public static readonly Henlagt = new Livscyklus('14');

  /**
   * Livscyklus svarende til koden 1"5"
   */
  public static readonly Modtaget = new Livscyklus('15');

  /**
   * Livscyklus svarende til koden 1"6"
   */
  public static readonly UnderBehandling = new Livscyklus('16');

  /**
   * Livscyklus svarende til koden 1"7"
   */
  public static readonly Fejl = new Livscyklus('17');

  /**
   * Livscyklus svarende til koden 1"8"
   */
  public static readonly Udført = new Livscyklus('18');

  /**
   * Livscyklus svarende til koden 1"9"
   */
  public static readonly Foreløbig = new Livscyklus('19');

  /**
   * Livscyklus svarende til koden 2"0"
   */
  public static readonly BomSagModtaget = new Livscyklus('20');

  /**
   * Livscyklus svarende til koden 2"1"
   */
  public static readonly BomSagUnderBehandling = new Livscyklus('21');

  /**
   * Livscyklus svarende til koden 2"2"
   */
  public static readonly BomSagFejl = new Livscyklus('22');

  /**
   * Livscyklus svarende til koden 2"3"
   */
  public static readonly BomSagUdført = new Livscyklus('23');

  private constructor(livscyklus_code: string) {
    this.livscyklus_code = livscyklus_code;
  }
}
