import { ThemeDefinition } from "vuetify";
import colors from 'vuetify/lib/util/colors'

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";

// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    // background: "#edf1f4",
    // surface: "#FFFFFF",
    primary: colors.orange.darken2,
    secondary: colors.grey.darken3,
    accent: colors.teal.accent4,
    info: colors.lightBlue.base,
    warning: colors.amber.darken4,
    error: colors.deepOrange.accent4,
    success: colors.green.darken1
  },
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = "dark";
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    // background: twColors.slate[950],
    // surface: twColors.slate[900],
    primary: colors.orange.darken2,
    secondary: colors.grey.darken3,
    accent: colors.teal.accent3,
    info: colors.lightBlue.base,
    warning: colors.amber.darken4,
    error: colors.deepOrange.accent4,
    success: colors.green.darken1
  },
};
