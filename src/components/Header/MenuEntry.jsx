import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const MenuEntry = (props) => {
  const { text } = props;
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        padding: (theme) => `0 ${theme.spacing(2)}`,
        // border: 1,
        // borderColor: (theme) => theme.palette.secondary.main,
      }}
    >
      {text}
    </Typography>
  );
};

MenuEntry.propTypes = {};

export default MenuEntry;
