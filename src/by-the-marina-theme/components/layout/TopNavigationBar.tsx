import React from "react";
import { navigate } from "gatsby";

import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import flagNMHeart from "../../assets/svg/TurquoiseNMHeart.svg";

import { useScreenSize } from "../../hooks/useScreenSize";
import Link from "../Link";
import { ColorModeContext } from "../../../../plugins/gatsby-plugin-top-layout/useAppTheme";
import { white } from "../../../theme";
import NavigationBarLink from "./NavigationBarLink";

export const TOP_BAR_HEIGHT_MOBILE = 56;
export const TOP_BAR_HEIGHT_DESKTOP = 78;

function TopNavigationBar() {
  const { isMobileView } = useScreenSize();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            p={1}
            mr={1}
            sx={{ height: 80, color: "#000" }}
            component="img"
            src={flagNMHeart}
            onClick={() => navigate("/")}
          />
        </Box>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ alignItems: "center" }}
        >
          <NavigationBarLink linkTo="/my-story" linkText="My Story" />
          <NavigationBarLink linkTo="/my-projects" linkText="My Projects" />
          <NavigationBarLink linkTo="/my-resume" linkText="My Resume" />
          <NavigationBarLink linkTo="/contact" linkText="Contact" />
          <NavigationBarLink linkTo="/about" linkText="About" />
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ paddingRight: 1 }}
            color="primary"
            aria-label="toggle dark code"
            onClick={() => colorMode.toggleColorMode()}
          >
            {colorMode.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNavigationBar;
