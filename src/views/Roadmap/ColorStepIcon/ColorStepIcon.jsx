import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import roadmap2 from "../../../images/roadmap/roadmap_2.svg";
import roadmap3 from "../../../images/roadmap/roadmap_3.svg";
import { RocketLaunch } from "@mui/icons-material";

const ColorStepIcon = ({ active, completed, className, icon }) => {
  const images = {
    1: <img style={{ width: "40px", color: "white" }} src={roadmap2} />,
    2: <img style={{ width: "40px", color: "white" }} src={roadmap3} />,
    3: <RocketLaunch sx={{ fontSize: "30px", color: "#3c48cb" }} />,
  };

  return (
    <Box
      className={className}
      sx={{
        cursor: "pointer",
        backgroundColor: (theme) => theme.palette.grey[700],
        zIndex: 1,
        width: 60,
        height: 60,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        animation: `scaleAnimation 2s infinite`,
        "@keyframes scaleAnimation": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        ...(active && {
          backgroundColor: (theme) => theme.palette.common.white,
          boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
          animation: "none",
        }),
        ...(completed && {
          backgroundColor: (theme) => theme.palette.common.white,
          animation: "none",
        }),

        // ...(active && {
        //   backgroundImage:
        //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        //   boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
        // }),
        // ...(completed && {
        //   backgroundImage:
        //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        // }),
      }}
    >
      {images[String(icon)]}
    </Box>
  );
};

ColorStepIcon.propTypes = {
  active: PropTypes.any,
  completed: PropTypes.any,
  className: PropTypes.any,
  icon: PropTypes.any,
};

export default ColorStepIcon;
