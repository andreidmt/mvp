/** @typedef {import('webpack').Configuration} Configuration */

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

/**
 * @param {Record<string, string>} _env
 * @param {Record<string, any>} _props
 *
 * @returns {Configuration}
 */
module.exports = (_env, _props) => ({
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new NodePolyfillPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader",
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader",
          },
        ],
      },
    ],
  },
})
