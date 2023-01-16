import Ajv from "ajv"
import { schema } from "./schema"

/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */
/** @typedef {import('../model').Product} Product */

/**
 * Return an array of Products.
 *
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const findMany = async (event, context) => {
  const validate = new Ajv().compile(schema)

  const isValid = validate({
    headers: event.headers,
    params: event.pathParameters,
    query: event.queryStringParameters,
    body: event.body,
  })

  if (!isValid) {
    return {
      statusCode: 400,
      body: JSON.stringify(validate.errors),
    }
  }

  /** @type {Product[]} */
  const products = []

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  }
}
