import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Perk from "../../components/Perk/Perk";
import ParalaxCard from "../../components/ParalaxCard/ParalaxCard.jsx";

import { dataCards, perks } from "./data.js";
import atlasGif from "../../images/skyMonks.gif";

import founder from "../../images/team/founder.png";
import artist from "../../images/team/artist.png";
import marketingDirector from "../../images/team/marketingDirector.png";
import web3dev from "../../images/team/web3dev.png";
import nonprofitDirector from "../../images/team/nonprofitDirector.png";
import SimpleImageComponent from "../Gallery/SimpleImageComponent/SimpleImageComponent.jsx";

const team = [
  {
    image: founder,
    description: "Founder",
    url: "https://twitter.com/jacobremy0",
    lg: 4,
  },
  {
    image: nonprofitDirector,
    description: "Non Profit Director",
    url: "https://twitter.com/chellyysavv",
    lg: 4,
  },
  {
    image: artist,
    description: "Artist",
    url: "https://twitter.com/rendrasc",
    lg: 4,
  },
  {
    image: web3dev,
    description: "Web 3 Dev",
    url: "https://twitter.com/wild_developer_",
    lg: 6,
  },
  {
    image: marketingDirector,
    description: "Creative director",
    url: "https://twitter.com/Cosmonaut_nicl",
    lg: 6,
  },
];

const SkyMonks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={2}>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          marginTop: "100px",
          paddingBottom: "300px",
        }}
      >
        <Grid item container xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item container alignItems="center" xs={12} sm={12} md={4} lg={4}>
          <ParalaxSectionTitle title="Sky Monks" />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={4}
          lg={4}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={atlasGif}
            style={{
              width: isMobile ? "230px" : "500px",
              height: isMobile ? "230px" : "500px",
              borderRadius: "50%",
              boxShadow: "0px 0px 40px 20px rgb(107, 246, 246)",
            }}
          />
        </Grid>
        <Grid item container xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>

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
            translateX={isMobile ? item.translateX * 0.5 : item.translateX}
            translateY={
              isMobile ? item.translateY * 0.5 + 100 : item.translateY
            }
          />
        ))}
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ParalaxSectionTitle title="Our team" />
        {team.map((item, index) => (
          <SimpleImageComponent key={index} data={item} />
        ))}
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ height: "150px" }}></div>
      </Grid>
    </Grid>
  );
};

SkyMonks.propTypes = {};

export default SkyMonks;
