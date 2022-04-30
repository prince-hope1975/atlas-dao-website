import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Divider = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          color: "#3c48cb",
          textShadow: "1px 1px 1px rgba(0, 0, 0, .45)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "&::before, &::after": {
            content: '""',
            display: "block",
            height: "0.19em",
            minWidth: "30vw",
          },

          "&::before": {
            background:
              "linear-gradient(to right, rgba(240,240,240,0), #3c48cb)",
            marginRight: "2vh",
          },

          "&::after": {
            background:
              "linear-gradient(to left, rgba(240,240,240,0), #3c48cb)",
            marginLeft: "2vh",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

Divider.propTypes = {
  children: PropTypes.any,
};

export default Divider;
