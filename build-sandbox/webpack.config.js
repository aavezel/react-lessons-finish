const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = {}) => {

    const { mode = "development" } = env;
    const isProd = mode === "production";
    const isDev = mode === "development";

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
        ]
    }

    const getPlugins = () => {
        let plugins = [
            new HtmlWebpackPlugin({
                title: "Build Sandbox",
                buildTime: isProd ? "" : "Build: " + new Date().toISOString(),
                template: "public/index.html",
                //minify: true,
            }),
        ];

        if (isProd) {
            plugins = [
                new CleanWebpackPlugin(),
                ...plugins,
                new MiniCssExtractPlugin({
                    filename: 'main-[hash:12].css',
                })
            ];
        }

        return plugins;
    }

    return {
        mode: isProd ? "production" : isDev && "development",

        output: {
            filename: isProd ? 'bundle-[hash:8].js' : undefined,
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },

                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "images",
                                name: "[name]-[sha1:hash:12].[ext]"
                            }
                        },
                    ],
                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                            name: "[name].[ext]"
                        }
                    }
                },

                {
                    test: /\.css$/,
                    use: getStyleLoaders(),
                },

                {
                    test: /\.s[ca]ss$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                },

            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: {
                app: 'yandex-browser'
            },
        }
    };
};