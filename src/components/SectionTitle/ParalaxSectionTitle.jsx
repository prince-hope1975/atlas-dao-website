import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const ParalaxSectionTitle = ({ title, home = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: home ? "0" : "80px",
        marginBottom: home ? "0" : "80px",
        backgroundColor: home ? "black" : "transparent",
        height: isMobile ? "100px" : null,
        boxShadow: home ? "0 30px 50px 50px rgba(0, 0, 0, 0.9)" : null,
      }}
      xs={12}
      sm={12}
      md={12}
      lg={12}
    >
      <Parallax
        style={{ textAlign: "center" }}
        opacity={[0, 1.5]}
        easing={[0.76, 1.17, 0.52, 1]}
      >
        <h1
          style={{
            fontSize: "clamp(2.7rem, calc(7vw + 1px) , 5rem)",
            padding: "0px 1rem",
          }}
        >
          {title}
        </h1>
      </Parallax>
    </Grid>
  );
};

ParalaxSectionTitle.propTypes = { title: PropTypes.string };

export default ParalaxSectionTitle;
