import React from "react";

import { Box, Typography } from "@mui/material";

import Link from "../Link";

type NavigationBarLinkType = { linkText: string; linkTo: string };

function NavigationBarLink(props: NavigationBarLinkType) {
  const { linkText, linkTo } = props;

  return (
    <Box p={0.5}>
      <Typography variant="button">
        <Link to={linkTo} color="primary">
          {linkText}
        </Link>
      </Typography>
    </Box>
  );
}

export default NavigationBarLink;
