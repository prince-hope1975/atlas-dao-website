import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Perk from "../../components/Perk/Perk";
import ParalaxCard from "../../components/ParalaxCard/ParalaxCard.jsx";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    this
    </>
  );
};

Home.propTypes = {};

export default Home;
