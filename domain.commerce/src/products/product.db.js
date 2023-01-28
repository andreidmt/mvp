import AWS from "aws-sdk"
import { v4 as uuid } from "uuid"

/** @typedef {import('./product.model').Product} Product */
/** @typedef {import('./product.model').ProductCreateInput} ProductCreateInput */





const dynamodb = new AWS.DynamoDB.DocumentClient()

/**
 * Create a new Product
 *
 * @param {ProductCreateInput} input
 *
 * @returns {Promise<Product>}
 */
export const createOne = async ({ name, description, price }) => {
  const now = new Date().toISOString()
  const dbItem = await dynamodb
    .put({
      TableName: process.env.PRODUCTS_TABLE_NAME ?? "",
      Item: {
        id: uuid(),
        name,
        description,
        price,
        createdAt: now,
        updatedAt: now,
      },
    })
    .promise()

  return dbItem.$response.data
}
