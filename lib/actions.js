var analyze = require("./analyze");
var printer = require("./printer");

function friends(twitter, options) {
    twitter("followers/ids",
        null,
        function(error, data, response) {
            if (!error) {
                console.dir(data);
            }
        });
}

function me(twitter, options) {

    function printSummary(data) {
        var summary = analyze.accountSummary(data);
        printer.print(summary);
    }

    twitter("account/verify_credentials",
        null,
        function(error, data, response) {
            if (!error) {
                printSummary(data);
            }
        });
}

module.exports = {
    me: me,
    friends: friends
};
