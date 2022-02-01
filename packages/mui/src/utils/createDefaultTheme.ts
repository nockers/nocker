import { createTheme } from "@mui/material"

export const createDefaultTheme = (mode: "dark" | "light") => {
  return createTheme({
    palette: { mode },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
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
            borderRadius: 20,
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
