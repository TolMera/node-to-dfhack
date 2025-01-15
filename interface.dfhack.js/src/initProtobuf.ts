import path from 'path';
import protobuf from 'protobufjs';

// Define the directory containing the proto files
const protoDir = path.join('./', 'proto');
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
    'ui_sidebar_mode.proto'
];
const filePaths = protoFiles.map(file => path.join(protoDir, file));
export let root: undefined | any;
// Load all proto files
protobuf.load(filePaths, (err: Error | null, protobufRoot: any) => {
    if (err) {
        throw err;
    }

    root = protobufRoot;
});

