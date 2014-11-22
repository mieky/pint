# pint - Personal Insight for Twitter

Optimize your Twitter follows and unfollows, for great success.

See [Ideas and specifications](SPECS.md).

## How do I use it?

You probably shouldn't yet, because it's very much a work in progress.

For the adventurous:

- `npm install`
- Set up your [secrets](https://dev.twitter.com/oauth/tools/signature-generator/) in [secrets.json](secrets.example.json), or as environment variables.

- `node pint me` for a quick personal summary (screen name based on the auth tokens)

Currently prints something, not quite insightful just yet:

```
handle      @mieky
followers   923
following   343
ratio       2.690962099125364
```

TODO:

- `node pint <handle>` -- analyze twitter handle

## License

MIT
