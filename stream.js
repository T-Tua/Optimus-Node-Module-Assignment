// stream: Provides functionality for reading and writing data streams.

const fs = require("fs");
const readStream = fs.createReadStream("/path/to/file");
const writeStream = fs.createWriteStream("/path/to/new/file");
readStream.pipe(writeStream);
