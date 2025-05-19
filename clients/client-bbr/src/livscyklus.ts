/**
 * Livscyklus repræsenterer stadier i et bbr objekts livsforløb.
 *
 * https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
 */
export class Livscyklus {
  public readonly livscyklus_code: string;

  public static readonly Start = new Livscyklus('1');
  public static readonly Projekteret = new Livscyklus('2');
  public static readonly UnderOpfoerelse = new Livscyklus('3');
  public static readonly Sagsgrund = new Livscyklus('4');
  public static readonly Oprettet = new Livscyklus('5');
  public static readonly Opfoert = new Livscyklus('6');
  public static readonly Gaeldende = new Livscyklus('7');
  public static readonly Godkendt = new Livscyklus('8');
  public static readonly Afsluttet = new Livscyklus('9');
  public static readonly Historisk = new Livscyklus('10');
  public static readonly Fejlregistreret = new Livscyklus('11');
  public static readonly MidlertidigAfsluttet = new Livscyklus('12');
  public static readonly DelvisAfsluttet = new Livscyklus('13');
  public static readonly Henlagt = new Livscyklus('14');
  public static readonly Modtaget = new Livscyklus('15');
  public static readonly UnderBehandling = new Livscyklus('16');
  public static readonly Fejl = new Livscyklus('17');
  public static readonly Udført = new Livscyklus('18');
  public static readonly Foreloebig = new Livscyklus('19');
  public static readonly BomSagModtaget = new Livscyklus('20');
  public static readonly BomSagUnderBehandling = new Livscyklus('21');
  public static readonly BomSagFejl = new Livscyklus('22');
  public static readonly BomSagUdført = new Livscyklus('23');

  private constructor(livscyklus_code: string) {
    this.livscyklus_code = livscyklus_code;
  }
}
