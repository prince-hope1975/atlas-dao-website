import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const ParalaxSectionTitle = ({
  title,
  color = "#f5f5f5",
  boxShadow = "#919191",
  home = false,
}) => {
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
        <Typography
          sx={{
            letterSpacing: theme.spacing(1),
            fontSize: isMobile
              ? theme.typography.pxToRem(40)
              : theme.typography.pxToRem(80),
            textTransform: "uppercase",
            fontWeight: "bold",
            color: color,
            textShadow: `1px 1px 1px ${boxShadow}, 1px 2px 1px ${boxShadow}, 1px 3px 1px ${boxShadow}, 1px 4px 1px ${boxShadow}, 1px 5px 1px ${boxShadow}, 1px 6px 1px ${boxShadow}, 1px 7px 1px ${boxShadow}, 1px 8px 1px ${boxShadow}, 1px 9px 1px ${boxShadow}, 1px 10px 1px ${boxShadow}, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4)`,
          }}
        >
          {title}
        </Typography>
      </Parallax>
    </Grid>
  );
};

ParalaxSectionTitle.propTypes = { title: PropTypes.string };

export default ParalaxSectionTitle;
