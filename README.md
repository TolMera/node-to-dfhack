# NodeToDFHack

NodeToDFHack is a Node.js interface for interacting with DFHack using TypeScript and Protobuf. This library allows you to build robust integrations with Dwarf Fortress' DFHack tool, providing streamlined communication between your Node.js applications and DFHack.

## Features

- **TypeScript Support:** Typed interfaces for easy development.
- **Protobuf Integration:** Leverage Protobuf for structured and efficient data exchange.
- **Easy-to-Use API:** Simplified methods to interact with DFHack from your Node.js applications.

## Installation

Install the package via NPM:

```bash
npm install node-to-dfhack
```

## Usage

Here is a basic example of how to use NodeToDFHack in your project:

### Example

```typescript
import { DFHackInterface, DFHackProtoBufferInterface } from 'node-to-dfhack';

async function main() {
    // Establish a connection
    const df = new DFHackInterface('127.0.0.1', 5000);
    await df.connect();
    console.log('Connected to DFHack!');

    // Pass the connection to the Protobuf interface
    const protoInterface = new DFHackProtoBufferInterface(df);

    // Example sending a Protobuf command
    await instance.coreSuspend().then(console.log).catch(console.error);
}

main();
```

## API Documentation

### `DFHackInterface`

#### Constructor
```typescript
new DFHackInterface(host: string, port: number)
```
- `host`: The hostname or IP address of the DFHack server.
- `port`: The port number for the DFHack connection.

#### Methods

- **`connect(): Promise<void>`**
  Establishes a connection to the DFHack server.

### `DFHackProtoBufferInterface`

Where all of the methods (and some helpers) have been defined that exist inside DFHacks' Remote Interface, that we can talk to.

#### Constructor
```typescript
new DFHackProtoBufferInterface(dfhackInterface: DFHackInterface)
```
- `dfhackInterface`: An established connection to DFHack through `DFHackInterface`.

#### Methods

Read The Source File!

## Development

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/TolMera/node-to-dfhack.git
cd node-to-dfhack
npm install
```

### Build

Compile the TypeScript code:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

## License

This project is licensed under (C) - All Rights Reserved

---

For more details or to contribute, visit the [GitHub Repository](https://github.com/TolMera/node-to-dfhack).

