import { beforeEach, describe, expect, it } from 'vitest';

import { BBR } from '../../src/BBRClient';
import { Livscyklus } from '../../src/livscyklus';

const CERT_PATH = process.env.CERT_PATH as string;
const CERT_PASSPHRASE = process.env.CERT_PASSPHRASE as string;

describe('BBR', () => {
  let bbrWithAgent: BBR;

  beforeEach(() => {
    bbrWithAgent = new BBR({
      agentConfig: { passphrase: CERT_PASSPHRASE, localFilePath: CERT_PATH },
    });
  });

  it('should get a bbr sag with depth', async () => {
    const res = await bbrWithAgent.BBRSag({
      Id: '9b1d2d6e-3e3e-4479-9869-64c72d666bf2',
      MedDybde: true,
      Status: Livscyklus.Afsluttet,
    });

    expect(res).toBeDefined();
    expect(res).toHaveLength(1);
    expect(res[0]?.sagsniveauList?.[0]?.sagsniveau).toBeDefined();
    expect(res[0]?.sagsniveauList?.[0]).toHaveProperty('id_lokalid'); // This is a bug in the api response as the value should be id_lokalId
    expect(res[0]?.sagsniveauList?.[0]).toHaveProperty('sagsniveau');
  });

  it('should get a bbr sag without depth', async () => {
    const res = await bbrWithAgent.BBRSag({
      Id: '9b1d2d6e-3e3e-4479-9869-64c72d666bf2',
      MedDybde: false,
      Status: [Livscyklus.Afsluttet, Livscyklus.Gældende],
    });

    expect(res).toBeDefined();
    expect(res[0]?.sagsniveauList?.[0]).toBeDefined();
    expect(res[0]?.sagsniveauList?.[0]).toHaveProperty('id_lokalid'); // This is a bug in the api response as the value should be id_lokalId
    expect(res[0]?.sagsniveauList?.[0]).not.toHaveProperty('sagsniveau');
  });

  it('should get a bbr bygning with depth', async () => {
    const res = await bbrWithAgent.Bygning({
      Id: '1c82f43d-7008-4447-b67e-044299ae294d',
      Status: Livscyklus.Opført,
    });

    expect(res).toBeDefined();
    expect(res).toHaveLength(1);

    // etagelist
    expect(res[0]?.etageList).toHaveLength(5);
    expect(res[0]?.etageList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.etageList?.[0]).toHaveProperty('etage');

    // opganglist
    expect(res[0]?.opgangList).toHaveLength(2);
    expect(res[0]?.opgangList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.opgangList?.[0]).toHaveProperty('opgang');
  });

  it('should get a bbr bygning without depth', async () => {
    const res = await bbrWithAgent.Bygning({
      Id: '1c82f43d-7008-4447-b67e-044299ae294d',
      MedDybde: false,
    });

    expect(res).toBeDefined();
    expect(res).toHaveLength(1);
    expect(res[0]).toHaveProperty('datafordelerOpdateringstid');
    expect(res[0]).toHaveProperty('byg007Bygningsnummer');
    expect(res[0]).toHaveProperty('byg021BygningensAnvendelse');
    expect(res[0]).toHaveProperty('byg026Opførelsesår');
    expect(res[0]).toHaveProperty('byg032YdervæggensMateriale');
    expect(res[0]).toHaveProperty('byg033Tagdækningsmateriale');
    expect(res[0]).toHaveProperty('byg037KildeTilBygningensMaterialer');
    expect(res[0]).toHaveProperty('byg038SamletBygningsareal');
    expect(res[0]).toHaveProperty('byg040BygningensSamledeErhvervsAreal');
    expect(res[0]).toHaveProperty('byg041BebyggetAreal');
    expect(res[0]).toHaveProperty('byg053BygningsarealerKilde');
    expect(res[0]).toHaveProperty('byg054AntalEtager');
    expect(res[0]).toHaveProperty('byg055AfvigendeEtager');
    expect(res[0]).toHaveProperty('byg056Varmeinstallation');
    expect(res[0]).toHaveProperty('byg058SupplerendeVarme');
    expect(res[0]).toHaveProperty('byg070Fredning');
    expect(res[0]).toHaveProperty('byg094Revisionsdato');
    expect(res[0]).toHaveProperty('byg133KildeTilKoordinatsæt');
    expect(res[0]).toHaveProperty('byg134KvalitetAfKoordinatsæt');
    expect(res[0]).toHaveProperty('byg135SupplerendeOplysningOmKoordinatsæt');
    expect(res[0]).toHaveProperty('byg136PlaceringPåSøterritorie');
    expect(res[0]).toHaveProperty('byg404Koordinat');
    expect(res[0]).toHaveProperty('byg406Koordinatsystem');
    expect(res[0]).toHaveProperty('forretningshændelse');
    expect(res[0]).toHaveProperty('forretningsområde');
    expect(res[0]).toHaveProperty('forretningsproces');
    expect(res[0]).toHaveProperty('grund');
    expect(res[0]).toHaveProperty('husnummer');
    expect(res[0]).toHaveProperty('id_lokalId');
    expect(res[0]).toHaveProperty('id_namespace');
    expect(res[0]).toHaveProperty('jordstykke');
    expect(res[0]).toHaveProperty('kommunekode');
    expect(res[0]).toHaveProperty('registreringFra');
    expect(res[0]).toHaveProperty('registreringsaktør');
    expect(res[0]).toHaveProperty('status');
    expect(res[0]).toHaveProperty('virkningFra');
    expect(res[0]).toHaveProperty('virkningsaktør');
    expect(res[0]).toHaveProperty('etageList');
    expect(res[0]).toHaveProperty('opgangList');

    // etagelist
    expect(res[0]?.etageList).toHaveLength(5);
    expect(res[0]?.etageList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.etageList?.[0]).not.toHaveProperty('etage');

    expect(res[0]?.opgangList).toHaveLength(2);
    expect(res[0]?.opgangList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.opgangList?.[0]).not.toHaveProperty('opgang');
  });

  it('should get a bbr ejendomsrelation using bfenummer', async () => {
    const res = await bbrWithAgent.Ejendomsrelation({
      BFENummer: 6011582,
      Status: Livscyklus.Gældende,
    });

    expect(res).toHaveLength(1);
    expect(res[0]?.bfeNummer).toBe(6011582);
    expect(res[0]).toHaveProperty('datafordelerOpdateringstid');
    expect(res[0]).toHaveProperty('bfeNummer');
    expect(res[0]).toHaveProperty('ejendommensEjerforholdskode');
    expect(res[0]).toHaveProperty('ejendomsnummer');
    expect(res[0]).toHaveProperty('ejendomstype');
    expect(res[0]).toHaveProperty('forretningshændelse');
    expect(res[0]).toHaveProperty('forretningsområde');
    expect(res[0]).toHaveProperty('forretningsproces');
    expect(res[0]).toHaveProperty('id_lokalId');
    expect(res[0]).toHaveProperty('id_namespace');
    expect(res[0]).toHaveProperty('kommunekode');
    expect(res[0]).toHaveProperty('registreringFra');
    expect(res[0]).toHaveProperty('registreringsaktør');
    expect(res[0]).toHaveProperty('samletFastEjendom');
    expect(res[0]).toHaveProperty('status');
    expect(res[0]).toHaveProperty('virkningFra');
    expect(res[0]).toHaveProperty('virkningsaktør');
  });

  it('should get a bbr enhed using id', async () => {
    const res = await bbrWithAgent.Enhed({
      Id: '761d5692-af0f-4211-860a-4d25c8011d73',
    });

    expect(res).toHaveLength(1);
    expect(res[0]).toHaveProperty('datafordelerOpdateringstid');
    expect(res[0]).toHaveProperty('adresseIdentificerer');
    expect(res[0]).toHaveProperty('enh020EnhedensAnvendelse');
    expect(res[0]).toHaveProperty('enh023Boligtype');
    expect(res[0]).toHaveProperty('enh024KondemneretBoligenhed');
    expect(res[0]).toHaveProperty('enh026EnhedensSamledeAreal');
    expect(res[0]).toHaveProperty('enh027ArealTilBeboelse');
    expect(res[0]).toHaveProperty('enh028ArealTilErhverv');
    expect(res[0]).toHaveProperty('enh030KildeTilEnhedensArealer');
    expect(res[0]).toHaveProperty('enh031AntalVærelser');
    expect(res[0]).toHaveProperty('enh032Toiletforhold');
    expect(res[0]).toHaveProperty('enh033Badeforhold');
    expect(res[0]).toHaveProperty('enh034Køkkenforhold');
    expect(res[0]).toHaveProperty('enh045Udlejningsforhold');
    expect(res[0]).toHaveProperty('enh048GodkendtTomBolig');
    expect(res[0]).toHaveProperty('enh063AntalVærelserTilErhverv');
    expect(res[0]).toHaveProperty('enh065AntalVandskylledeToiletter');
    expect(res[0]).toHaveProperty('enh066AntalBadeværelser');
    expect(res[0]).toHaveProperty('enh071AdresseFunktion');
    expect(res[0]).toHaveProperty('etage');
    expect(res[0]).toHaveProperty('forretningshændelse');
    expect(res[0]).toHaveProperty('forretningsområde');
    expect(res[0]).toHaveProperty('forretningsproces');
    expect(res[0]).toHaveProperty('id_lokalId');
    expect(res[0]).toHaveProperty('id_namespace');
    expect(res[0]).toHaveProperty('kommunekode');
    expect(res[0]).toHaveProperty('opgang');
    expect(res[0]).toHaveProperty('registreringFra');
    expect(res[0]).toHaveProperty('registreringsaktør');
    expect(res[0]).toHaveProperty('status');
    expect(res[0]).toHaveProperty('virkningFra');
    expect(res[0]).toHaveProperty('virkningsaktør');
    expect(res[0]).toHaveProperty('bygning');
  });

  it('should get a bbr enhed with depth', async () => {
    const res = await bbrWithAgent.Enhed({
      BFENummer: 413586,
    });

    expect(res[0]?.ejerlejlighedList).toHaveLength(1);
    expect(res[0]?.ejerlejlighedList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.ejerlejlighedList?.[0]).toHaveProperty('ejerlejlighed');
  });

  it('should get a bbr enhed without depth', async () => {
    const res = await bbrWithAgent.Enhed({
      BFENummer: 413586,
      MedDybde: false,
    });

    expect(res[0]?.ejerlejlighedList).toHaveLength(1);
    expect(res[0]?.ejerlejlighedList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.ejerlejlighedList?.[0]).not.toHaveProperty('ejerlejlighed');
  });

  it('should get a bbr grund using bfe nummer without depth', async () => {
    const res = await bbrWithAgent.Grund({
      BFENummer: 2102135,
      MedDybde: false,
    });

    expect(res).toHaveLength(1);
    expect(res[0]).toHaveProperty('datafordelerOpdateringstid');
    expect(res[0]).toHaveProperty('forretningshændelse');
    expect(res[0]).toHaveProperty('forretningsområde');
    expect(res[0]).toHaveProperty('forretningsproces');
    expect(res[0]).toHaveProperty('gru009Vandforsyning');
    expect(res[0]).toHaveProperty('gru010Afløbsforhold');
    expect(res[0]).toHaveProperty('husnummer');
    expect(res[0]).toHaveProperty('id_lokalId');
    expect(res[0]).toHaveProperty('id_namespace');
    expect(res[0]).toHaveProperty('kommunekode');
    expect(res[0]).toHaveProperty('registreringFra');
    expect(res[0]).toHaveProperty('registreringsaktør');
    expect(res[0]).toHaveProperty('status');
    expect(res[0]).toHaveProperty('virkningFra');
    expect(res[0]).toHaveProperty('virkningsaktør');
    expect(res[0]).toHaveProperty('jordstykkeList');
    expect(res[0]).toHaveProperty('bestemtFastEjendom');
    expect(res[0]?.bestemtFastEjendom).not.toHaveProperty('bfeNummer');
  });

  it('should get a bbr grund using bfe nummer with depth', async () => {
    const res = await bbrWithAgent.Grund({
      BFENummer: 2102135,
      MedDybde: true,
    });

    expect(res).toHaveLength(1);
    expect(res[0]).toHaveProperty('bestemtFastEjendom');
    expect(res[0]?.bestemtFastEjendom).toHaveProperty('bfeNummer');
  });
});
