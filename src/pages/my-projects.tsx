import { Typography } from "@mui/material";
import React from "react";

// images
import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_purple-flower.jpg";

// components
import ImageHeaderLayout from "../by-the-marina-theme/components/layout/ImageHeaderLayout";

export default function ProjectsPage() {
  const imageCaption =
    "Flowering succulent in Newbury Park, CA during Summer 2018.";
  return (
    <ImageHeaderLayout headerImage={headerImage} imageCaption={imageCaption}>
      <Typography>Harvey Mudd Wellness Greenhouse</Typography>

      <Typography>Groover Web App</Typography>
      <Typography>Major Projects</Typography>
      <Typography>Major Projects</Typography>

      <Typography>Minor Projects</Typography>
      <Typography> Academic Writing </Typography>
      <Typography> Human Data Science Ethics Paper</Typography>
      <Typography></Typography>
      <Typography></Typography>
    </ImageHeaderLayout>
  );
}
