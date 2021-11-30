import { Container } from "@mui/material";
import React from "react";
import ImageHeader from "../by-the-marina-theme/components/layout/ImageHeader";

import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_ca-coast-ocean.jpg";

export default function AboutPage() {
  const imageCaption =
    "Shot along the CA coast, during my roadtrip in Summer 2018.";
  return (
    <Container maxWidth="lg">
      <ImageHeader
        imageSrc={headerImage}
        imageAltTitle=""
        imageCaption={imageCaption}
      />
    </Container>
  );
}
