const path = require('path');
const postCssVariables = require('postcss-css-variables');


// ------------------------------------
// Webpack config
// ------------------------------------
const webpackConfig = {
  mode: 'development',
  entry: {
    index: ['./styles.sass'],
  },
  output: {
    path: path.resolve(__dirname, `./dist`),
    // filename: `1/[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                postCssVariables(),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
  ],
};

module.exports = webpackConfig;
