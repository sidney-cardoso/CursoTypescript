const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/1_tipos_basicos/A019-exercicio/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.frontend.json',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
    },
};
