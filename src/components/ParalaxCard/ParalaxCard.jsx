import React from "react";
import PropTypes from "prop-types";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

const ParalaxCard = ({ data, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const direction = index % 2 == 0 ? ["300px", "0px"] : ["-300px", "0px"];

  return (
    <Grid
      item
      container
      spacing={2}
      xs={12}
      sm={12}
      md={12}
      lg={12}
      justifyContent="center"
    >
      <Parallax
        translateX={direction}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "10px",
          justifyContent: "flex-start",
          alignItems: isMobile ? "center" : "",
          gap: "16px",
        }}
        opacity={[0, 1]}
        easing={[0.46, 1.14, 0.26, 1.01]}
      >
        <div>
          <img style={{ width: "150px", height: "150px" }} src={data.image} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "",
            gap: "8px",
          }}
        >
          <div>{data.title}</div>
          <div
            style={{
              textAlign: isMobile ? "center" : "",
            }}
          >
            {data.content}
          </div>
        </div>
      </Parallax>
    </Grid>
  );
};

ParalaxCard.propTypes = {
  data: PropTypes.any,
  index: PropTypes.any,
};

export default ParalaxCard;
