module.exports = {
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel',
      }
    ],
  },
  output: {
    libraryTarget: 'commonjs',
  },
  externals: [
    {
      angular: true,
    },
  ],
};