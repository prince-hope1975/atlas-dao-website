import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { Grid, Toolbar } from "@mui/material";

import background from "../../images/back.png";

const BaseLayout = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Toolbar />
      <Grid container sx={{ marginTop: (theme) => theme.spacing(6) }}>
        <Outlet />
      </Grid>
    </div>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
