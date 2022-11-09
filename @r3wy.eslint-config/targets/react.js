module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "./common.js",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["react", "testing-library", "jest"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "jest/require-top-level-describe": "error",
    "jest/consistent-test-it": [
      "error",
      {
        fn: "test",
        withinDescribe: "test",
      },
    ],
    "jest/valid-title": [
      "error",
      {
        mustMatch: {
          test: "^given \\[.*\\] should \\[.*\\]$",
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/?(*.)test.tsx"],
      extends: ["plugin:testing-library/react"],
    },
  ],
}
