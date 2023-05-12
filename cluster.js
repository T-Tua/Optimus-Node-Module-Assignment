//cluster: Allows the creation of child processes to take advantage of multi-core systems

const cluster = require("cluster");
if (cluster.isMaster) {
	cluster.fork();
} else {
	console.log("Hello, world!");
}
