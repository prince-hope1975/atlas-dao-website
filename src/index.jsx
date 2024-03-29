// import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { ParallaxProvider } from "react-scroll-parallax";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#1976d2",
//     },
//   },
// });

// const darkTheme2 = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#197002",
//     },
//   },
// });

const themeOptions_ligth = createTheme({
  typography: {
    fontFamily: ["Russo One", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#090b1e",
    },
    secondary: {
      main: "#065196",
    },
  },
});

render(
  <ThemeProvider theme={themeOptions_ligth}>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </ThemeProvider>,
  document.getElementById("app")
);
