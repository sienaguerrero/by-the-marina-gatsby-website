import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { useAppTheme } from "./useAppTheme";

export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});
export default function TopLayout(props) {
  const { appTheme, colorMode } = useAppTheme();

  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
