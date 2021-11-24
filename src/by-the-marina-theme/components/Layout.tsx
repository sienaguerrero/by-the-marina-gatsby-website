import React, { ReactNode } from "react";

import { Box } from "@mui/material/";
import TopNavigationBar from "./TopNavigationBar";
import Footer from "./Footer";
import Copyright from "./Copyright";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  const { children } = props;

  // hooks

  // derived state

  return (
    <Box display="flex" flexDirection="column">
      {/* Navigation */}
      <TopNavigationBar />
      <Box display="flex" flexDirection="row">
        {/* Main Content */}
        <Box display="flex" flexDirection="column" width="100%" height="100%">
          <Box component="main" sx={{ display: "flex", flexDirection: "row" }}>
            {children}
          </Box>
        </Box>
      </Box>
      {/* Footer Content */}
      <Footer />
      <Copyright />
    </Box>
  );
}

export default Layout;
