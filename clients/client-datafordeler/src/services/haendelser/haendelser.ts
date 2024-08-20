import { Service } from '../../core';
import { MethodObject, ServiceObject, clientInit } from '../../core/types';
import { Request, Response } from './types';

export class Haendelser extends Service {
  static Register = 'system';

  constructor(config: clientInit) {
    super(config, 'system', 'custom', '1.0.0');
  }

  /**
   * Get an DAR address object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async getPublicEvents(params: Request): Promise<Response> {
    return this.Request<Response>(Haendelser.Methods.public, params);
  }

  async getPrivateEvents(params: Request): Promise<Response> {
    return this.Request<Response>(Haendelser.Methods.protected, params);
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      EventMessages: 'EventMessages',
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      public: {
        zone: 'public_protected',
        service: Haendelser.Services.EventMessages,
        method: '',
      },
      protected: {
        zone: 'cert5',
        service: Haendelser.Services.EventMessages,
        method: '',
      },
    });
  }
}
