export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui-dApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '/js/jquery.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/bootstrap.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/wow.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.isotope.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/easing.js',
        type: 'text/javascript',
      },
      {
        src: '/js/owl.carousel.js',
        type: 'text/javascript',
      },
      {
        src: '/js/validation.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.magnific-popup.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/enquire.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.plugin.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.countTo.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.countdown.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.lazy.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery.lazy.plugins.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/designesia.js',
        type: 'text/javascript',
      },
    ],
  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/bootstrap-grid.min.css',
    '~/assets/css/bootstrap-reboot.min.css',
    '~/assets/css/animate.css',
    '~/assets/css/owl.carousel.css',
    '~/assets/css/owl.theme.css',
    '~/assets/css/owl.transitions.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/jquery.countdown.css',
    '~/assets/css/style.css',
    '~/assets/css/coloring.css',
    '~/assets/css/colors/scheme-01.css'
  ],

  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
   
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
