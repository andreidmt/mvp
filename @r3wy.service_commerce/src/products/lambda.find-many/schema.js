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
    properties: {
      pluck: {
        type: "array",
        items: {
          $ref: "Product#/definitions/Fields",
        },
        uniqueItems: true,
        default: [],
      },
      limit: {
        type: "integer",
        minimum: 10,
        maximum: 100,
        default: 10,
      },
      offset: {
        type: "integer",
        minimum: 0,
        default: 0,
      },
    },
  },

  body: {
    type: "object",
    additionalProperties: false,
  },
}
