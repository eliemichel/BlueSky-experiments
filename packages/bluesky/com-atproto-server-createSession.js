function main(args) {
  if (args.identifier === undefined) {
    return {
      body: {
        error: "Missing identifier",
      },
      statusCode: 400,
    }
  }
  if (args.password === undefined) {
    return {
      body: {
        error: "Missing password",
      },
      statusCode: 400,
    }
  }
  if (args.identifier !== "eliemichel.exppad.com" || args.password !== "undefined-fish") {
    return {
      body: {
        error: "Invalid credentials",
      },
      statusCode: 401,
    }
  }
  return {
    body: {
      accessJwt: "123",
      refreshJwt: "456",
      handle: "pod.exppad.com",
      did: "did:plc:1234",
    }
  }
}
  