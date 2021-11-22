import { createTheme, colors, PaletteMode } from "@mui/material";

export const getPaletteDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" && {
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
    }),
  },
});

// A custom theme for this app
const getTheme = (mode: PaletteMode) =>
  createTheme({
    ...getPaletteDesignTokens(mode),
  });

export default getTheme;
