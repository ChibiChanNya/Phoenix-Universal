const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "",
    titleTemplate: '%s - Phoenix Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Agencia Mexicana de desarrollo de páginas web, marketing digital e imagen corporativa." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/brands.css', ingegrity:'sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX', crossorigin:"anonymous" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css', ingegrity:'sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0', crossorigin:"anonymous" },
      { rel: 'stylesheet', href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"}
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
    '@/assets/style/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    {src:'@/plugins/vue-typer', ssr: false},
    { src: '~/plugins/vue-masonry', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
