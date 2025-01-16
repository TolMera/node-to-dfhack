import net from 'node:net';

export class DFHackInterface {
    connected: Promise<string> | undefined;
    client: net.Socket | undefined;
    on: any; // Redefining this to any for now since the types are complex

    errorCodes = {
        LINK_FAILURE: -3, // RPC call failed due to I/O or protocol error
        "-3": "LINK_FAILURE",
        NEEDS_CONSOLE: -2, // Attempt to call interactive command without console
        "-2": "NEEDS_CONSOLE",
        NOT_IMPLEMENTED: -1, // Command not implemented, or plugin not loaded
        "-1": "NOT_IMPLEMENTED",
        OK: 0, // Success
        "0": ",",
        FAILURE: 1, // Failure
        "1": "FAILURE",
        WRONG_USAGE: 2, // Wrong arguments or ui state
        "2": "WRONG_USAGE",
        NOT_FOUND: 3, // Target object not found (for RPC mainly)
        "3": "NOT_FOUND",
    };

    connect() {
        this.connected = new Promise((res:Function, rej:Function) => {
            this.client = net.createConnection({ port: 5000 }, () => {
                const magic = 'DFHack?\n';
                const version = 1;

                // Convert the magic string to a Buffer
                const magicBuffer = Buffer.from(magic, 'utf8');

                // Convert the version number to a Buffer (4 bytes for int32)
                const versionBuffer = Buffer.alloc(4);
                versionBuffer.writeInt32LE(version, 0);

                // Concatenate magic and version buffers to form the handshake request
                const handshakeRequest = Buffer.concat([magicBuffer, versionBuffer]);

                // Send the handshake request
                this.client!.once('data', (data: any) => {
                    if (data.toString().includes('DFHack!')) {
                        this.on = this.client!.on;
                        return res(data);
                    } else {
                        return rej(data);
                    }
                });
                this.client!.write(handshakeRequest);
            });
        });
    }

    write(buffer: Buffer): Promise<Buffer | Error> {
        return new Promise((res:Function, rej:Function) => {
            let response = Buffer.alloc(0); // Initialize an empty buffer to accumulate the response

            const responseId = {
                RESULT: -1,
                TEXT: -3,
                FAIL: -2,
                QUIT: -4,
            };

            const handler = (data: Buffer) => {
                const parsedData = this.getHeader(data);

                if (parsedData.header.id === responseId.RESULT) {
                    response = Buffer.concat([response, parsedData.remainder]);
                    this.client!.off('data', handler); // Remove the listener    
                    res(response);
                }
                else if (parsedData.header.id === responseId.TEXT) {
                    response = Buffer.concat([response, parsedData.remainder]);
                } else if (parsedData.header.id === responseId.FAIL) {
                    // @ts-ignore
                    this.client!.off('data', handler); // Remove the listener    
                    rej(parsedData);
                } else {
                    this.client!.off('data', handler); // Remove the listener    
                    rej(parsedData);
                }
            };

            // Add listener to handle incoming data
            this.client!.on('data', handler);

            // Handle errors
            const errorHandler = (err: Error) => {
                rej(err);
                this.client!.off('data', handler); // Remove the listener in case of error
            };
            this.client!.on('error', errorHandler);

            // Send the request
            this.client!.write(buffer);
        });
    }

    createHeader(id: number, size: number) {
        const buffer = Buffer.alloc(8); // Allocate 8 bytes (2 + 2 + 4)
        buffer.writeInt16LE(id, 0); // Write int16_t id at offset 0
        buffer.writeInt16LE(0, 2); // Write int16_t 0 at offset 2
        buffer.writeInt32LE(size, 4); // Write int32_t size at offset 4
        return buffer;
    }

    getHeader(buffer: Buffer) {
        if (buffer.length < 8) {
            throw new Error("Buffer too short to contain a valid header");
        }

        // Extract fields from the header
        const id = buffer.readInt16LE(0); // Read int16_t id from offset 0
        const padding = buffer.readInt16LE(2); // Read int16_t padding (should be 0) from offset 2
        const size = buffer.readInt32LE(4); // Read int32_t size from offset 4

        // Extract the remainder of the buffer
        const remainder = buffer.subarray(8); // Skip the 8-byte header

        return { header: { id, padding, size }, remainder };
    }
}
