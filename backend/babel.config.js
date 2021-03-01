module.exports = {
  env: {
    development: {
      sourceMaps: true,
      retainLines: true,
    },
    test: {
      plugins: ["babel-plugin-dynamic-import-node"],
    },
  },
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "dynamic-import-node",
    "transform-class-properties",
    "transform-remove-strict-mode",
    "lodash",
    [
      "module-resolver",
      {
        root: ["./server", "./db"],
        alias: {
          server: "./server",
          db: "./db",
        },
      },
    ],
  ],
};
