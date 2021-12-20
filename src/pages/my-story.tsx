import { Container, Typography } from "@mui/material";
import React from "react";
import ImageHeader from "../by-the-marina-theme/components/layout/header/ImageHeader";

import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_ecuador.jpg";

// https://intuitiveexplanations.com/
// https://www.taniarascia.com/
// https://carolchen.me

export default function AboutPage() {
  const imageCaption =
    "On the road to Alausí, Ecuador, where my abuela was born.";
  return (
    <>
      <ImageHeader
        imageSrc={headerImage}
        imageAltTitle=""
        imageCaption={imageCaption}
      />
      <Container maxWidth="lg">
        {/* <MDXProvider>
          <MDXRenderer frontmatter={data.frontmatter}>{data.body}</MDXRenderer>
        </MDXProvider> */}

        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Container>
    </>
  );
}
