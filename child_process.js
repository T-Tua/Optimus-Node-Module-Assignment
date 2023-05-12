// child_process: Enables the creation of child processes and interaction with them.

const { exec } = require("child_process");
exec("ls -l", (err, stdout, stderr) => {
	console.log(stdout);
});
