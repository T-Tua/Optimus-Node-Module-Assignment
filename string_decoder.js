//string_decoder: Provides functionality for decoding and encoding strings into Unicode characters.

const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");
console.log(decoder.write(Buffer.from("hello")));
