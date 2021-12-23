import React from "react";

import Masonry from "@mui/lab/Masonry";
import {
  Box,
  Container,
  Link,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

// images
import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_purple-flower.jpg";

// components
import ImageHeaderLayout from "../by-the-marina-theme/components/layout/ImageHeaderLayout";
import ProjectCard from "../by-the-marina-theme/components/pages/projects/ProjectCard";

export default function ProjectsPage() {
  const theme = useTheme();

  const imageCaption =
    "Flowering succulent in Newbury Park, CA during Summer 2018.";

  const projects = [
    {
      type: "Major Project",
      projectName: "Harvey Mudd Wellness Greenhouse",
      projectDescription: `The Mudd Wellness Greenhouse, or "Mudd Greenhouse" was a space on campus
      to provide students access to tools, supplies, and storage for all
      gardening-related activities. I helped design and raised money ($2500)
      to build this community greenhouse, oversaw construction and set-up of
      the space including purchasing supplies, and stocked interior with
      furnishings including gardening tools, chairs, shelves, gardening books,
      and a potting station.`,

      endNote: `RIP after a large windstorm in Spring 2020. :(`,
    },
    {
      type: "Major Project",
      projectName: "Groover Web App",
      projectDescription: `Groover is a web app that generate music recommendations based on
      your favorite song's lyrical content. This project was developed
      during "CS121: Software Development" at Harvey Mudd College in
      Spring 2019.`,
      additionalInfo: (
        <Typography>
          **To watch a demo:**{" "}
          <Link href="https://sienaguerrero.com/static/downloads/Groover-Demo.mp4">
            click here
          </Link>
          **To visit the Github repo:**{" "}
          <Link href="https://github.com/sienaguerrero/groover">
            click here
          </Link>
        </Typography>
      ),
    },
    {
      type: "Major Project",
      projectName: "Hippokampus",
      projectDescription: `Hippokampus is an electron app that holds information pertaining to the users contacts and preferences`,
      endNote: `Private Personal Project ;)`,
    },
    {
      type: "Minor Project",
      projectName: "Cuarenta",
      projectDescription: `Java program based on the card game "Cuarenta" (the national card
        game of Ecuador).`,
      additionalInfo: (
        <Typography>
          **To visit the Github repo:**{" "}
          <Link href="https://github.com/sienaguerrero/cuarenta">
            click here
          </Link>
        </Typography>
      ),
    },
    {
      type: "Minor Project",
      projectName: "Climate Change Data Visualization Site",
      projectDescription: `Climate change data visualization website made using graphs from
      Bokeh, an interactive visualization library for Python. This
      project was developed as part of a group final project during
      "CS35: Computer Science for Insight" at Harvey Mudd College in
      Spring 2017.`,
      additionalInfo: (
        <Typography>
          **To visit the Github repo:**{" "}
          <Link href="https://github.com/sienaguerrero/cs35-final-project">
            click here
          </Link>
        </Typography>
      ),
    },
    {
      type: "Academic Paper",
      projectName: "Human Data Science Ethics Paper",
      projectDescription: `A policy memo on socially-assistive robots detailing core issues,
      moral approaches, current contexts, and recommendations for future
      use of this technology. Written at the end of Fall 2018.`,
      additionalInfo: (
        <Typography>
          **To read the paper:**{" "}
          <Link href="https://sienaguerrero.com/downloads/HDSE-policy-memo-social-robots.pdf">
            click here
          </Link>
        </Typography>
      ),
    },
    {
      type: "Academic Paper",
      projectName: "Science, Technology, and Society Paper",
      projectDescription: `A reflection paper on trash innovation, and hope during the
      Anthropocene entitled: "Trash, Hope, and the Anthropocene".`,
      additionalInfo: (
        <Typography>
          **To read the paper:**{" "}
          <Link href="https://sienaguerrero.com/downloads/sts-reflection-trash-hope.pdf">
            click here
          </Link>
        </Typography>
      ),
    },
  ];

  return (
    <ImageHeaderLayout headerImage={headerImage} imageCaption={imageCaption}>
      <Container maxWidth="lg">
        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Major Projects
          </Typography>
          {projects
            .filter((project) => project.type === "Major Project")
            ?.map((project) => {
              const projectName = project.projectName;
              const projectDescription = project.projectDescription;
              const projectEndNote = project.endNote;

              return (
                <ProjectCard
                  projectName={projectName}
                  projectDescription={projectDescription}
                  endNote={projectEndNote}
                />
              );
            })}

          <Typography variant="h3" sx={{ mb: 1 }}>
            Minor Projects
          </Typography>
          <Masonry columns={2} spacing={1}>
            {projects
              .filter((project) => project.type === "Minor Project")
              ?.map((project, index) => {
                const projectName = project.projectName;
                const projectDescription = project.projectDescription;
                const projectEndNote = project.endNote;

                return (
                  <ProjectCard
                    projectName={projectName}
                    projectDescription={projectDescription}
                    endNote={projectEndNote}
                  />
                );
              })}
          </Masonry>

          <Typography variant="h3" sx={{ mb: 1 }}>
            Academic Writing
          </Typography>
          {projects
            .filter((project) => project.type === "Academic Writing")
            ?.map((project) => {
              const projectName = project.projectName;
              const projectDescription = project.projectDescription;
              const projectEndNote = project.endNote;

              return (
                <ProjectCard
                  projectName={projectName}
                  projectDescription={projectDescription}
                  endNote={projectEndNote}
                />
              );
            })}

          <Box
            sx={{
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography variant="h4">Groover Web App</Typography>
            <Typography display="inline" sx={{ fontWeight: "bold" }}>
              Project Info:
            </Typography>
            <Typography display="inline">
              Groover is a web app that generate music recommendations based on
              your favorite song's lyrical content. This project was developed
              during "CS121: Software Development" at Harvey Mudd College in
              Spring 2019. **To watch a demo:** [click
              here](https://sienaguerrero.com/static/downloads/Groover-Demo.mp4)
              **To visit the Github repo:** [click
              here](https://github.com/sienaguerrero/groover)
              {/* \\ **To see it
                in action:** [click here](http://www.groovermusic.net/) _note:
                site may take a while to load on first launch_ \\ */}
            </Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3">Minor Projects</Typography>
          <Box
            sx={{
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography variant="h4">Cuarenta</Typography>
            <Typography display="inline" sx={{ fontWeight: "bold" }}>
              Project Info:
            </Typography>
            <Typography display="inline">
              Java program based on the card game "Cuarenta" (the national card
              game of Ecuador). Currently in development. **To visit the Github
              repo:** [click here](https://github.com/sienaguerrero/cuarenta)
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography variant="h4">
              Climate Change Data Visualization Site
            </Typography>
            <Typography display="inline" sx={{ fontWeight: "bold" }}>
              Project Info:
            </Typography>
            <Typography display="inline">
              Climate change data visualization website made using graphs from
              Bokeh, an interactive visualization library for Python. This
              project was developed as part of a group final project during
              "CS35: Computer Science for Insight" at Harvey Mudd College in
              Spring 2017. **To visit the Github repo:** [click
              here](https://github.com/sienaguerrero/cs35-final-project)
            </Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3">Academic Writing</Typography>
          <Box
            sx={{
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography variant="h4">
              Human Data Science Ethics Paper
            </Typography>
            <Typography display="inline" sx={{ fontWeight: "bold" }}>
              Project Info:
            </Typography>
            <Typography display="inline">
              A policy memo on socially-assistive robots detailing core issues,
              moral approaches, current contexts, and recommendations for future
              use of this technology. Written at the end of Fall 2018. **To read
              the paper:** [click
              here](https://sienaguerrero.com/downloads/HDSE-policy-memo-social-robots.pdf)
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Typography variant="h4">
              Science, Technology, and Society Paper
            </Typography>
            <Typography display="inline" sx={{ fontWeight: "bold" }}>
              Project Info:
            </Typography>
            <Typography display="inline">
              A reflection paper on trash innovation, and hope during the
              Anthropocene entitled: "Trash, Hope, and the Anthropocene". **To
              read the paper:** [click
              here](https://sienaguerrero.com/downloads/sts-reflection-trash-hope.pdf)
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ImageHeaderLayout>
  );
}
