import { createTheme, Theme } from "@mui/material"
import { createDefaultThemeOptions } from "./createDefaultThemeOptions"

export const createDefaultTheme = (colorMode: "dark" | "light"): Theme => {
  const themeOptions = createDefaultThemeOptions(colorMode)

  return createTheme(themeOptions)
}
