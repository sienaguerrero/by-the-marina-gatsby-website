import * as React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import YAMLData from "../content/_config.yaml";
import sienaAndRubyImage from "../images/ruby-and-siena.jpg";
import ImageHeader from "../by-the-marina-theme/components/layout/header/ImageHeader";
import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_ca-coast-ocean.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

export default function IndexPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageCaption =
    "Shot along the CA coast, during my roadtrip in Summer 2018.";

  return (
    <>
      <ImageHeader
        imageSrc={headerImage}
        imageAltTitle=""
        imageCaption={imageCaption}
        imageOverlayText={YAMLData.name}
      />
      <Container maxWidth="lg">
        <Box sx={{ my: 1.5 }}>
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
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  minWidth: "220px",
                  //border: `1px solid ${theme.palette.primary.main}`,
                }}
                m="auto"
              >
                <Box
                  mb={1}
                  sx={{
                    width: "80%",
                    backgroundColor: theme.palette.background.paper,
                    p: 1,
                    flex: 2,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      color="primary"
                      href={`https://www.linkedin.com/${YAMLData.socialMedia.github}`}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={`https://www.linkedin.com/${YAMLData.socialMedia.linkedin}`}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={`mailto:${YAMLData.email}`}
                    >
                      <EmailIcon />
                    </IconButton>
                  </Stack>
                </Box>

                <Box
                  p={1}
                  component="img"
                  src={sienaAndRubyImage}
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    width: "220px",
                    height: "220px",
                  }}
                />

                <Box
                  mt={1}
                  sx={{
                    width: "80%",
                    backgroundColor: theme.palette.background.paper,
                    p: 1,
                    flex: 2,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Pacifico",
                      fontSize: 24,
                    }}
                    color="primary"
                  >
                    {YAMLData.location}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  p: 3,
                  flex: 2,
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <Box mb={1}>
                  <Typography
                    display="inline"
                    variant="h4"
                    sx={{ fontFamily: "Pacifico", mr: 1 }}
                  >
                    Hello,
                  </Typography>
                  <Typography display="inline">my name is Siena!</Typography>
                </Box>

                <Typography sx={{ mb: 1 }}>
                  I'm a Software Engineer at{" "}
                  <Link href="https://www.swoopapp.com">Swoop, Inc</Link>, an
                  organization that shares my passion for powerful, efficient,
                  and elegant design.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Before entering the world of startups, I studied Computer
                  Science at{" "}
                  <Link href="https://www.hmc.edu">Harvey Mudd College.</Link>{" "}
                  You can see projects illustrating some of my other passions
                  and academic pursuits <Link href="/my-projects">here.</Link>
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Check out my resume and{" "}
                  <Link
                    href="mailto:
                  hello@sienaguerrero.com"
                  >
                    send me an email
                  </Link>{" "}
                  for inquiries.
                </Typography>

                <Box mt={1}>
                  <Accordion square elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{ paddingX: 0 }}
                    >
                      <Typography variant="subtitle2">
                        A bit more about me...
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        My academic passions center around Human-Computer
                        Interactions and Brain-Computer Interfaces. Some of my
                        mini-passions include web development, open-source
                        technology, and empowering women in tech.
                      </Typography>

                      <Typography sx={{ mb: 1 }}>
                        I am particularly interested in improving human
                        interactions with technology in our digital world by
                        bringing together new concepts and research from the
                        fields of psychology, data science, and computing. I
                        strongly believe in the need for experimental and
                        creative ideas to drive innovation.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Container>
    </>
  );
}
