const meow = require("meow");
const meowHelp = require("cli-meow-help");

const flags = {
	clear: {
		type: "boolean",
		default: true,
		alias: "c",
		desc: "Clear the console"
	},
	debug: {
		type: "boolean",
		default: false,
		alias: "d",
		desc: "Print debug info"
	},
	noClear: {
		type: "boolean",
		default: false,
		alias: "nc",
		desc: "Don't clear the console"
	},
	version: {
		type: "boolean",
		alias: "v",
		desc: "Print CLI version"
	}
};

const commands = {
	account: { desc: "Get information about your account." },
	check: { desc: "Check if a subdomain is available." },
	login: { desc: "Login to your GitHub account." },
	logout: { desc: "Logout of your GitHub account." },
	register: { desc: "Register a subdomain." }
}

const helpText = meowHelp({
	name: "is-a-good-dev",
	flags,
	commands
})

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
}

module.exports = meow(helpText, options);