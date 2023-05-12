// tls: Provides functionality for creating secure TLS/SSL connections.

const tls = require("tls");
const options = {
	host: "example.com",
	port: 443,
	rejectUnauthorized: true,
};
const socket = tls.connect(options, () => {
	console.log("Connected");
	socket.write("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n");
});
socket.on("data", (data) => {
	console.log(data.toString());
});
socket.on("end", () => {
	console.log("Disconnected");
});
