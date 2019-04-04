module.exports = {
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@api": "./src/api",
          "@components": "./src/components",
          "@util": "./src/util",
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
