module.exports = {
  ...require("@revy/prettier-config"),
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^[./]"
  ],
  "importOrderSeparation": true
}
