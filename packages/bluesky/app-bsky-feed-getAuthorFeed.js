function main(args) {
  let actor = args.actor
  let cursor = args.cursor
  let filter = args.filter
  let limit = +(args.limit || 50)
  
  return {
      body: {
          feeds: [
              {
                  uri: "at://exppad.com/com.atproto.feed.post/writing-blender-geometry-node",
                  cid: "zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA",
                  did: "did:plc:blog",
                  creator: {
                      did: "did:plc:blog",
                      handle: "eliemichel.exppad.com",
                      displayName: "Élie Michel",
                  },
                  displayName: "Writing blender geometry node",
                  indexedAt: "2023-10-29T17:42:10.027Z",
              }
          ]
      }
    }
}
  