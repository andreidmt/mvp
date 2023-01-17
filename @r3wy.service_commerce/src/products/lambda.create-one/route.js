/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */

import Ajv from "ajv"

import { createOne } from "../product.db.js"
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
 * Create a new Product
 *
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const handler = async (event, context) => {
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

  const result = await createOne(body)

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  }
}
