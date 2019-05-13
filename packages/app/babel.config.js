module.exports = {
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@api": "./src/api",
          "@components": "./src/components",
          "@features": "./src/features",
          "@styles": "./src/styles",
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
    "@zeit/next-typescript/babel",
    {
      "preset-env": {
        targets: {
          browsers: ["last 5 version", "IE>=10"]
        }
      }
    }
  ],
};
