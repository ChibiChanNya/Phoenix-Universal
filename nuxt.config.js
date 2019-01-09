const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: '%s - Phoenix Development',

    meta: [
      // Basic meta tags boilerplate
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'Agencia Mexicana de desarrollo de páginas web, marketing digital e imagen corporativa.'
      },
      // TWITTER CARD
      { hid: 'Twitter Default Card', name: 'twitter:card', content: 'summary' },
      { hid: 'Twitter Default Title', name: 'twitter:title', content: 'Phoenix Development' },
      { hid: 'Twitter Default Desc', name: 'twitter:description', content: 'CREA. TRANSFORMA. EVOLUCIONA' },
      { hid: 'Twitter Default Img', name: 'twitter:image:src', content: '/Logo100.png' },
      // SCHEMA.ORG META TAGS
      { hid: 'Schema Default Title', property: 'og:title', content: 'Phoenix Development' },
      { hid: 'Schema Default Type', property: 'og:type', content: 'website' },
      {
        hid: 'Schema Default Image',
        property: 'og:image',
        content: 'https://phoenixdevelopment.mx/static/img/logo100.jpg'
      },
      { hid: 'Schema Default ImgWidth', property: 'og:image:width', content: '612' },
      { hid: 'Schema Default ImgHeight', property: 'og:image:height', content: '612' },
      { hid: 'Schema Default URL', property: 'og:url', content: 'https://phoenixdevelopment.mx.mx/' },
      {
        hid: 'Schema Default Description',
        property: 'og:description',
        content: 'Pho Consulting Services S. de R.L. de C.V. Agencia de desarrollo de páginas web, marketing digital e imagen coportativa.'
      },
      { hid: 'Schema Default SITENAME', property: 'og:site_name', content: 'PHOENIX' },
      // FACEBOOK TAG
      { property: 'fb:app_id', content: '478115346000965' }

    ],

    script: [
      //Analytics
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-130597461-1', defer: true },
      { src: 'https://www.google-analytics.com/analytics.js', defer: true },
      { src: '/js/google.js', defer: true },
      { src: '/js/pixel.js', defer: true },
      //Messenger chat
      { src: '/js/facebook.js', defer: true }
    ],


    link: [
      //FAVICON
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      // Global External Styles
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
        ingegrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous',
        defer: true
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css',
        defer: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#d83b00' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    // SCSS file in the project
    '@/assets/style/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    { src: '@/plugins/vue-typer', ssr: false },
    { src: '~/plugins/vue-masonry-css' },
    { src: '~/plugins/vue-google-map' },
    { src: '~/plugins/directives' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'vuetify-dialog/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Middleware Express
  */
  serverMiddleware: [
    '~/api/contact'
  ],

  /*
  ** ENVIRONMENT VARS
  */
  env: {},

  /*
  ** Build configuration
  */
  build: {
    vendors: ['babel-polyfill'],

    transpile: [/^vue2-google.*/, /^vuetify-dialog.*/, /^vuedl.*/],

    /*
   ** You can extend webpack config here
   */
    extend(config, ctx) {

    //  GOOGLE MAPS
      if (!ctx.isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals=[function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        }]
      }

    },

  }
}
