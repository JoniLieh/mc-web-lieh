// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { md3 } from 'vuetify/blueprints'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { light, dark } from '~/assets/vuetifyThemes'

// Translations provided by Vuetify
import { de, en } from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    blueprint: md3,
    ssr: true,
    locale: {
      locale: 'de',
      fallback: 'en',
      messages: { de, en },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark
      },
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 4,
        darken: 4,
      },
    },
    // defaults: {
    //   global: {
    //     rounded: "lg",
    //   }
    // }

  })
  app.vueApp.use(vuetify)
})
