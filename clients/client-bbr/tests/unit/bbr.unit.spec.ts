import { beforeEach, describe, expect, it, vi } from 'vitest';

import { BBR } from '../../src/BBRClient';
import { Livscyklus } from '../../src/livscyklus';

type BBRSagRequest = {
  Id: string;
  MedDybde?: boolean;
  Status?: Livscyklus | Livscyklus[];
};

describe('BBRClient', () => {
  let bbrWithAgent: BBR;

  beforeEach(() => {
    // Use a minimal agent object and cast to never
    bbrWithAgent = new BBR({ agent: {} as never });
  });

  it('should normalize Status parameter from Livscyklus to string in request', async () => {
    const requestSpy = vi
      .spyOn(bbrWithAgent as never, 'request')
      .mockResolvedValue([] as never);

    const params: BBRSagRequest = { Id: 'id', Status: Livscyklus.Afsluttet };

    await bbrWithAgent.BBRSag(params);

    expect(requestSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        params: expect.objectContaining({ Status: '9' }),
      }),
    );

    requestSpy.mockRestore();
  });

  it('should normalize Status parameter from array of Livscyklus to array of strings in request', async () => {
    const requestSpy = vi
      .spyOn(bbrWithAgent as never, 'request')
      .mockResolvedValue([] as never);

    const params: BBRSagRequest = {
      Id: 'id',
      Status: [Livscyklus.Afsluttet, Livscyklus.Gældende],
    };

    await bbrWithAgent.BBRSag(params);

    expect(requestSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        params: expect.objectContaining({ Status: ['9', '7'] }),
      }),
    );

    requestSpy.mockRestore();
  });

  it('should use CERT0 endpoint when agent config is provided', async () => {
    const requestSpy = vi
      .spyOn(bbrWithAgent as never, 'request')
      .mockResolvedValue([] as never);

    await bbrWithAgent.BBRSag({ Id: 'id', MedDybde: true });

    expect(requestSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        endpoint: expect.anything(),
      }),
    );

    requestSpy.mockRestore();
  });

  it('should include the correct endpoint and method in the request (URL parts)', async () => {
    const requestSpy = vi
      .spyOn(bbrWithAgent as never, 'request')
      .mockResolvedValue([] as never);

    await bbrWithAgent.BBRSag({ Id: 'id', MedDybde: true });

    expect(requestSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        endpoint: expect.objectContaining({
          endpoint: 'certservices.datafordeler.dk',
        }),
        service: 'BBRPublic',
        method: 'bbrsag',
        version: '1',
        serviceType: 'REST',
      }),
    );

    requestSpy.mockRestore();
  });
});
