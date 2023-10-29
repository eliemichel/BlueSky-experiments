function main(args) {
  let limit = +(args.limit || 50)
  let cursor = args.cursor
  return {
      body: {
          actors: [
              {
                  did: "did:plc:1230",
                  handle: "friend0.exppad.com",
                  displayName: "Friend 0",
              },
              {
                  did: "did:plc:1235",
                  handle: "friend1.exppad.com",
                  displayName: "Friend 1",
              },
              {
                  did: "did:plc:1236",
                  handle: "friend2.exppad.com",
                  displayName: "Friend 2",
              }
          ]
      }
  }
}
  