/**
 * foo: {
 *   type: "string",
 *   pattern: "^[a-z0-9-]+$",
 *   maxLength: 25,
 *   minLength: 25,
 * },
 *
 * limit: {
 *   type: "integer",
 *   minimum: 1,
 *   maximum: 100,
 *   default: 20,
 * },
 *
 * bar: {
 *   type: "string",
 *   enum: ["lorem", "dolor", "bobby"],
 * },
 *
 * ipsum: {
 *   type: ["integer", "null"],
 *   enum: ["lorem", "dolor", "bobby"],
 * },
 *
 * id: {
 *   oneOf: [
 *     { type: "integer" },
 *     {
 *       type: "array",
 *       items: { type: "integer" },
 *       minItems: 1,
 *       uniqueItems: true,
 *     },
 *   ],
 * },
 */

export const schema = {
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
    pluck: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "name",
          "description",
          "price",
          "thumbnailURL",
          "rating",
          "createdAt",
          "updatedAt",
        ],
      },
      uniqueItems: true,
      default: [],
    },
    include: {
      type: "array",
      items: {
        type: "string",
        enum: ["Reviews"],
      },
      uniqueItems: true,
      default: [],
    },
    limit: {
      type: "integer",
      minimum: 10,
      maximum: 100,
      default: 100,
    },
    offset: {
      type: "integer",
      minimum: 0,
      default: 0,
    },
  },

  body: {
    type: "object",
    additionalProperties: false,
  },
}
