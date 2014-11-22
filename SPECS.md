## Ideas and specifications

I want to create a tool that's useful to me. Then it's likely others might find it useful as well.


### Features

The tool, either CLI or GUI, would:
- recommend people to follow
- recommend people to unfollow
- provide statistics
- automate micro-optimizations

And, just maybe, one day:
- provide an automatically emptying buffer for optimizing the delivery of non-time-critical tweets – both for avoiding caffeine-induced hypertweet clusters and doing it at a time where most of your followers would see them


### Patterns

I'm thinking I'll start by calculating turnon and turnoff points for accounts. Candidates for follow and unfollow are people with the highest/lowest turnon/turnoff ratio.

Candidates for following are people followed by your followers or followees (not just anyone at first.) Candidates for unfollowing are simply your current followees.


**Turnon factors**

- popular tweets, retweeted or favorited favorably considering follower count (finding the current ratio is a mission on its own)
- favorable follower/followee ratio
- their potential to follow you
- tongue-in-cheekness (now an algorithm to detect this...)


**Turnoff factors**

- too many tweets
- too few tweets
- messy tweets, e.g. hashtag overload
- mixed languages
- foursquare/current status crap: "I'm eating! I'm drinking! I'm working!"
- lack of original content, i.e. mostly retweets
- frequent content that Twitter clients don't display inline, e.g. Instagram pictures
    - also, badly shortened links with no provided context, e.g. smh.re/xyz
- "The My Twitter Magazine is out! Top stories by @poopman95 @mr_potato_head @nobody_gives_a_sh8"


## Assumptions

In my opinion, and based on personal experiences:

- curation is almost everything, quality counts
- properly attribute and credit sources or gtfo
- following/followers ratio is important, as it relays a message that who you follow matters (and thus makes following someone more likely to follow you too)
    - also, you can only effectively follow so many people
- mixing languages should be avoided, unless you mostly want followers sharing the same languages preferences as you (e.g. Finnish and English, or Swedish and Portuegese)
    - same goes for locality: frequent retweets about a happening in the city of X is of interest only to people who actually live there
- raging out and ranting is rarely a good idea, unless you're already known for making a difference
