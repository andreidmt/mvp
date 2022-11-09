module.exports = {
  ...require("@r3wy/prettier-config"),
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^core.libs/(.*)$",
    "^core.types/(.*)$",
    "^core.hooks/(.*)$",
    "^core.i18n/(.*)$",
    "^core.ui/(.*)$",
    "^(page.(.*)|route.(.*)|layout.(.*))/(.*)$",
    "^(.*)test-mock(.*)$",
    "^./data/(.*)$",
    "^./section/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true
}
