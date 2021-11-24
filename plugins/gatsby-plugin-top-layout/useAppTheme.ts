import * as React from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";
import getTheme from "../../src/theme";

export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

function useAppTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = {
    mode,
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  };

  // Update the theme only if the mode changes
  const appTheme = React.useMemo(() => getTheme(mode), [mode]);
  return { colorMode, appTheme };
}

export { useAppTheme };
