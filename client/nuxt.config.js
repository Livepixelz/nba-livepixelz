export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nba-livepixelz',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/components',
    'nuxt-animejs',
  ],
  googleFonts: {
    families: {
      Archivo: [100, 400, 600, 900],
      'Zilla+Slab': [100, 400, 600, 900],
    },
    display: 'swap',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:4000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // use extend() method for nuxt
    // use extendWebpack() method for quasar
    extend(config, { isServer, isClient }) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
        options: {
          /* ... */
        },
      })
    },
    postcss: {
      plugins: {
        'flex-gap-polyfill': {},
      },
    },
  },
}
