import * as React from "react";
import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import { getPaletteDesignTokens } from "../../src/theme";

export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

function useAppTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = React.useMemo(() => {
    return {
      mode,
      toggleColorMode: () => {
        console.log("togglin");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    };
  }, [mode]);

  // Update the theme only if the mode changes
  const appTheme = React.useMemo(() => {
    return createTheme({
      ...getPaletteDesignTokens(mode),
    });
  }, [mode]);

  return { colorMode, appTheme };
}

export { useAppTheme };
