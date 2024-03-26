export class Endpoint {
  static PUBLIC = new Endpoint({
    withAgent: false,
    withCredentials: false,
    endpoint: 'services.datafordeler.dk',
  });

  static PUBLIC_PROTECTED = new Endpoint({
    withAgent: false,
    withCredentials: true,
    endpoint: 'services.datafordeler.dk',
  });

  static CERT0 = new Endpoint({
    withAgent: true,
    withCredentials: false,
    endpoint: 'certservices.datafordeler.dk',
  });

  static CERT5 = new Endpoint({
    withAgent: true,
    withCredentials: false,
    endpoint: 's5-certservices.datafordeler.dk',
  });

  static CUSTOM = (props: {
    endpoint: string;
    withCredentials?: boolean;
    withAgent?: boolean;
  }) => new Endpoint(props);

  readonly endpoint: string;

  readonly withCredentials: boolean;

  readonly withAgent: boolean;

  private constructor(props: {
    endpoint: string;
    withCredentials?: boolean;
    withAgent?: boolean;
  }) {
    this.endpoint = props.endpoint;
    this.withCredentials = props.withCredentials ?? false;
    this.withAgent = props.withAgent ?? false;
  }

  getUrl() {
    return new URL(`https://${this.endpoint}`);
  }
}
