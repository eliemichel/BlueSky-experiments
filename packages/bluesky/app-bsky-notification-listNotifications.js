function main(args) {
  let limit = +(args.limit || 50)
  let cursor = args.cursor
  let seenAt = args.seenAt
  return {
    body: {
      notifications: []
    }
  }
}
  