import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { Grid, Toolbar } from "@mui/material";
import { Stars } from "../../views/Home/Home";

import Footer from "../../components/Footer/Footer";

const BaseLayout = () => {
const randomize = (int) => Math.floor(Math.random() * int);

  const location = localStorage.getItem("location") || null;
  const [array, setArray] = useState([]);

  useEffect(() => {
    const arr = [...Array(150)].map(() => {
      const size = randomize(5);
      const posX = randomize(100);
      const posY = randomize(100);
      const propX = [randomize(4)];
      const propY = [randomize(4)];

      return { size, posX, posY, propX, propY };
    });
    setArray(arr);
  }, []);
  return (
    <>
      <Header />
      <div
        style={{
          // position: "relative",
        }}
      >
        <Stars array={array} />
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
