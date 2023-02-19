const Conf = require("conf");
const account = new Conf();

module.exports = function logout() {
    if(!account.has("username")) {
        console.log("You are not logged in!");
        console.log("To log in, run the command: `is-a-good-dev login`")
        return;
    }

    account.delete("email");
    account.delete("token");
    account.delete("username");

    console.log("You have been logged out.");
}
