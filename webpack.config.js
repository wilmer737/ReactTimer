var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            App: 'app/components/App',
            applicationStyles: 'app/styles/app.scss',
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_component)/,
            }
        ],
    },
    devtool: 'cheap-module-eval-source-map',
};
