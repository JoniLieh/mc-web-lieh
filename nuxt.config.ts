import vuetify from 'vite-plugin-vuetify';
import { defineNuxtConfig } from 'nuxt/config'

// PWA Config
const title = 'JoniLieh-MC-Server';
const shortTitle = 'JoniLieh-MC-Server';
const description = 'Webseite für den Minecraft Server von JoniLieh'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ['vuetify/styles', '@/assets/main.scss', '@/assets/vuetify.variables.scss', '@mdi/font/css/materialdesignicons.min.css'],
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ['vuetify'] },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@nuxt/devtools',
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    }
  ],

  // vite: {
  //   ssr: {
  //     noExternal: ['vuetify'], // add the vuetify vite plugin
  //   },
  // },

  nitro: {
    // https://nitro.unjs.io/config/#routerules
  },
  
  runtimeConfig: {
  },

  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },

  app: {
    head: {
      title,
      titleTemplate: '%s | JoniLieh-MC-Server',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
      ],
    },
  },

  

  pwa: {
    meta: {
      name: shortTitle,
      theme_color: '#003b79',
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: '#003b79',
      description: description,
    },
  },

  imports: {
    dirs: [
      // scan all modules within given directory
      'composables/**'
    ]
  },
});
