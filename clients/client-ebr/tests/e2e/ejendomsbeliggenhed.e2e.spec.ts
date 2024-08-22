import { beforeEach, describe, expect, it } from 'vitest';

import { EBR } from '../../src/EBRClient';

const USERNAME = process.env.USERNAME as string;
const PASSWORD = process.env.PASSWORD as string;
const CERT_PATH = process.env.CERT_PATH as string;
const CERT_PASSPHRASE = process.env.CERT_PASSPHRASE as string;

// Rådhuspladsen 1, 1550 København V
const item = {
  bfeNumber: '6033528',
  husnummerId: '0a3f507a-ec01-32b8-e044-0003ba298018',
  ejendomsbeliggenhedId: 'e7958ac0-daab-43b6-a1bd-83b5627c1fec',
};

describe('Ejerfortegnelsen', () => {
  let ebrWithAgent: EBR;
  let ebrWithCredentials: EBR;

  beforeEach(() => {
    ebrWithAgent = new EBR({
      agentConfig: { passphrase: CERT_PASSPHRASE, localFilePath: CERT_PATH },
    });

    ebrWithCredentials = new EBR({
      credentials: { username: USERNAME, password: PASSWORD },
    });
  });

  it('should get BFEnrAdresse with agent', async () => {
    const { features } = await ebrWithAgent.BFEnrAdresse({
      HusnummerId: item.husnummerId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties.bestemtFastEjendomBFENr).toBe(
      item.bfeNumber,
    );
  });

  it('should get BFEnrAdresse with credentials', async () => {
    const { features } = await ebrWithCredentials.BFEnrAdresse({
      HusnummerId: item.husnummerId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties.bestemtFastEjendomBFENr).toBe(
      item.bfeNumber,
    );
  });

  it('should get Ejendomsbeliggenhed with agent', async () => {
    const { features } = await ebrWithAgent.Ejendomsbeliggenhed({
      EBId: item.ejendomsbeliggenhedId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties.husnummer).toBeDefined();
  });

  it('should get Ejendomsbeliggenhed with credentials', async () => {
    const { features } = await ebrWithCredentials.Ejendomsbeliggenhed({
      EBId: item.ejendomsbeliggenhedId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties.husnummer).toBeDefined();
  });

  it('should get EjendomsbeliggenhedSimpel with agent', async () => {
    const { features } = await ebrWithAgent.EjendomsbeliggenhedSimpel({
      EBId: item.ejendomsbeliggenhedId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties?.husnummerLokalId).toBe(item.husnummerId);
  });

  it('should get EjendomsbeliggenhedSimpel with credentials', async () => {
    const { features } = await ebrWithCredentials.EjendomsbeliggenhedSimpel({
      EBId: item.ejendomsbeliggenhedId,
    });

    expect(features).toHaveLength(1);
    expect(features[0]?.properties).toBeDefined();
    expect(features[0]?.properties?.husnummerLokalId).toBe(item.husnummerId);
  });
});
