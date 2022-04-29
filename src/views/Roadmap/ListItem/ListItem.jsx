import React from "react";
import PropTypes from "prop-types";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const ListItem = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        textShadow:
          "rgba(10, 189, 240, 0.298039) 3px 3px 0px, rgba(254, 1, 1, 0.298039) -3px -3px 0px",
        margin: "16px 0",
        // padding: "0 50px",
        textAlign: "center",
        fontSize: (theme) =>
          isMobile
            ? theme.typography.pxToRem(18)
            : theme.typography.pxToRem(22),
      }}
    >
      {children}
    </Typography>
  );
};

ListItem.propTypes = {
  children: PropTypes.string,
};

export default ListItem;
