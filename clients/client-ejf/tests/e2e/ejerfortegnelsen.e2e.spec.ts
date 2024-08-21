import { beforeEach, describe, expect, it } from 'vitest';

import { EJF } from '../../src/EJFClient';
import { getCredentials } from './getCredentials';

describe('Ejerfortegnelsen', () => {
  let ejf: EJF;
  const { path, passphrase } = getCredentials();

  beforeEach(() => {
    ejf = new EJF({ agentConfig: { passphrase, localFilePath: path } });
  });

  it('should fetch EjerskabMedStamoplysninger', async () => {
    const res = await ejf.EjerskabMedStamoplysninger({
      BFEnr: '6011585',
      Status: 'gældende',
    });

    const properties = res.features[0]?.properties;

    expect(res.features).toHaveLength(1);
    expect(properties?.ejendeVirksomhed).toBeDefined();
    expect(properties?.ejendePerson).toBeUndefined();
  });

  it('should fetch Ejerskabsskifte', async () => {
    const res = await ejf.Ejerskabsskifte({
      EjerskabsskifteId: 'ac364554-5d15-461d-9138-56430426ccaf',
    });

    const properties = res.features[0]?.properties;

    expect(res.features).toHaveLength(1);
    expect(properties?.modtagetAndel_taeller).toBe(473690881);
    expect(properties?.modtagetAndel_naevner).toBe(9999990000);
  });

  it('should fetch EjendomsadministratorMedStamoplysninger', async () => {
    const res = await ejf.EjendomsadministratorMedStamoplysninger({
      BFEnr: '6019344',
    });

    const properties = res.features[0]?.properties;

    expect(res.features).toHaveLength(1);
    expect(properties?.bestemtFastEjendomBFENr).toBe('6019344');
  });

  it('should fetch handelsoplysninger', async () => {
    const res = await ejf.Handelsoplysninger({ BFEnr: '6011585' });

    const props = res.features[0]?.properties;

    expect(props?.ejerskifte).toHaveLength(1);
    expect(props?.id_namespace).toBe('http://data.gov.dk/ejerfortegnelse');
    expect(res.features).toHaveLength(1);
  });
});
