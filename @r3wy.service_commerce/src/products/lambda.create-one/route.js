/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */
/** @typedef {import('../product.model').BodyCreate} BodyCreate   */

import Ajv from "ajv"
import ProductSchema from "../product.schema.json" assert { type: "json" }
import CreateOneReqValidationSchema from "./schema.js"

/*
 * Compile Model and Request validation schemas
 */
const ajv = new Ajv()

ajv.addSchema(ProductSchema, "Product")

const validateRequestData = ajv.compile({
  type: "object",
  properties: CreateOneReqValidationSchema,
})

/**
 * Create and return a new Product
 *
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const createOne = async (event, context) => {
  const body = JSON.parse(event.body || "{}")

  const isValid = validateRequestData({
    headers: event.headers,
    params: event.pathParameters,
    query: event.queryStringParameters,
    body,
  })

  if (!isValid) {
    return {
      statusCode: 409,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validateRequestData.errors),
    }
  }

  /** @type {BodyCreate} */
  const product = {
    name: body.name,
    description: body.description,
    price: body.price,
  }

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }
}
