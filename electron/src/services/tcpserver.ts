import { consoleService } from '../services/console-service';

let net = null;

class TcpServer {
    constructor() {
        net = require('net');
    }

    setup() {
        consoleService.log('TcpServer::setup');
        const server = net.createServer();
        server.listen(2000);

        let sockets = [];

        server.on('connection', function(sock) {
            console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
            sockets.push(sock);

            sock.on('data', function(data) {
                console.log('DATA from ' + sock.remoteAddress + ': ' + data);
                sock.write('data received');
            });

            // Add a 'close' event handler to this instance of socket
            sock.on('close', function(data) {
                let index = sockets.findIndex(function(o) {
                    return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
                })
                if (index !== -1) {
                    sockets.splice(index, 1);
                }
                console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
            });
        });

        console.log('Server listening on ' + 'localhost' +':'+ 2000);
        
    }
}

export const tcpServer = new TcpServer();