function main(args) {
  return {
    body: {
      preferences: [
        {
          "$type": "app.bsky.actor.defs#adultContentPref",
          enabled: true,
        },
        {
          "$type": "app.bsky.actor.defs#contentLabelPref",
          label: "foo",
          visibility: "warn",
        },
        {
          "$type": "app.bsky.actor.defs#contentLabelPref",
          label: "bluesky",
          visibility: "show",
        },
        {
          "$type": "app.bsky.actor.defs#savedFeedsPref",
          pinned: [
            "at://did:plc:wqzurwm3kmaig6e6hnc2gqwo/app.bsky.feed.generator/whats-hot",
          ],
          saved: [
            "at://did:plc:wqzurwm3kmaig6e6hnc2gqwo/app.bsky.feed.generator/bsky-team",
            "at://did:plc:wqzurwm3kmaig6e6hnc2gqwo/app.bsky.feed.generator/with-friends",
            "at://did:plc:wqzurwm3kmaig6e6hnc2gqwo/app.bsky.feed.generator/whats-hot",
            "at://did:plc:wqzurwm3kmaig6e6hnc2gqwo/app.bsky.feed.generator/hot-classic",
          ],
        },
        {
          "$type": "app.bsky.actor.defs#personalDetailsPref",
          birthDate: "2000-01-02T17:42:10.027Z",
        },
      ]
    }
  }
}
  