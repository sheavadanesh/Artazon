const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/artazon.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            // rules is an array of questions that Webpack will answer.
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
            // test asks Webpack to use babel-loader (IDed at use.loader) when
            // coming across any file that resolves to .jsx (excluding node_modules)
            // to transform it before bundling.
        ]
    },
    devtool: 'source-map'
};
