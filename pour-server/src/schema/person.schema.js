module.exports = {
  personSchema: {
    type: "object",
    required: ["userId", "name", "username", "email", "phone", "website"],
    properties: {
      userId: {
        type: "integer"
      },
      name: {
        type: "string",
        minLength: 1,
      },
      username: {
        type: "string",
      },
      email: {
        type: "string",
      },
      phone: {
        type: "string",
      },
      website: {
        type: "string",
      },
    },
  }
}
