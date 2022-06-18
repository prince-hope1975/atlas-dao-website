import React, { useState } from "react";
import { Card, Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

import Divider from "../../components/Divider/Divider.jsx";

import roadmap4 from "../../images/roadmap/roadmap_4.svg";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const mouseWheelHandlerSpeed = 0.2;
  const arrowClickHandlerSpeed = 1.5;
  const lowerLimit = isMobile ? -3 : 2;
  const upperLimit = isMobile ? 40 : 95;
  let sdegree = isMobile ? -4 : -1;

  document.addEventListener("mousewheel", (event) => {
    mouseWheelHandler(event);
  });

  const arrowClickHandler = (delta) => {
    sdegree -= arrowClickHandlerSpeed * delta;
    if (sdegree < lowerLimit) {
      sdegree = lowerLimit;
    }
    if (sdegree > upperLimit) {
      sdegree = upperLimit;
    }

    const o = animateText(sdegree);

    const crawlText = document.getElementById("crawl");
    crawlText.style.top = o.top + "px";
    crawlText.style.transform =
      "rotateX(" + o.rotateX + "deg) translateZ(" + o.translateZ + "px)";

    return false;
  };

  const mouseWheelHandler = (event) => {
    const e = window.event || event;
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    sdegree -= mouseWheelHandlerSpeed * delta * 2;
    if (sdegree < lowerLimit) {
      sdegree = lowerLimit;
    }
    if (sdegree > upperLimit) {
      sdegree = upperLimit;
    }

    const o = animateText(sdegree);

    const crawlText = document.getElementById("crawl");
    crawlText.style.top = o.top + "px";
    crawlText.style.transform =
      "rotateX(" + o.rotateX + "deg) translateZ(" + o.translateZ + "px)";

    return false;
  };

  const animateText = (step) => {
    const limit = { min: 0, max: 100 };

    const top_l = { min: 0, max: -6000 };
    const rotateX_l = isMobile ? { min: 17, max: 17 } : { min: 25, max: 25 };
    const translateZ_l = isMobile
      ? { min: 168, max: -1500 }
      : { min: -100, max: -2500 };

    const m_top = (top_l.max - top_l.min) / (limit.max - limit.min);
    const m_rotateX = (rotateX_l.max - rotateX_l.min) / (limit.max - limit.min);
    const m_translateZ =
      (translateZ_l.max - translateZ_l.min) / (limit.max - limit.min);

    const top = m_top * step + top_l.min;
    const rotateX = m_rotateX * step + rotateX_l.min;
    const translateZ = m_translateZ * step + translateZ_l.min;

    const output = {
      top: top,
      rotateX: rotateX,
      translateZ: translateZ,
    };

    return output;
  };

  return (
    <>
      <div className="container">
        <ParalaxSectionTitle
          title="Atlas dao"
          color="#eaed23"
          boxShadow="#777"
          home={true}
        />
        <section className="star-wars">
          <div
            id="crawl"
            style={{
              fontSize: isMobile ? "15%" : "100%",
              position: "relative",
              width: isMobile ? "50%" : null,
              top: isMobile ? "180px" : "-120px",
              transform: isMobile
                ? "rotateX(17deg) translateZ(218px)"
                : "rotateX(25deg) translateZ(-148px)",
            }}
          >
            <p>
              We are a community focused DAO. Our goal is to help people in need. 
              For now, we focus in growing around the Cosmos ecosystem We plan 
              to use both NFTs and validator nodes to give support to our community 
              and DAO.
            </p>
            <br />
            <p>
              To this end, we have launched and minted out "Sky Monks NFT"
              on Stargaze. We have also set up an Atlas DAO validator on
              the Stargaze chain.{" "}
            </p>
            <br />
            <p>
              We hope to build upon this model, launching new NFT series and spinning 
              up nodes in the corresponding chains.{" "}
            </p>
            <br />
            <p>
            In this way, we will grow our community and strengthen our bond to the greater Cosmos community. {" "}
            </p>
            <br />
            <p>
            It is our goal to empower and motivate the members of our community, which will inspire them to give back. As a community and team, we can achieve some of our long terms goals - providing food, water, or even affordable housing to impoverished communities. It will take the strength of our community to make that happen. 
            </p>
            <br />
            <p> Come be strong with us! </p>
          </div>
        </section>
      </div>
      <Grid container justifyContent="center">
        <IconButton
          onClick={() => arrowClickHandler(0.5)}
          // disabled={arrowUpDisabled}
        >
          <KeyboardArrowUp sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton
          onClick={() => arrowClickHandler(-0.5)}
          // disabled={arrowDownDisabled}
        >
          <KeyboardArrowDown sx={{ fontSize: "80px" }} />
        </IconButton>
      </Grid>
    </>
  );
};

Home.propTypes = {};

export default Home;
