import { createVuetify, IconSet, IconAliases, IconProps } from "vuetify";

import { md3 } from 'vuetify/blueprints'

import { aliases } from 'vuetify/iconsets/mdi'
import { mdi } from 'vuetify/lib/iconsets/mdi';


// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// https://vuetifyjs.com/en/features/global-configuration/

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // components,
    // directives,
    blueprint: md3,
    ssr: true,
    defaults,
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
      // add color variations
      variations: {
        colors: ["primary", "secondary", "accent"],
        lighten: 4,
        darken: 4,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  });
  
  app.vueApp.use(vuetify);
});
