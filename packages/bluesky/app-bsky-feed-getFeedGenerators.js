function main(args) {
  let feeds = args.feeds
  return {
      body: {
          feeds: [
              {
                  uri: "at://exppad.com/com.atproto.feed.generator/blog",
                  cid: "zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA",
                  did: "did:plc:blog",
                  creator: {
                      did: "did:plc:blog",
                      handle: "eliemichel.exppad.com",
                      displayName: "Élie Michel",
                  },
                  displayName: "Exppad Blog Generator",
                  indexedAt: "2023-10-29T17:42:10.027Z",
              }
          ]
      }
    }
}
  