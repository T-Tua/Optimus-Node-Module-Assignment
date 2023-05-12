//net: Provides functionality for creating TCP servers and clients.

const net = require("net");
const server = net.createServer((socket) => {
	socket.write("Hello, world!");
	socket.end();
});
server.listen(3000);
