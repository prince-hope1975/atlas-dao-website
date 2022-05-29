import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const StarWarsEffect = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Parallax scaleX={[2, 0]} translateY={[0, -100]}>
      <p
        style={{
          textAlign: "center",
          width: "100wv",
          padding: theme.spacing(5),
          fontSize: theme.typography.pxToRem(isMobile ? 20 : 30),
          letterSpacing: "2px",
        }}
      >
        Atlas DAO is a Community focused DAO on empowering and creating
      </p>
    </Parallax>
  );
};

export default StarWarsEffect;
