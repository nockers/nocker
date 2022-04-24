import { colors, createTheme } from "@mui/material"

export const createDefaultTheme = (mode: "dark" | "light") => {
  const isDarkMode = mode == "dark"

  return createTheme({
    palette: { mode },
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
        styleOverrides: {
          root: {
            borderRadius: "9999px", // roundedLevel * 2,
            textTransform: "none",
          },
          text: {
            fontSize: "0.8rem",
            color: isDarkMode ? "transparent" : colors.grey[800],
            background: isDarkMode ? colors.grey[900] : colors.grey[50],
          },
        },
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            borderRadius: 8,
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
          variant: mode === "dark" ? "elevation" : "outlined",
        },
        styleOverrides: {
          rounded: {
            borderRadius: 8,
          },
        },
      },
    },
  })
}
