module.exports = {
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@api": "./src/api",
          "@components": "./src/components",
        },
        "root": [
          "./"
        ]

      }
    ],
    ["styled-components", {
      "displayName": true,
      "preprocess": false,
      "ssr": true,
    }]
  ],
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
};
