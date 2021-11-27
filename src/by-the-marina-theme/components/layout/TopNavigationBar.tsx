import React from "react";
import { navigate } from "gatsby";

import { Box, IconButton, Stack } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import flagNMHeart from "../../assets/svg/TurquoiseNMHeart.svg";

import { useScreenSize } from "../../hooks/useScreenSize";
import Link from "../Link";
import { ColorModeContext } from "../../../../plugins/gatsby-plugin-top-layout/useAppTheme";

export const TOP_BAR_HEIGHT_MOBILE = 56;
export const TOP_BAR_HEIGHT_DESKTOP = 78;

function TopNavigationBar() {
  const { isMobileView } = useScreenSize();
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
          <Link to="/my-story" color="secondary">
            My Story
          </Link>
          <Link to="/my-projects" color="secondary">
            My Projects
          </Link>
          <Link to="/about" color="secondary">
            My Resume
          </Link>
          <Link to="/contact" color="secondary">
            Contact
          </Link>
          <Link to="/about" color="secondary">
            About
          </Link>
          <IconButton
            color="primary"
            aria-label="toggle dark code"
            onClick={() => colorMode.toggleColorMode()}
          >
            {colorMode.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default TopNavigationBar;
