import { Configuration } from 'webpack';
const path = require('path');

const config: Configuration = {
  mode: 'development',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "assets": require('path').resolve(__dirname, 'src/assets/'),
      "components": require('path').resolve(__dirname, 'src/components/'),
      "css": require('path').resolve(__dirname, 'src/css/'),
      "hooks": require('path').resolve(__dirname, 'src/hooks/'),
      "pages": require('path').resolve(__dirname, 'src/pages/'),
      "utils": require('path').resolve(__dirname, 'src/utils/'),
      "store": require('path').resolve(__dirname, 'src/store/'),

    },
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};

export default config;
