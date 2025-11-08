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
    defaults: {
      // global: {
      //   rounded: "lg",
      // }
      VTextField: {
        color: "secondary",
        rounded: "lg"
      },
      VCheckbox: {
        color: "secondary",
      },
      VCheckboxBtn: {
        color: "secondary",
      },
      VSwitch: {
        color: "secondary",
      },
      VMenu: {
        openOnClick: true, // for touch devices
      },
      // VBottomNavigation: {
      //   density: 'compact'
      // },
      // VAppBar: {
      //   density: 'compact'
      // },
      VBtn: {
        rounded: "lg",
        color: "theme-variant"
      },
      VBtnToggle: {
        rounded: "lg"
      },
      VListItem: {
        rounded: "lg"
      },
      VAvatar: {
        rounded: "lg"
      },
      VBtnGroup: {
        rounded: "lg"
      },
      VAppBar: {
        rounded: "0"
      },
      VSystemBar: {
        rounded: "0"
      },
      VFooter: {
        rounded: "0"
      },
      VToolbar: {
        rounded: "true"
      },
      VImg: {
        rounded: "0"
      },
      VTabs: {
        selectedClass: 'font-weight-bold',
        // rounded: "lg"
      },
      VTab: {
        rounded: "0"
      }
    }

  })
  app.vueApp.use(vuetify)
})
