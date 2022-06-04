import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuEntry = ({ entry }) => {
  const navigate = useNavigate();

  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        padding: (theme) => `0 ${theme.spacing(2)}`,
      }}
    >
      <span
        onClick={() => {
          navigate(entry.url);
          if (entry.label === "Home") {
            localStorage.setItem("location", "home");
          } else {
            localStorage.clear();
          }
        }}
        style={{ cursor: "pointer" }}
      >
        {entry.label}
      </span>
    </Typography>
  );
};

MenuEntry.propTypes = {
  entry: PropTypes.object,
};

export default MenuEntry;
