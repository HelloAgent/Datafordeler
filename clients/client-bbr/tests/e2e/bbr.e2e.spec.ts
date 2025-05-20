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
});
