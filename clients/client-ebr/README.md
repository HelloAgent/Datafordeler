# @datafordeler/ebr

## Overview

This is an unofficial SDK for interacting with the Ejendomsbeliggenhed service provided by Datafordeler, a Danish public data distribution platform. The Ejendomsbeliggenhed service contains detailed data about property location and maps bfe numbers to adresses and housenumbers.

This SDK is designed to be type-safe, providing well-defined input and output types for all interactions, ensuring a smooth and predictable developer experience.

## Installing

To install this package, use one of the following commands depending on your package manager:

- `npm install @datafordeler/ebr`
- `yarn add @datafordeler/ebr`
- `pnpm add @datafordeler/ebr`

## Usage

The client exposes a set of methods designed to be type-safe, ensuring that you can work with strongly typed data throughout your application.

Here's a basic example of how to use the client:

```typescript
import { EBR } from '@datafordeler/ebr';

const authConfig = {}; // See below for authentication
const client = new EBR(authConfig);

const result = await client.BFEnrAdresse({
  HusnummerId: '12345678',
  Status: 'Gældende',
});

console.log(result.features[0]?.properties); // { id_lokalId: ... }
```

## Authentication

The client requres authentication, either using credentials or a certificate. The authentication method is specified when creating the client.

If the client is configured with both credentials and a certificate, the client will use the certificate for authentication.

The certificate should be in PFX / P12 format and can be provided using one of the following methods:

```typescript
import { Agent } from "undici";
import { EBR } from '@datafordeler/ebr';

const connect = {
  keepAlive: true,
  rejectUnauthorized: false;
  passphrase: "my-passphrase",
  pfx: fs.readFileSync("path/to/cert.pfx"),
  // ... other settings
}

const agent = new Agent({ connect });
const client = new EBR({ agent });
// call servuces
```

Here's an example of how to provide a certificate using a path:

```typescript
import { EBR } from '@datafordeler/ebr';

const agentConfig = {
  certPath: 'path/to/cert.pem',
  passphrase: 'my-passphrase',
};

const client = new EBR({ agentConfig });
// call services
```

Configuring the client with credentials:

```typescript
import { EBR } from '@datafordeler/ebr';

const client = new EBR({ credentials: { username: <USERNAME>, password: <PASSWORD> }, });
// call services
```

## Methods

The client exposes a set of methods for interacting with the EBR service. Each method corresponds to an endpoint in the service and is designed to be type-safe, ensuring that you can work with strongly typed data throughout your application.

Get the bfenumber of a property based on the housenumberId

```typescript
import { EBR } from '@datafordeler/ebr';
const client = new EBR({...});

const result = await client.BFEnrAdresse({
  HusnummerId: '12345678',
  Status: 'Gældende',
});

```

Get the location (ejendomsbeliggenhed) of a property based on the bfe number

```typescript
import { EBR } from '@datafordeler/ebr';
const client = new EBR({...});

const result = await client.Ejendomsbeliggenhed({
  BFEnr: 12345678,
  Status: 'Gældende',
});

```

Get the a simplified location (ejendomsbeliggenhedSimpel) of a property based on the bfe number

```typescript
import { EBR } from '@datafordeler/ebr';
const client = new EBR({...});

const result = await client.EjendomsbeliggenhedSimpel({
  BFEnr: 12345678,
  Status: 'Gældende',
});

```

## Maintanance and updates

We strive to keep all our SDK clients, including @datafordeler/ebr, up to date with the latest changes and improvements in the corresponding Datafordeler services. Our goal is to ensure compatibility and provide a seamless experience for developers.

However, please note that we cannot guarantee that all services will be updated immediately in response to changes in the Datafordeler platform. There may be instances where updates are delayed due to unforeseen circumstances or dependencies on external factors.

We encourage users to report any issues or discrepancies they encounter, and we will do our best to address them in a timely manner.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub flow:

Fork the repository
Create a new branch
Make your changes
Submit a pull request
Please ensure all new code is properly tested and follows the existing code style.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This SDK is developed and maintained by Simon Saxtorph @HelloAgent and @EstateHub. Special thanks to the Datafordeler team for providing the APIs.
