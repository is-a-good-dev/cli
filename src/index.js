#!/usr/bin/env node

const functions = require("./util/functions");

const cli = require("./util/cli");
const init = require("./util/init");

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });

	input.includes("account") && functions.account();
	input.includes("check") && functions.check();
	input.includes("help") && cli.showHelp(0);
	input.includes("login") && functions.login();
	input.includes("logout") && functions.logout();
	input.includes("register") && functions.register();

	debug && console.log(flags);
})();