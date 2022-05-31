import React from "react";
import { Card, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

import Divider from "../../components/Divider/Divider.jsx";

import roadmap4 from "../../images/roadmap/roadmap_4.svg";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let sdegree = 0;

  document.addEventListener("mousewheel", (event) => {
    mouseWheelHandler(event);
  });

  const mouseWheelHandler = (event) => {
    const e = window.event || event;
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    sdegree -= 0.5 * delta;

    const o = animateText(sdegree);

    console.warn(delta);

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
    <div className="container">
      <ParalaxSectionTitle title="Atlas dao" color="#eaed23" boxShadow="#777"/>
      <div className="fade" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1></h1>
          </div>

          <p>Community-focused DAO on empowering and creating products for regular folks. </p>
          <br/>
          <p>We seek to create a community of devs, builders, creators, and non-crypto natives to create Dapp and products which will benefit regular folks. </p>
          <br/>
          <p>We hope to empower and incentivize people to do good. </p>
          <br/>
          <p>Some of our long-term goals are to provide affordable housing, Nonprofit organization, and more. </p>
          <br/>
          <p>Join us if you would like to collaborate with us on those initiatives. </p>

        </div>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
