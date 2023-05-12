// http: Provides functionality for creating HTTP servers and making HTTP requests.

const http = require("http");
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, world!");
});
server.listen(3000, "localhost", () => {
	console.log("server running at http://localhost:3000/");
});
