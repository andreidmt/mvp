/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */

/**
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const getOne = async (event, context) => {
  console.log(`Event: ${JSON.stringify(event.pathParameters, null, 2)}`)
  console.log(`Context: ${JSON.stringify(context.functionName, null, 2)}`)

  const { id } = event.pathParameters || {}

  return {
    statusCode: 200,
    body: JSON.stringify({
      id,
      message: "hello world",
    }),
  }
}
