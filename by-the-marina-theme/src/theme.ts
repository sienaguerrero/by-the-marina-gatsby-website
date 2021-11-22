import { createTheme, colors, PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#96dbdb",
          },
          secondary: {
            main: "#fff0aa",
          },
          error: {
            main: colors.red.A400,
          },
          background: {
            default: `#fff`,
          },
        }
      : {
          primary: {
            main: "#fff0aa",
          },
          secondary: {
            main: "#fff0aa",
          },
          error: {
            main: colors.red.A400,
          },
          background: {
            default: `#fff`,
          },
        }),
  },
});

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#96dbdb",
    },
    secondary: {
      main: "#fff0aa",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
  },
});

export default theme;
