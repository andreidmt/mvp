/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */
/** @typedef {import('../product.model').Product} Product */

import Ajv from "ajv"
import ProductSchema from "../product.schema.json" assert { type: "json" }
import FindManyReqValidationSchema from "./schema.js"

/*
 * Compile Model and Request validation schemas
 */
const ajv = new Ajv()

ajv.addSchema(ProductSchema, "Product")

const validateRequestData = ajv.compile({
  type: "object",
  properties: FindManyReqValidationSchema,
})

/**
 * Return an array of Products.
 *
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const findMany = async (event, context) => {
  const isValid = validateRequestData({
    headers: event.headers,
    params: event.pathParameters,
    query: event.queryStringParameters,
    body: event.body,
  })

  if (!isValid) {
    return {
      statusCode: 409,
      body: JSON.stringify(validateRequestData.errors),
    }
  }

  /** @type {Product[]} */
  const products = []

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  }
}
