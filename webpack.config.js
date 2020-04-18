const path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['> .5% or last 2 versions'],
                  },
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                  debug: true, //方便調試
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: false,
                  regenerator: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
