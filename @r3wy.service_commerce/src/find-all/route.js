/** @typedef {import('aws-lambda').Context} Context */
/** @typedef {import('@r3wy/db').Product} Product */

import { Products } from "@r3wy/db"

export default {
  method: "GET",
  path: "/cards",

  /**
   * If req data is valid
   *  -> continue to permissionn check
   *  -> otherwise return 409
   */
  schema: import("./schema"),

  /**
   * Permission checking, if allowed:
   *  -> continue to action
   *  -> otherwise return 403
   *
   *  @param {Context} context
   *
   *  @returns {Promise<boolean>| boolean}
   */
  isAllowed: context => true,

  /**
   * After schema validation and permission checking, do route logic
   *
   * @param  {Context}  context
   *
   * @return {Promise<Product[]>}
   */
  action: ({
    query: {
      filter: { productId, type, ...restFilter },
      pluck,
    },
  }) =>
    Products.findMany({
      filter: restFilter,
      pluck,
    }),
}
