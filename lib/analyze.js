function accountSummary(data) {    
    var ratio = data["followers_count"] / data["friends_count"];

    var summary = [
        ["handle",    "@" + data["screen_name"]],
        ["followers", data["followers_count"]],
        ["following", data["friends_count"]],
        ["ratio",     ratio]
    ];
    return summary;
}

module.exports = {
    accountSummary: accountSummary
};
