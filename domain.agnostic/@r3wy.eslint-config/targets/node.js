module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  plugins: [],
  extends: [
    "airbnb",
    "airbnb-typescript",
    ...[
      "../rules/import.js",
      "../rules/typescript.js",
      "../rules/jest.js",
      "../rules/prettier.js",
    ].map(require.resolve),
  ],
  rules: {},
}
