const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    publicPath: '/build/',
    path: `${__dirname}/build`,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.js' and '.jsx' as resolvable extensions.
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      // Babel
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
<<<<<<< HEAD
        test: /\.sass$/,
=======
        test: /\.scss$/,
>>>>>>> 5c076a10932e79c0038e152a706466447556b731
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    redux: 'Redux',
    'redux-form': 'ReduxForm',
  },
};
