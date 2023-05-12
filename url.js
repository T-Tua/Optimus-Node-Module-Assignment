// url: Provides functionality for parsing and formatting URLs.

const url = require("url");
const urlString = "https://example.com/path?foo=bar";
const parsedUrl = url.parse(urlString, true);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.foo);
