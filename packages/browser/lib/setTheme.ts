import { createTheme, ThemeOptions } from "@mui/material"
import { deepmerge } from "@mui/utils"
import { createDefaultThemeOptions } from "@nocker/mui"
import { State } from "./models"

type Props = ThemeOptions | null

export const setTheme = async (themeOptions?: Props) => {
  if (typeof themeOptions === "undefined" || themeOptions === null) {
    return null
  }

  const state = new State()

  const defaultThemeOptions = createDefaultThemeOptions({
    paletteMode: themeOptions?.palette?.mode ?? "light",
  })

  const mergedThemeOptions = deepmerge(defaultThemeOptions, themeOptions)

  const mergedTheme = createTheme(mergedThemeOptions)

  state.setTheme(mergedTheme)

  return null
}
