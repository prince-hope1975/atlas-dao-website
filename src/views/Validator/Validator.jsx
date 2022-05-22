import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const Validator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    Validator
    </>
  );
};

Validator.propTypes = {};

export default Validator;
