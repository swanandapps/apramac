const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {


    chainWebpack: config => {

        config.optimization
            .splitChunks({
                cacheGroups: {
                    vendors: {
                        name: 'chunk-vendors',
                        priority: -10,
                        chunks: 'initial',
                        minChunks: 2,

                        enforce: true,
                    },
                    common: {
                        name: 'chunk-common',
                        priority: -20,
                        chunks: 'initial',
                        minChunks: 2,
                        reuseExistingChunk: true,
                        enforce: true,
                    },

                },
            })

    },
    configureWebpack: {
        //mode: 'production',
        plugins: [new BundleAnalyzerPlugin(),

        ],


        optimization: {
            //nodeEnv: 'production',
            // minimize: true,
            // concatenateModules: true,
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            },



        },

    },
    lintOnSave: false,

    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/store',
                '/services',
                '/Home',
                '/about'

            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    },



}