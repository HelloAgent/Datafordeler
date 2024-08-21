import exp from 'constants';
import { beforeEach, describe, expect, it } from 'vitest';

import { EBR } from '../../src/EBRClient';

const USERNAME = process.env.USERNAME as string;
const PASSWORD = process.env.PASSWORD as string;
const CERT_PATH = process.env.CERT_PATH as string;
const CERT_PASSPHRASE = process.env.CERT_PASSPHRASE as string;

// HusnummerId for Rådhuspladsen 1, 1550 København V
const HusnummerId = '0a3f507a-ec01-32b8-e044-0003ba298018';

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
    const response = await ebrWithAgent.BFEnrAdresse({ HusnummerId });

    expect(response).toBeDefined();
    expect(response.features).toHaveLength(1);
    expect(response.features[0]?.properties).toBeDefined();
  });

  it('should get BFEnrAdresse with credentials', async () => {
    const response = await ebrWithCredentials.BFEnrAdresse({ HusnummerId });

    expect(response).toBeDefined();
    expect(response.features).toHaveLength(1);
    expect(response.features[0]?.properties).toBeDefined();
  });
});
