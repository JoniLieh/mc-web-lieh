import { type ThemeDefinition } from "vuetify";
import vuetifyColors from 'vuetify/lib/util/colors.mjs'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#edf1f4",
    surface: "#FFFFFF",
    primary: vuetifyColors.orange.darken2,
    secondary: vuetifyColors.grey.darken3,
    accent: vuetifyColors.teal.accent4,
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    // background: "#edf1f4",
    // surface: "#FFFFFF",
    primary: vuetifyColors.orange.darken2,
    secondary: vuetifyColors.grey.darken3,
    accent: vuetifyColors.teal.accent3,
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
  }
}