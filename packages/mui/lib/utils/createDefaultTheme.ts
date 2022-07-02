import { createTheme, PaletteMode, Theme } from "@mui/material"
import { createDefaultThemeOptions } from "./createDefaultThemeOptions"

type Props = {
  paletteMode: PaletteMode
}

export const createDefaultTheme = (props: Props): Theme => {
  const themeOptions = createDefaultThemeOptions(props)

  return createTheme(themeOptions)
}
