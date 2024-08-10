module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader", // Добавлен postcss-loader для обработки CSS с помощью PostCSS
        ],
      },
    ],
  },
};
