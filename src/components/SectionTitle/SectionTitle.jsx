import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const SectionTitle = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginTop: (theme) => theme.spacing(5),
          marginBottom: (theme) => theme.spacing(3),
          letterSpacing: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          textShadow:
            "rgba(10, 189, 240, 0.298039) 5px 5px 0px, rgba(254, 1, 1, 0.298039) -5px -5px 0px",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
