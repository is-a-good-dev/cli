const Conf = require("conf");

const userAccount = new Conf();

module.exports = function account() {
    const username = userAccount.get("username");
    const email = userAccount.get("email");
    const token = userAccount.get("token");

    if(!username) {
        console.log("You are not logged in!");
        console.log("To log in, run the command: `is-a-good-dev login`");
        return;
    }

    console.log(`Username: ${username}\nEmail: ${email}\nToken: ${token}`);
}
