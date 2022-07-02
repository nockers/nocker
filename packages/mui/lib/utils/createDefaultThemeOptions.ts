import { PaletteMode, ThemeOptions } from "@mui/material"

type Props = {
  paletteMode: PaletteMode
}

export const createDefaultThemeOptions = (props: Props): ThemeOptions => {
  return {
    palette: {
      mode: props.paletteMode,
    },
    shadows: [
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ],
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "'Segoe UI semibold'",
        "'Helvetica Neue'",
        "HelveticaNeue",
        "YuGothic",
        "'Yu Gothic'",
        "'Segoe UI'",
        "Verdana",
        "Meiryo",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: "bold",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          padding: {
            paddingTop: 2,
            paddingBottom: 2,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 4,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 8,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            borderRadius: 8,
          },
        },
      },
    },
  }
}
