# @datafordeler/ejf

## Overview

This is an unofficial SDK for interacting with the Ejerfortegnelsen service provided by Datafordeler, a Danish public data distribution platform. The Ejerfortegnelsen service contains detailed data about property owners and property trades across Denmark.

This SDK is designed to be type-safe, providing well-defined input and output types for all interactions, ensuring a smooth and predictable developer experience.

## Installing

To install this package, use one of the following commands depending on your package manager:

- `npm install @datafordeler/ejf`
- `yarn add @datafordeler/ejf`
- `pnpm add @datafordeler/ejf`

## Usage

The client exposes a set of methods designed to be type-safe, ensuring that you can work with strongly typed data throughout your application.

Here's a basic example of how to use the client:

```typescript
import { EJF } from '@datafordeler/ejf';

const authConfig = {}; // See below for authentication
const client = new EJF(authConfig);

const result = await client.EjerskabMedStamoplysninger({
  BFEnr: '12345678',
  Status: 'Gældende',
});

console.log(result.features[0]?.properties); // { id_lokalId: ... }
```

## Authentication

The client requires authentication with a certificate to access the services. As a user you must also request access to the service from Datafordeler as well as have your ip whitelisted. See more at [Datafordeler - Anmodning om adgang til ejerfortegnelsen](https://datafordeler.dk/vejledning/brugeradgang/anmodning-om-adgang/ejerfortegnelsen-ejf/).

The certificate should be in PFX / P12 format and can be provided using one of the following methods:

```typescript
import { Agent } from "undici";
import { EJF } from '@datafordeler/ejf';

const connect = {
  keepAlive: true,
  rejectUnauthorized: false;
  passphrase: "my-passphrase",
  pfx: fs.readFileSync("path/to/cert.pfx"),
  // ... other settings
}

const agent = new Agent({ connect });
const client = new EJF({ agent });
// call servuces
```

Here's an example of how to provide a certificate using a path:

```typescript
import { EJF } from '@datafordeler/ejf';

const agentConfig = {
  certPath: 'path/to/cert.pem',
  passphrase: 'my-passphrase',
};

const client = new EJF({ agentConfig });
// call services
```

## Maintanance and updates

We strive to keep all our SDK clients, including @datafordeler/ejf, up to date with the latest changes and improvements in the corresponding Datafordeler services. Our goal is to ensure compatibility and provide a seamless experience for developers.

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
