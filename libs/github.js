var Github = require('github');
var github = new Github({
    version: "3.0.0",
    headers: {
        "user-agent": "github-rate", // GitHub is happy with a unique user agent
    }
});
var credentials = {
    type: "oauth",
    token: process.env.GITHUB_TOKEN,
};
github.authenticate(credentials);
module.exports = github;
