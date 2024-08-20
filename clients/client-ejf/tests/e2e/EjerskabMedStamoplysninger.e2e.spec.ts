import { beforeEach, describe, expect, it } from 'vitest';

import { EJF } from '../../src/EJFClient';
import { getCredentials } from './getCredentials';

describe('EjerskabMedStamoplysninger', () => {
  let ejf: EJF;
  const { path, passphrase } = getCredentials();

  beforeEach(() => {
    ejf = new EJF({ agentConfig: { passphrase, localFilePath: path } });
  });

  it('should fetch an owner', async () => {
    const res = await ejf.EjerskabMedStamoplysninger({
      BFEnr: '6011585',
      Status: 'gældende',
    });

    const properties = res.features[0]?.properties;

    expect(res.features).toHaveLength(1);
    expect(properties?.ejendeVirksomhed).toBeDefined();
    expect(properties?.ejendePerson).toBeUndefined();
  });
});

describe('Ejerskabsskifte', () => {
  let ejf: EJF;
  const { path, passphrase } = getCredentials();

  beforeEach(() => {
    ejf = new EJF({ agentConfig: { passphrase, localFilePath: path } });
  });

  it('should fetch an ejerskabsskifte', async () => {
    const res = await ejf.Ejerskabsskifte({
      EjerskabsskifteId: 'ac364554-5d15-461d-9138-56430426ccaf',
    });

    const properties = res.features[0]?.properties;

    expect(res.features).toHaveLength(1);
    expect(properties?.modtagetAndel_taeller).toBe(473690881);
    expect(properties?.modtagetAndel_naevner).toBe(9999990000);
  });
});
