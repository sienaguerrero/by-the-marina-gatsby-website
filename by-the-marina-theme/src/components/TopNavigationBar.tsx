import React from "react";
import { ColorModeContext } from "../../plugins/gatsby-plugin-top-layout/TopLayout";

import { Box, IconButton, Stack } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";

import flagNMHeart from "../images/TurquoiseNMHeart.svg";

import { useScreenSize } from "../hooks/useScreenSize";
import Link from "./Link";

export const TOP_BAR_HEIGHT_MOBILE = 56;
export const TOP_BAR_HEIGHT_DESKTOP = 78;

function TopNavigationBar() {
  const { isMobileView } = useScreenSize();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      mt={
        isMobileView
          ? `${TOP_BAR_HEIGHT_MOBILE}px`
          : `${TOP_BAR_HEIGHT_DESKTOP}px`
      }
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            mr={1}
            sx={{ root: { "& svg": { color: "#34f" } } }}
            component="img"
            src={flagNMHeart}
          ></Box>

          <Link to="/" color="secondary">
            Siena Guerrero
          </Link>
        </Box>
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
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
            {colorMode.mode === "light" ? (
              <NightsStayIcon />
            ) : (
              <NightsStayIcon />
            )}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default TopNavigationBar;
