function main(args) {
  let limit = +(args.limit || 50)
  let algorithm = args.algorithm
  let cursor = args.cursor
  return {
      body: {
          feed: [
              {
                  post: {
                      uri: "at://exppad.com/com.atproto.feed.post/writing-blender-geometry-node",
                      cid: "zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA",
                      author: {
                          did: "did:plc:1234",
                          handle: "eliemichel.exppad.com",
                          displayName: "Élie Michel",
                          avatar: "data:image/jpeg;base64,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",
                          
                      },
                      record: { tid: "3gpzdznb4n7q4" },
                      indexedAt: "2023-10-29T17:42:10.027Z"
                  }
              }
          ]
      }
  }
}
  