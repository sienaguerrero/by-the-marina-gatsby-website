import * as React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { ColorModeContext } from "../../plugins/gatsby-plugin-top-layout/TopLayout";

export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Container maxWidth="lg">
      <Box>
        <Button
          onClick={() => {
            console.log("toggle");
            colorMode.toggleColorMode();
          }}
        >
          Dark Mode
        </Button>
      </Box>
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box mr={1}>Heart Icon</Box>
            <Link to="/" color="secondary">
              Name
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
          </Stack>
        </Box>

        <Box> Image </Box>

        <Container maxWidth="md">
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
            spacing={1}
          >
            <Box sx={{ flexGrow: 1, border: "1px solid #D3D3D3" }}>info</Box>
            <Box sx={{ flexGrow: 2, border: "1px solid #D3D3D3" }}>info</Box>
          </Stack>
        </Container>
      </Box>
      <Copyright />
    </Container>
  );
}
