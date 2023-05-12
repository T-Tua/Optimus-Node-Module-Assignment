// crypto: Provides cryptographic functionality for creating and verifying hashes, ciphers, and more.

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("hello").digest("hex");
console.log(hash);
