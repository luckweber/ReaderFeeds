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
          test:/\.css$/,
          include: [path.resolve(__dirname, 'app/css'), path.resolve(__dirname, 'app/templates/admin/css'), path.resolve(__dirname, 'app/templates/admin/css')],
          loader: 'style-loader!css-loader'
        }
      ],
    }
};
