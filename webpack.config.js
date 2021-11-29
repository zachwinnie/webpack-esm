const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

/**
 * https://webpack.js.org/configuration/output/#module-definition-systems
 * https://github.com/webpack/webpack/issues/2933#issuecomment-774253975
 */

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  externals: [
    'classnames',
    'react',
    'react-dom',
    'styled-components'
  ],
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['ts-loader']
      },
      {
        exclude: /node_modules/,
        test: /(\.module)?.(sass|scss)$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'index.js',
    library: {
      type: 'umd'
    },
    path: path.join(__dirname, '/lib')
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.scss', '.ts', '.tsx']
  }
};
