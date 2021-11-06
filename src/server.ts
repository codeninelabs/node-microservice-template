'use strict';

import 'dotenv/config';
import * as grpc from 'grpc';

import { protoIndex } from './proto';
import actionHandler from './actions';

protoIndex();

const port: string | number = process.env.SERVICE_PORT || 50000;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
    // create a new gRPC server
    const server: grpc.Server = new grpc.Server();

    // register all the handler here...
    // server.addService(actionHandler.service, actionHandler.handler);

    // define the host/port for server
    server.bindAsync(
        `0.0.0.0:${ port }`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error | null, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`reports microservice listening on ${ port }`);
        },
    );

    // start the gRPC server
    server.start();
};

startServer();
