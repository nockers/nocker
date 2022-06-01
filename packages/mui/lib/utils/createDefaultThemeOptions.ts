import { ThemeOptions } from "@mui/material"

export const createDefaultThemeOptions = (
  colorMode: "dark" | "light",
): ThemeOptions => {
  return {
    palette: {
      mode: colorMode,
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
      fontFamily: ["'M PLUS 1 Code'", "sans-serif"].join(","),
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
        defaultProps: {
          variant: colorMode === "dark" ? "elevation" : "outlined",
        },
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
