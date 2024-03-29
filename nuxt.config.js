export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-page',
    htmlAttrs: {},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'facebook-domain-verification',
        content: 'z82fevp0q8u9qy569here1gkzis5bo',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    '~/plugins/fontawesome.js',
    { src: 'plugins/owl.js', ssr: false }, // Only works on client side
  ],

  router: {
    base: '/',
    // middleware: 'language'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: {
  //         "navbar":{
  //           "Zain":"Zain",
  //           "Travel":"Travel",
  //           "Home":"Home",
  //           "PNR_Search":"PNR Search",
  //           "Ticket_Cancellation":"Ticket Cancellation",
  //           "Contact_Us":"Contact Us",
  //           "About_Us":"About Us"
  //       }
  //             },
  //       ar: {
  //         "navbar":{
  //           "Zain":"زين",
  //           "Travel":"للسياحة",
  //           "Home":"الصفحة الاساسية",
  //           "PNR_Search":"بحث عن رحلة",
  //           "Ticket_Cancellation":"إلغاء تذكرة",
  //           "Contact_Us":"تواصل معنا",
  //           "About_Us":"اعرف عنا"
  //       }        },

  //     }
  //   }
  // },

  i18n: {
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
        dir: 'ltr',
      },
      {
        code: 'ar',
        file: 'ar.json',
        name: 'Arabic',
        dir: 'rtl',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'ar',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
