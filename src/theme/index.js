import { createTheme } from "@material-ui/core"
import { colors } from '@material-ui/core';
import typography from "./typography"
import _ from "lodash"

const baseConfig = {
  typography
}

const themes = [
  {
    darkMode: false,
    palette: {
      type: 'light',
      primary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: colors.orange.A700,
        light: colors.orange.A200,
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    darkMode: true,
    palette: {
      type: 'dark',
      primary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
  },
];

export function newTheme(settings = {}) {
  const themeConfig = themes.find(t => t.darkMode === settings.settings.darkMode)
  return createTheme(_.merge({}, baseConfig, themeConfig))
}

