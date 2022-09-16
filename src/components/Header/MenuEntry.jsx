import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuEntry = ({ entry }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
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
        style={{
          cursor: "pointer",
          width: "max-content",
          fontSize: ".9rem",
        }}
      >
        {entry.label} 
      </span>
    </div>
  );
};

MenuEntry.propTypes = {
  entry: PropTypes.object,
};

export default MenuEntry;
