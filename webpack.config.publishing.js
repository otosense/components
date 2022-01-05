const path = require('path');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './lib');

module.exports = {
    mode: 'production',
    context: sourcePath,
    entry: {
        main: './index.ts',
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'index.js',
    },
    target: 'web',
    resolve: {
        modules: [sourcePath, 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.ttf'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            enforce: 'pre',
            use: ['tslint-loader'],
        }, {
            test: /\.tsx?$/,
            use: ['ts-loader'],
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use:'file-loader',
        }, {
            test: /\.svg$/,
            use: {
              loader: "svg-url-loader",
              options: {
                iesafe: true,
              },
            },
          },
    ],
    },
    plugins: [],
    externals: {
        // Use external version of React for debugging 
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
};
