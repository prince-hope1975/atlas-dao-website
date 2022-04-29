import React from "react";
import { StepConnector, stepConnectorClasses } from "@mui/material";

const ColorConnector = () => {
  return (
    <StepConnector
      sx={{
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 28,
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: (theme) => theme.palette.common.white,
            // backgroundImage:
            //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: (theme) => theme.palette.common.white,
            // backgroundImage:
            //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          height: 3,
          border: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
          borderRadius: 1,
        },
      }}
    />
  );
};

ColorConnector.propTypes = {};

export default ColorConnector;
