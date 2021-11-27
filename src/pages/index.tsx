import * as React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import sienaAndRubyImage from "../images/ruby-and-siena.jpg";

export default function IndexPage() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const title = "Siena Maria Guerrero";
  const image_fullwidth = "/headers/header_ca-coast-ocean.jpg";
  const caption = "Shot along the CA coast, during my roadtrip in Summer 2018.";

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
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
            <Box sx={{ flexGrow: 1, border: "1px solid #D3D3D3" }}>
              <Box
                component="img"
                src={sienaAndRubyImage}
                sx={{ width: "250px" }}
              />
            </Box>
            <Box sx={{ flexGrow: 2, border: "1px solid #D3D3D3" }}>info</Box>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}
