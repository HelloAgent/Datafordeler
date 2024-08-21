import { Service } from '../../core';
import { MethodObject, ServiceObject, clientInit } from '../../core/types';
import {
  EjerskabMedStamoplysninger,
  Ejerskabsskifte,
  Ejerskifte,
  Handelsoplysninger,
} from './models';

export class EJF extends Service {
  static Register = 'EJERFORTEGNELSE';

  constructor(config: clientInit = {}) {
    super(config, 'EJERFORTEGNELSE', 'rest');
  }

  /**
   * Get an ejerSkabMedStamoplysninger object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async ejerskabMedStamoplysninger(
    params: EjerskabMedStamoplysninger.Request,
  ): Promise<EjerskabMedStamoplysninger.Response> {
    return await this.Request<EjerskabMedStamoplysninger.Response>(
      EJF.Methods.EjerskabMedStamoplysninger,
      params,
    );
  }

  async handelsoplysning(
    params: Handelsoplysninger.Request,
  ): Promise<Handelsoplysninger.Response> {
    return await this.Request<Handelsoplysninger.Response>(
      EJF.Methods.Handelsoplysninger,
      params,
    );
  }

  async ejerskifte(params: Ejerskifte.Request): Promise<Ejerskifte.Response> {
    return await this.Request<Ejerskifte.Response>(
      EJF.Methods.Ejerskifte,
      params,
    );
  }

  async ejerskabsskifte(
    params: Ejerskabsskifte.Request,
  ): Promise<Ejerskabsskifte.Response> {
    return await this.Request<Ejerskabsskifte.Response>(
      EJF.Methods.Ejerskabsskifte,
      params,
    );
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      Ejerfortegnelsen: 'Ejerfortegnelsen',
      EjerfortegnelsenFortrolig: ' EjerfortegnelsenFortrolig',
      EjerfortegnelsenFortroligBeskyttet: 'EjerfortegnelsenFortroligBeskyttet',
    });
  }

  static get Methods(): MethodObject {
    return Object.freeze({
      EjerskabMedStamoplysninger: {
        zone: 'cert5',
        service: EJF.Services.Ejerfortegnelsen,
        method: 'EjerskabMedStamoplysninger',
      },
      Handelsoplysninger: {
        zone: 'cert5',
        service: EJF.Services.Ejerfortegnelsen,
        method: 'Handelsoplysning',
      },
      Ejerskifte: {
        zone: 'cert5',
        service: EJF.Services.Ejerfortegnelsen,
        method: 'Ejerskifte',
        version: '2.0.0', // Added version manuallly as Ejerskifte uses 2.0.0 and other methods in EJF uses 1.
      },
      Ejerskabsskifte: {
        zone: 'cert5',
        service: EJF.Services.Ejerfortegnelsen,
        method: 'Ejerskabsskifte',
      },
    });
  }
}

/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }

// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }

// import Buffer from "buffer"
