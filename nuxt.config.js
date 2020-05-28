
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portal | A tiny portal to your editor in your browser',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portal provides a real-time connection with your editor. Stay in your browser and instantly see what your CSS changes are actually doing. Just select elements visually and Portal wil automatically find all the relevant CSS in your editor. Save time by getting direct visual feedback on your CSS edits.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: 'stylesheet', href: '/demo/web.css' }
    ],
    script: [
      { src: '/demo/web.js', body: true },
      { src: 'https://gumroad.com/js/gumroad-embed.js', defer: '', body: true }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
