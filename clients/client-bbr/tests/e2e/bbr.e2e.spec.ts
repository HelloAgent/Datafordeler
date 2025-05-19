import { beforeEach, describe, expect, it } from 'vitest';

import { BBR } from '../../src/BBRClient';
import { Livscyklus } from '../../src/livscyklus';

const CERT_PATH = process.env.CERT_PATH as string;
const CERT_PASSPHRASE = process.env.CERT_PASSPHRASE as string;

describe('Ejerfortegnelsen', () => {
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

    console.log(res);

    expect(res).toBeDefined();
    expect(res[0]?.sagsniveauList?.[0]?.sagsniveau).toBeDefined();
  });

  it('should get a bbr sag without depth', async () => {
    const res = await bbrWithAgent.BBRSag({
      Id: '9b1d2d6e-3e3e-4479-9869-64c72d666bf2',
      MedDybde: false,
      Status: [Livscyklus.Afsluttet, Livscyklus.Gaeldende],
    });

    expect(res).toBeDefined();
    expect(res[0]?.sagsniveauList[0]?.id_lokalid).toBeDefined();
  });
});
