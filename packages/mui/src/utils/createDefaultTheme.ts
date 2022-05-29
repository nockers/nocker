import { createTheme, ThemeOptions } from "@mui/material"
import { createDefaultThemeOptions } from "./createDefaultThemeOptions"

export const createDefaultTheme = (
  colorMode: "dark" | "light",
): ThemeOptions => {
  const themeOptions = createDefaultThemeOptions(colorMode)

  return createTheme(themeOptions)
}
