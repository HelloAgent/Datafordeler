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
      Id: 'dbf0e197-e889-4dd8-b820-be5c0d243f6a',
      Status: Livscyklus.Opført,
    });

    expect(res).toBeDefined();
    expect(res[0]?.etageList?.[0]).toBeDefined();
    expect(res[0]?.etageList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.etageList?.[0]).toHaveProperty('etage');
  });

  it('should get a bbr bygning without depth', async () => {
    const res = await bbrWithAgent.Bygning({
      Id: 'dbf0e197-e889-4dd8-b820-be5c0d243f6a',
      MedDybde: false,
    });

    expect(res).toBeDefined();
    expect(res[0]?.etageList?.[0]).toBeDefined();
    expect(res[0]?.etageList?.[0]).toHaveProperty('id_lokalId');
    expect(res[0]?.etageList?.[0]).not.toHaveProperty('etage');
  });
});
