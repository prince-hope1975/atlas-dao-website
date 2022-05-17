import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import { Grid } from "@mui/material";

const ParalaxSectionTitle = ({ title }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
        marginBottom: "80px",
      }}
      xs={12}
      sm={12}
      md={12}
      lg={12}
    >
      <Parallax
        style={{ textAlign: "center" }}
        opacity={[0, 1]}
        easing={[0.76, 1.17, 0.52, 1]}
      >
        <span className="section-title">{title}</span>
      </Parallax>
    </Grid>
  );
};

ParalaxSectionTitle.propTypes = { title: PropTypes.string };

export default ParalaxSectionTitle;
