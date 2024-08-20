/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { describe, expect, test } from 'vitest';

import { Client, Service } from '../core';
import ClientDefault, {
  DAR,
  Datafordeler,
  EJF,
  Haendelser,
} from '../datafordeler';

describe('Passive test for imports', () => {
  test('Client default import', () => {
    const client = new ClientDefault();
    expect(client).toBeInstanceOf(Client);
  });

  test('Client import', () => {
    const client = new Datafordeler();
    expect(client).toBeInstanceOf(Client);
  });

  test('Dar import', () => {
    const client = new DAR();
    expect(client).toBeInstanceOf(Service);
  });

  test('EJF import', () => {
    const client = new EJF();
    expect(client).toBeInstanceOf(Service);
  });

  test('Haendelser import', () => {
    const client = new Haendelser({ username: 'user', password: 'pass' });
    expect(client).toBeInstanceOf(Service);
  });
});
