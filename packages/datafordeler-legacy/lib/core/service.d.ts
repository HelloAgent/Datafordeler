import { MethodInfo, clientInit, Servicetype, Parameters, Register, Version } from "./types";
export declare class Service {
    #private;
    private register;
    private serviceType;
    private version;
    constructor(config: clientInit | undefined, register: Register, serviceType: Servicetype, version?: Version);
    protected set apiVersion(version: Version);
    protected Request<T>(opt: MethodInfo, params: Parameters): Promise<T>;
    private validateAgent;
    private validateAuth;
    private addAuthToUrl;
    private buildUrl;
    /** Returns correct endpoint to be used in Request() */
    private getEndpoint;
    /** Takes an object {key: "value"} and creates a url string */
    private createQueryString;
}
