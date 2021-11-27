import React, { ReactNode } from "react";

import { Box } from "@mui/material/";
import TopNavigationBar from "./TopNavigationBar";
import Footer from "./footer/Footer";
import Copyright from "./footer/Copyright";

type ImageHeaderProps = {
  imageSrc: string;
  imageAltTitle: string;
  imageCaption: string;
  imageOverlayText?: string;
};

function ImageHeader(props: ImageHeaderProps) {
  const { imageSrc, imageAltTitle, imageCaption, imageOverlayText } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default ImageHeader;
