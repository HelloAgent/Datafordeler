# Datafordeler SDK Monorepo

Welcome to the (unofficial) Datafordeler SDK Monorepo! This repository provides a collection of type-safe clients to interact with various services offered by Datafordeler, a Danish public service platform for distributing government data.

## Overview

This monorepo is structured to contain multiple SDK clients, each targeting a specific service provided by Datafordeler. Currently, the monorepo includes the following client:

@datafordeler/ejf: A client for interacting with the Ejerfortegnelsen (Owner Register) service.
Each client is designed to be type-safe, ensuring a smooth and predictable developer experience.

## Installation

To start using a client in your project, you can install it via npm or yarn:

```bash
# Using npm
npm install @datafordeler/ejf

# Using yarn
yarn add @datafordeler/ejf

# Using pnpm
pnpm add @datafordeler/ejf
```

## Usage

Each client exposes a set of methods that allow you to interact with the corresponding Datafordeler service. The methods are designed to be type-safe, meaning that you can expect the input and output types to be well-defined.

Here's a basic example of how to use the client:

```typescript
import { EJF } from '@datafordeler/ejf';

const authConfig = {}; // Depends on service
const client = new EJF(authConfig);

const result = await client.EjerskabMedStamoplysninger({
  BFEnr: '12345678',
  Status: 'Gældende',
});

console.log(result.features[0]?.properties); // { id_lokalId: ... }
```

Read more about each client in their respective documentation.

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
