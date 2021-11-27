import { createTheme, colors, PaletteMode } from "@mui/material";

// additional colors
export const black = "#1E1E1E";
export const granite = "#565656";
export const aluminum = "#999999";
export const lightGray = "#EDEDED";
export const alabaster = "#FAFAFA";
export const white = "#FFFFFF";
export const whiteTransparent = "#FFFFFF00";

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
