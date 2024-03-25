import { Agent } from 'undici';

import { Auth } from '../src/Auth';

describe('Auth', () => {
  let auth: Auth;

  beforeEach(() => {
    auth = new Auth();
  });

  it('should set credentials correctly', () => {
    const credentials = { username: 'test', password: 'test' };
    auth.setCredentials(credentials);

    expect(auth.getCredentials()).toEqual(credentials);
  });

  it('should throw an error if username is not set', () => {
    expect(() => auth.getCredentials()).toThrow(
      'Username is required for this endpoint',
    );
  });

  it('should throw an error if password is not set', () => {
    const credentials = { username: 'test', password: '' };
    auth.setCredentials(credentials);

    expect(() => auth.getCredentials()).toThrow(
      'Password is required for this endpoint',
    );
  });

  it('should create an agent correctly', () => {
    auth.createAgent({
      passphrase: 'test',
      certBuffer: Buffer.from('test'),
      rejectUnauthorized: false,
      keepAlive: true,
    });

    expect(auth.getAgent()).toBeDefined();
    expect(auth.getAgent() instanceof Agent).toBeTruthy();
  });

  it('should throw an error if agent is not set', () => {
    expect(() => auth.getAgent()).toThrow(
      'User agent is required for the endpoint',
    );
  });

  it('should throw an error if agent is already set', () => {
    const agent = new Agent();
    auth.setAgent(agent);

    expect(() => auth.setAgent(agent)).toThrow('Agent already exists');
  });
});
