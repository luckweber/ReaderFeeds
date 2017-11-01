const path =  require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    watch: true,
    devServer:{
      port:3000,
      contentBase:'./app'
    },
    module: {
      loaders: [
        {
          test:/\.scss$/,
          exclude: /node_modules/,
          include:[path.resolve(__dirname,'app/admin/css')],
          loader: 'style!css!sass'
        },
        {
          test: /\.css$/,
          //exclude: /node_modules/,
          include:[path.resolve(__dirname,'app/admin/css')],
          loader: 'style!css'
        },{

          test: [/\.js$/, /\.es6$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets:['es2015']
          }

        }
      ],
    },
    resolve:{
      extensions:['', '.webpack.js', '.css', '.web.js', '.ts', '.scss']
    }
};
