var secrets = process.env;
try {
    secrets = require("../secrets.json");
} catch (e) {}

module.exports = {
    consumerKey:       secrets["PINT_CONSUMER_KEY"],
    consumerSecret:    secrets["PINT_CONSUMER_SECRET"],
    accessToken:       secrets["PINT_ACCESS_TOKEN"],
    accessTokenSecret: secrets["PINT_ACCESS_TOKEN_SECRET"]
};
