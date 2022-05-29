import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { Grid, Toolbar } from "@mui/material";

import Footer from "../../components/Footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <div
        style={{
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          sx={{
            marginTop: (theme) => theme.spacing(6),
            marginBottom: (theme) => theme.spacing(6),
          }}
        >
          <Outlet />
        </Grid>
        <Footer />
      </div>
    </>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
