// dns: Provides DNS-related functionality for hostname resolution and more

const dns = require("dns");
dns.lookup("example.com", (err, address) => {
	console.log(address);
});
