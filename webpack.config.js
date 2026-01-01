module.exports = {
  entry: {
    jassub: './node_modules/jassub/dist/jassub.js',
    worker: './node_modules/jassub/dist/wasm/jassub-worker.js'
  },
  output: {
    library: {
      name: 'JASSUB',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}
