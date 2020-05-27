module.exports = {
    mode      : 'universal',
    /*
    ** Headers of the page
    */
    server    : {
        port: 7000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    head      : {
        title: 'ThreeJS Sketches | William Howard',
        meta : [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'og:title', name: 'og:title', property: 'og:title', content: 'ThreeJS Sketches | William Howard'},
            {hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'ThreeJS Sketches | William Howard'},
            {
                hid     : 'description',
                name    : 'description',
                property: 'description',
                content : process.env.npm_package_description || 'ThreeJS Experiments by William Howard'
            },
            {
                hid     : 'og:description',
                name    : 'og:description',
                property: 'og:description',
                content : process.env.npm_package_description || 'ThreeJS Experiments by William Howard'
            },
            {
                hid     : 'twitter:description',
                name    : 'twitter:description',
                property: 'twitter:description',
                content : process.env.npm_package_description || 'ThreeJS Experiments by William Howard'
            },
            {hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://experiments.williamhoward.io/images/vue-three.jpg'},
            {hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: 'https://experiments.williamhoward.io/images/vue-three.jpg'},

        ],
        link : [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading   : {color: '#fff'},
    /*
    ** Global CSS
    */
    css       : [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins   : [],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [],
    /*
    ** Nuxt.js modules
    */
    modules   : [],
    /*
    ** Build configuration
    */
    build     : {
        /*
        ** You can extend webpack config here
        */
        transpile: ['GLTFLoader.js', 'OrbitControls.js', 'TransformControls.js'],
        extend(config, ctx) {
        }
    }
}
