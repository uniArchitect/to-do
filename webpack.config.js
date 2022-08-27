const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // styles css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // images
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: 'asset/resource',
      //   },
      // fonts
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     type: 'asset/resource',
      //   },
    ],
  },
};
