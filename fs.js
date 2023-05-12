// fs: Provides file system-related functionality for reading, writing, and manipulating files and directories.

const fs = require("fs");
fs.readFile("/path/to/file", "utf8", (err, data) => {
	console.log(data);
});
