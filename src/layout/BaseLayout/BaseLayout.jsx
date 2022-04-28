import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { Container, Grid, Toolbar } from "@mui/material";

import background from "../../images/back.png";

const BaseLayout = (props) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Toolbar />
      <Grid container>
        <Outlet />
      </Grid>
    </div>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
