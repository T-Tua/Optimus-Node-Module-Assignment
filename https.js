//https: Provides functionality for creating HTTPS servers

const https = require("https");
const options = {
	/* ... */
};
const server = https.createServer(options, (req, res) => {
	res.end("Hello, world!");
});
server.listen(3000);
