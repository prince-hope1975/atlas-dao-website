import React, { useState } from "react";
import { Card, Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

import Divider from "../../components/Divider/Divider.jsx";

import roadmap4 from "../../images/roadmap/roadmap_4.svg";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

let sdegree = 10;

const Home = () => {
  // const [arrowUpDisabled, setArrowUpDisabled] = useState(true);
  // const [arrowDownDisabled, setArrowDownDisabled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const mouseWheelHandlerSpeed = 0.2;
  const arrowClickHandlerSpeed = 1.5;

  document.addEventListener("mousewheel", (event) => {
    mouseWheelHandler(event);
  });

  const arrowClickHandler = (delta) => {
    sdegree -= arrowClickHandlerSpeed * delta;
    // setArrowDownDisabled(false);
    // setArrowUpDisabled(false);
    if (sdegree < 10) {
      sdegree = 10;
      // setArrowUpDisabled(true);
    }
    if (sdegree > 110) {
      sdegree = 110;
      // setArrowDownDisabled(true);
    }

    const o = animateText(sdegree);

    const crawlText = document.getElementsByClassName("crawl");
    crawlText[0].style.top = o.top + "px";
    crawlText[0].style.transform =
      "rotateX(" + o.rotateX + "deg) translateZ(" + o.translateZ + "px)";

    return false;
  };

  const mouseWheelHandler = (event) => {
    const e = window.event || event;
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    sdegree -= mouseWheelHandlerSpeed * delta;
    console.warn(sdegree);
    // setArrowDownDisabled(false);
    // setArrowUpDisabled(false);
    if (sdegree < 10) {
      sdegree = 10;
      // setArrowUpDisabled(true);
    }
    if (sdegree > 110) {
      sdegree = 110;
      // setArrowDownDisabled(true);
    }

    const o = animateText(sdegree);

    const crawlText = document.getElementsByClassName("crawl");
    crawlText[0].style.top = o.top + "px";
    crawlText[0].style.transform =
      "rotateX(" + o.rotateX + "deg) translateZ(" + o.translateZ + "px)";

    return false;
  };

  const animateText = (step) => {
    const limit = { min: 0, max: 100 };

    const top_l = { min: 0, max: -6000 };
    const rotateX_l = { min: 20, max: 25 };
    const translateZ_l = { min: 0, max: -2500 };

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
        />
        <div className="fade" style={{ top: isMobile ? "-75px" : "-25px" }} />
        <section className="star-wars">
          <div
            className="crawl"
            style={{ fontSize: isMobile ? "30%" : "100%" }}
          >
            <div className="title">
              <h1></h1>
            </div>

            <p>
              We are a community focused DAO. Ultimately we hope that leads to
              helping impoverished communities. For now, we are focused on
              growing within the Cosmos Ecosystem. We plan to use both NFTs and
              validator nodes to support our community and DAO.
            </p>
            <br />
            <p>
              To this end, we have already launched and minted out Sky Monks NFT
              on Stargaze. We have also launched an Atlas DAO validator node on
              the Stargaze chain.{" "}
            </p>
            <br />
            <p>
              We hope to build upon this model, launching future NFT series in
              different marketplaces, and spinning up nodes on the corresponding
              chains.{" "}
            </p>
            <br />
            <p>
              In this way, we will build our own community while strengthening
              our commitment to the greater Cosmos community.{" "}
            </p>
            <br />
            <p>
              It is our goal to empower and incentivize the members of our
              community, which will inspire them to give back. As a community
              and team, we can achieve some of our long terms goals - providing
              food, water, or even affordable housing to impoverished
              communities. It will take the strength of the community to make
              that happen.
            </p>
            <br />
            <p> Come be strong with us! </p>
          </div>
        </section>
      </div>
      <Grid container justifyContent="center">
        <IconButton
          onClick={() => arrowClickHandler(1)}
          // disabled={arrowUpDisabled}
        >
          <KeyboardArrowUp sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton
          onClick={() => arrowClickHandler(-1)}
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
