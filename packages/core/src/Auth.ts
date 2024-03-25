import { readFileSync } from 'fs';
import { Agent } from 'undici';

export interface CredentialsConfig {
  credentials?: {
    username: string;
    password: string;
  };
}

export interface AgentProps {
  passphrase: string;
  certBuffer?: Buffer;
  localFilePath?: string;
  keepAlive?: boolean;
  rejectUnauthorized?: boolean;
}

export interface AgentConfig {
  agent?: Agent;
  agentConfig?: AgentProps;
}

export type AuthConfig = AgentConfig & CredentialsConfig;

export class Auth {
  #agent?: Agent;

  #username?: string;

  #password?: string;

  public setCredentials(credentials: { username: string; password: string }) {
    this.#username = credentials.username;
    this.#password = credentials.password;
  }

  private getUsername() {
    if (!this.#username) {
      throw new Error('Username is required for this endpoint');
    }
    return this.#username;
  }

  private getPassword() {
    if (!this.#password) {
      throw new Error('Password is required for this endpoint');
    }
    return this.#password;
  }

  public getCredentials() {
    return {
      username: this.getUsername(),
      password: this.getPassword(),
    };
  }

  public createAgent(props: AgentProps) {
    if (this.#agent) {
      throw new Error(`Agent already exists`);
    }

    const connect: Agent.Options['connect'] = {
      keepAlive: props.keepAlive || true,
      rejectUnauthorized: props.rejectUnauthorized || false,
    };

    if (props.passphrase) {
      connect.passphrase = props.passphrase;
    }

    if (props.localFilePath) {
      connect.pfx = readFileSync(props.localFilePath);
    }

    if (props.certBuffer) {
      connect.pfx = props.certBuffer;
    }

    if (!props.certBuffer && !props.localFilePath) {
      throw new Error(
        `Either certBuffer or localFilePath must be provided when creating an agent`,
      );
    }

    this.#agent = new Agent({ connect });
  }

  public getAgent() {
    if (!this.#agent) {
      throw new Error(`User agent is required for the endpoint`);
    }

    if (global.window !== undefined) {
      throw new Error('Cannot use this endpoint in a browser environment');
    }

    return this.#agent;
  }

  public setAgent(agent: Agent) {
    if (this.#agent) {
      throw new Error(`Agent already exists`);
    }

    this.#agent = agent;
  }
}
