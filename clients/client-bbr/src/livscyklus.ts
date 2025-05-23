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
   *
   * Benyttet af: `ejendomsrelation`
   */
  public static readonly Start = new Livscyklus('1');

  /**
   * Livscyklus svarende til koden "2"
   *
   * Benyttet af: `bygning`, `enhed`, `grund`, `teknisk anlæg`, `opgang`, `etage`
   */
  public static readonly Projekteret = new Livscyklus('2');

  /**
   * Livscyklus svarende til koden "3"
   *
   * Benyttet af: `bygning`, `enhed`, `grund`, `teknisk anlæg`, `opgang`, `etage`
   */
  public static readonly UnderOpførelse = new Livscyklus('3');

  /**
   * Livscyklus svarende til koden "4"
   *
   * Benyttet af: `grund`
   */
  public static readonly Sagsgrund = new Livscyklus('4');

  /**
   * Livscyklus svarende til koden "5"
   *
   * Benyttet af: `bbrsag`
   */
  public static readonly Oprettet = new Livscyklus('5');

  /**
   * Livscyklus svarende til koden "6"
   *
   * Benyttet af: `bygning`, `enhed`, `teknisk anlæg`, `fordelingsareal`, `opgang`, `etage`
   */
  public static readonly Opført = new Livscyklus('6');

  /**
   * Livscyklus svarende til koden "7"
   *
   * Benyttet af: `ejendomsrelation`, `grund`
   */
  public static readonly Gældende = new Livscyklus('7');

  /**
   * Livscyklus svarende til koden "8"
   *
   * Benyttet af: `fordelingsareal`
   */
  public static readonly Godkendt = new Livscyklus('8');

  /**
   * Livscyklus svarende til koden "9"
   *
   * Benyttet af: `bbrsag`, `bygning`, `enhed`, `grund`, `teknisk anlæg`, `opgang`, `etage`
   */
  public static readonly Afsluttet = new Livscyklus('9');

  /**
   * Livscyklus svarende til koden "10"
   *
   * Benyttet af: `ejendomsrelation`, `enhed`, `grund`, `teknisk anlæg`, `fordelingsareal`, `opgang`, `etage`
   */
  public static readonly Historisk = new Livscyklus('10');

  /**
   * Livscyklus svarende til koden "11"
   *
   * Benyttet af: `bbrsag`, `bygning`, `ejendomsrelation`, `enhed`, `grund`, `teknisk anlæg`, `fordelingsareal`, `opgang`, `etage`
   */
  public static readonly Fejlregistreret = new Livscyklus('11');

  /**
   * Livscyklus svarende til koden "12"
   *
   * Benyttet af: `bbrsag`, `bygning`, `teknisk anlæg`
   */
  public static readonly MidlertidigAfsluttet = new Livscyklus('12');

  /**
   * Livscyklus svarende til koden "13"
   *
   * Benyttet af: `bbrsag`, `bygning`
   */
  public static readonly DelvisAfsluttet = new Livscyklus('13');

  /**
   * Livscyklus svarende til koden "14"
   *
   * Benyttet af: `bbrsag`, `bygning`, `enhed`, `grund`, `teknisk anlæg`, `opgang`, `etage`
   */
  public static readonly Henlagt = new Livscyklus('14');

  /**
   * Livscyklus svarende til koden "15"
   */
  public static readonly Modtaget = new Livscyklus('15');

  /**
   * Livscyklus svarende til koden "16"
   */
  public static readonly UnderBehandling = new Livscyklus('16');

  /**
   * Livscyklus svarende til koden "17"
   */
  public static readonly Fejl = new Livscyklus('17');

  /**
   * Livscyklus svarende til koden "18"
   */
  public static readonly Udført = new Livscyklus('18');

  /**
   * Livscyklus svarende til koden "19"
   * Benyttet af: grund
   */
  public static readonly Foreløbig = new Livscyklus('19');

  /**
   * Livscyklus svarende til koden "20"
   */
  public static readonly BomSagModtaget = new Livscyklus('20');

  /**
   * Livscyklus svarende til koden "21"
   */
  public static readonly BomSagUnderBehandling = new Livscyklus('21');

  /**
   * Livscyklus svarende til koden "22"
   */
  public static readonly BomSagFejl = new Livscyklus('22');

  /**
   * Livscyklus svarende til koden "23"
   */
  public static readonly BomSagUdført = new Livscyklus('23');

  private constructor(livscyklus_code: string) {
    this.livscyklus_code = livscyklus_code;
  }
}
