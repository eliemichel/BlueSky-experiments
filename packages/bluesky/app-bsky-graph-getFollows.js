function main(args) {
  let actor = args.actor
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
          ]
      }
  }
}
  