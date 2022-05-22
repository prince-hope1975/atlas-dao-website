import React from "react";
import astronaut from "../../images/parallax/astronaut.png";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery, useTheme } from "@mui/material";

const Astronaut = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Parallax scale={[isMobile ? 0.5 : 1, 0]}>
      <img src={astronaut} id={"#astronaut"} />
    </Parallax>
  );
};

export default Astronaut;
