/** @typedef {import('aws-lambda').APIGatewayEvent } APIGatewayEvent */
/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult */

/**
 * @param {APIGatewayEvent} event
 * @param {Context} context
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const helloWorld = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, World!",
    }),
  };

  return response;
};
