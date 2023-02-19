const Conf = require("conf");
const { createOAuthDeviceAuth } = require("@octokit/auth-oauth-device");
const { Octokit } = require("@octokit/core");
const prompts = require("prompts");

const account = new Conf();

module.exports = async function login() {
    if(account.has("username")) {
        console.log(`You are already logged in as ${account.get("username")}!`);
        console.log("To log out, run the command: `is-a-good-dev logout`");
        return;
    }

    const auth = createOAuthDeviceAuth({
        clientType: "oauth-app",
        clientId: "b11eadded2b9926f9ae2",
        scopes: ["public_repo, user:email"],
        onVerification(verification) {
            console.log("Open the URL: %s", verification.verification_uri);
            console.log("Enter code: %s", verification.user_code);
        }
    })

    const tokenAuthentication = await auth({ type: "oauth" });

    account.set("token", tokenAuthentication.token);

    const octokit = new Octokit({ auth: tokenAuthentication.token });

    const res1 = await octokit.request("GET /user", {});
    account.set("username", res1.data.login);

    const res2 = await octokit.request("GET /user/emails", {});

    const emails = [];

    res2.data.forEach(res => {
        if(res.email.endsWith("@users.noreply.github.com") || !res.verified) return;

        emails.push(res.email);
    })

    if(emails.length === 1) {
        account.set("email", emails[0]);
    } else {
        const question = {
            type: "select",
            name: "email",
            message: "Which email do you want to use?",
            choices: []
        }

        for (const email of emails) {
            question.choices.push({ value: email });
        }

        console.log(" ");

        const response = await prompts(question);

        account.set("email", response.email);
    }

    console.log(`\nLogged in as: ${account.get("username")} <${account.get("email")}>`);
}
