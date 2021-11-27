import React from "react";

import { Box, Card, PaletteMode, Paper, useTheme } from "@mui/material";
import { getPaletteDesignTokens } from "../../../../theme";
import { useAppTheme } from "../../../../../plugins/gatsby-plugin-top-layout/useAppTheme";
import { useScreenSize } from "../../../hooks/useScreenSize";

export const FOOTER_HEIGHT_MOBILE = 56;
export const FOOTER_HEIGHT_DESKTOP = 78;

function Footer() {
  const theme = useTheme();
  const { isMobileView } = useScreenSize();

  return (
    <Box sx={{ height: 240 }}>
      <Paper
        square
        {...(theme.palette.mode !== "dark" && { variant: "outlined" })}
        {...(theme.palette.mode === "dark" && { elevation: 6 })}
        sx={{ padding: 3 }}
      ></Paper>
    </Box>
  );
}

export default Footer;
