// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// PWA Config
const title = 'NA - NuxtApp';
const shortTitle = 'NA - NuxtApp';
const description = 'My App description'

const config: NuxtConfig = {
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    // layoutTransition: { name: 'page', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Variabes to access on runtime for nuxt backend and public in browser
  runtimeConfig: {
    public: {}
  },

  // import styles
  css: ['@/assets/main.scss'],
  //...
  build: {
    transpile: ['vuetify'],
  },
  buildModules: ['@nuxt/typescript-build'],

  modules: [
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'nuxt-security',
    // @ts-ignore
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({
            autoImport: true
          })
        )
      );
    },
  ],

  experimental: {
    inlineSSRStyles: false, // for production build
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    }
  },
  // https://nitro.unjs.io/guide/routing#route-rules
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    }
  },
  
  security: {
    headers: {
      // load embedded images
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: '#003b79',
      description: description,
      // gona look like an app
      display: "standalone",
      icons: [
        {
          src: 'images/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'images/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'images/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'images/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
    workbox: {
      navigateFallback: null,
      cleanupOutdatedCaches: true,
      globPatterns: ['**/*.{json,ico,svg,ttf,woff,css,scss,txt,jpg,png,woff2,mjs,otf,ani}'], // files to cache in prod
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }, {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
    }
  },

  imports: {
    autoImport: true,
    dirs: [
      // scan all modules within given directory
      'composables/**',
      '../types/*.ts',
      '../types/**/*.ts'
    ]
  },

  devtools: {
    enabled: !IS_PRODUCTION,
  },
}

export default config