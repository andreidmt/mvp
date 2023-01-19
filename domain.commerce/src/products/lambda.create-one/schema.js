export default {
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: {
        type: "string",
      },
    },
  },
  params: {
    type: "object",
    additionalProperties: false,
  },
  query: {
    type: "object",
    additionalProperties: false,
  },
  body: {
    $ref: "Product#/definitions/ProductCreateInput",
  },
}
