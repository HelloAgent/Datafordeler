/* eslint-disable @typescript-eslint/no-explicit-any */
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { EBR } from '../../src/EBRClient';

describe('Ejerfortegnelsen', () => {
  let ebrWithAgent: EBR;
  let ebrWithCredentials: EBR;

  beforeEach(() => {
    const agent = {} as any;

    ebrWithAgent = new EBR({ agent });

    ebrWithCredentials = new EBR({
      credentials: { username: 'foo', password: 'bar' },
    });
  });

  it('should request using certservices', async () => {
    const requestSpy = vi
      .spyOn(EBR.prototype as any, 'request')
      .mockImplementation(() => Promise.resolve({}));

    await ebrWithAgent.BFEnrAdresse({ AdresseId: '123', Status: 'gældende' });

    expect(requestSpy).toHaveBeenCalledTimes(1);
    expect(requestSpy).toHaveBeenCalledWith({
      endpoint: {
        endpoint: 'certservices.datafordeler.dk',
        withAgent: true,
        withCredentials: false,
      },
      service: 'Ejendomsbeliggenhed',
      version: '1',
      serviceType: 'REST',
      method: 'BFEnrAdresse',
      params: {
        AdresseId: '123',
        Status: 'gældende',
      },
    });

    requestSpy.mockRestore();
  });

  it('should request using username and password', async () => {
    const requestSpy = vi
      .spyOn(EBR.prototype as any, 'request')
      .mockImplementation(() => Promise.resolve({}));

    await ebrWithCredentials.BFEnrAdresse({
      AdresseId: '123',
      Status: 'gældende',
    });

    expect(requestSpy).toHaveBeenCalledTimes(1);
    expect(requestSpy).toHaveBeenCalledWith({
      endpoint: {
        endpoint: 'services.datafordeler.dk',
        withAgent: false,
        withCredentials: true,
      },
      service: 'Ejendomsbeliggenhed',
      version: '1',
      serviceType: 'REST',
      method: 'BFEnrAdresse',
      params: {
        AdresseId: '123',
        Status: 'gældende',
      },
    });

    requestSpy.mockRestore();
  });
});
