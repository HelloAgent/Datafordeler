/**
 * Kode der klassificerer ejeren af ejendommen
 *
 * Se mere på: [teknik.bbr.dk/kodelister](https://teknik.bbr.dk/kodelister/0/1/0/Ejerforholdskode)
 *
 * | Kode | Beskrivelse |
 * | ---- | ----------- |
 * | 10   | Privatpersoner, incl. I/S |
 * | 20   | Alment boligselskab |
 * | 30   | A/S, APS og andre selskaber |
 * | 40   | Forening, legat eller selvejende institution |
 * | 41   | Private andelsboligforeninger |
 * | 50   | Den kommune, hvori ejendommen er beliggende |
 * | 60   | Anden primærkommune |
 * | 70   | Region |
 * | 80   | Staten |
 * | 90   | Andre ejerforhold |
 * | 99   | Ikke beregnet |
 */
export type Ejerforholdskode =
  | '10'
  | '20'
  | '30'
  | '40'
  | '41'
  | '50'
  | '60'
  | '70'
  | '80'
  | '90'
  | '99';
