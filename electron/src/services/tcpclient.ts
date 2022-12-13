import { consoleService } from '../services/console-service';

let net = null;

class TcpClient {
    constructor() {
        net = require('net');
    }

    setup() {
        consoleService.log('TcpClient::setup');
        var client = new net.Socket();
        client.connect(2000, '127.0.0.1', function() {
            console.log('Connected');
            client.write('Hello, server! Love, Client.');
        });

        client.on('data', function(data) {
            console.log('Received: ' data);
            client.write('Data received');
        });

        client.on('close', function() {
            console.log('Connection closed');
        });
    }
}

export const tcpClient = new TcpClient();