module.exports = {
  personSchema: {
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string",
        minLength: 1,
      },
      userId: {
        type: "integer"
      },
    },
  }
}
