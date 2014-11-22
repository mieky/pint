#!/usr/bin/env node

var _          = require("underscore");
var parseArgs  = require("minimist");
var twitterAPI = require("node-twitter-api");
var actions    = require("./lib/actions");
var tokens     = require("./lib/tokens");

var argv = parseArgs(process.argv.slice(2));
var actionNames = _.keys(actions);
var action = (argv["_"][0]);

if (argv["_"].length < 1 || actionNames.indexOf(action) === -1) {
    console.log("Usage: node pint <action>");
    console.log("Actions: %s", actionNames.join(" "));
    process.exit(1);
}

// Wrap twitter("<namespace>/<function>", params, callback) to
//      twitter[<namespace>]("<function>", params, tokenSecret, callback)
// to centralize the passing of tokens.
function twitterWithTokens(path, params, callback) {
    var twitter = new twitterAPI({
        consumerKey: tokens.consumerKey,
        consumerSecret: tokens.consumerSecret
    });

    var namespace = path.split("/")[0];
    var functionName = path.split("/")[1];

    if (!twitter[namespace]) {
        throw Error("No such Twitter namespace: %s", namespace);
    }

    // Call the action on the Twitter module
    twitter[namespace](functionName, params, tokens.accessToken,
        tokens.accessTokenSecret, callback);
}

actions[action].call(this, twitterWithTokens, { argv: argv });
