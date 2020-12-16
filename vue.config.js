/* eslint-disable no-unused-vars */
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                return {
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                        'b-avatar': 'src',
                        'b-img': 'src',
                        'b-img-lazy': ['src', 'blank-src'],
                        'b-card': 'img-src',
                        'b-card-img': 'src',
                        'b-card-img-lazy': ['src', 'blank-src'],
                        'b-carousel-slide': 'img-src',
                        'b-embed': 'src'
                    }
                }
            })
    }
}