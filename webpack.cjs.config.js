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
    'react',
    'react-dom',
  ],
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['ts-loader']
      }
    ]
  },
  output: {
    filename: "index.js",
    library: {
      type: 'umd' // 'commonjs2'
    },
    path: path.join(__dirname, '/lib/cjs')
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  target: 'node12.22'
};
