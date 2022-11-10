module.exports = {
  env: {
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",

    // let "tsc" catch these when doing type checking as this rule currently
    // gives false positives for variables starting with an underscore
    "@typescript-eslint/no-unused-vars": "off",

    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        leadingUnderscore: "allow",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCase", "PascalCase"],
        prefix: ["is", "has", "can", "does", "should", "will", "did", "was"],
      },
      {
        selector: "variable",
        types: ["boolean", "number", "string", "array"],
        modifiers: ["const", "global"],
        format: ["UPPER_CASE"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember",
        ],
        format: null,
      },
    ],

    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
  },
}
