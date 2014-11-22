var S = require("string");

function print(analysis) {
    var rows = "";
    analysis.forEach(function(datum) {
        var row = S(datum[0]).padRight(12).s + datum[1];
        rows += row + "\n";
    });

    console.log(rows);
}

module.exports = {
    print: print
};
