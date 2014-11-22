var analyze = require("./analyze");
var printer = require("./printer");

function me(twitter, options) {

    function printSummary(data) {
        var summary = analyze.accountSummary(data);
        printer.print(summary);
    }

    twitter("verifyCredentials",
        function(error, data, response) {
            if (!error) {
                printSummary(data);
            }
        }
    );
}

module.exports = {
    me: me
};
