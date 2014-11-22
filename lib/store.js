var path = require("path");
var Datastore = require("nedb");

var dataFile = path.resolve(".pint.db");
var db = new Datastore({
    filename: dataFile,
    autoload: true
});

db.find({}, function(err, docs) {
    if (err) {
        console.log("error", err);
    }
    console.log("find:", docs);
});
