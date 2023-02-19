const welcome = require("cli-welcome");
const package = require("../../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = ({ clear = true }) => {
	unhandled();

	welcome({
		title: "is-a-good.dev",
		tagLine: "CLI",
		description: package.description,
		version: package.version,
		bgColor: "#0096ff",
		color: "#000000",
		bold: true,
		clear
	})
}