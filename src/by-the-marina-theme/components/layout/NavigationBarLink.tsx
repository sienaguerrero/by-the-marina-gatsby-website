import React from "react";
import { navigate } from "gatsby";

import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";

import { useScreenSize } from "../../hooks/useScreenSize";
import Link from "../Link";
import { ColorModeContext } from "../../../../plugins/gatsby-plugin-top-layout/useAppTheme";
import { white } from "../../../theme";

type NavigationBarLinkType = { linkText: string; linkTo: string };

function NavigationBarLink(props: NavigationBarLinkType) {
  const { linkText, linkTo } = props;

  // hooks
  const { isMobileView } = useScreenSize();
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: isMobileView ? 2 : 3,
        ":hover": { backgroundColor: theme.palette.secondary.main },
      }}
    >
      <Link to={linkTo} color="primary">
        {linkText}
      </Link>
    </Box>
  );
}

export default NavigationBarLink;
