import React from "react";
import { Grid } from "@mui/material";

import Astronaut from "./Astronaut.jsx";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Perk from "../../components/Perk/Perk";
import ParalaxCard from "../../components/ParalaxCard/ParalaxCard.jsx";

import { dataCards, perks } from "./data.js";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="astronaut-background">
          <Astronaut />
        </div>
      </Grid>

      <ParalaxSectionTitle title="Sky Monks" />
      {dataCards.map((item, index) => (
        <ParalaxCard data={item} index={index} key={index} />
      ))}

      <ParalaxSectionTitle title="Perks" />
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ marginTop: "-380px" }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        {perks.map((item, index) => (
          <Perk
            key={index}
            title={item.title}
            Icon={item.icon}
            translateX={item.translateX}
            translateY={item.translateY}
          />
        ))}
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ height: "300px" }}></div>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
