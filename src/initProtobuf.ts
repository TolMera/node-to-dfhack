import path from 'path';
import { fileURLToPath } from 'url';
import protobuf from 'protobufjs';

// Resolve __dirname in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the directory containing the proto files
const protoDir = path.resolve(__dirname, 'proto');

// List all proto files
const protoFiles = [
    'AdventureControl.proto',
    'Basic.proto',
    'BasicApi.proto',
    'CoreProtocol.proto',
    'DwarfControl.proto',
    'isoworldremote.proto',
    'ItemdefInstrument.proto',
    'RemoteFortressReader.proto',
    'rename.proto',
    'ui_sidebar_mode.proto',
];

// Resolve absolute paths for proto files
const filePaths = protoFiles.map(file => path.join(protoDir, file));

let root: protobuf.Root;

// Load all proto files
protobuf.load(filePaths, (err, protobufRoot) => {
    if (err) {
        throw err;
    }

    root = (protobufRoot as protobuf.Root);
});

export { root };
