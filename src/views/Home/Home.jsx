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
      <ParalaxSectionTitle title="Atlas dao" />
      <div className="fade" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1></h1>
          </div>

          <p>
          A Community focused DAO on empowering and creating
            products for everyday people. A platform that will create, 
            buy, and fund real world business using cryptocurrency 
            as a base pair of currency.
          </p>
          <br />
          <br />
          <p>
            Cryptocurrency offers a lot of potential and will change the global
            economy for the better. It is the time for creative thinking and
            collaboration to usher in a new era. The DAO model is the way
            forward for corporations and companies. That's why Atlas DAO was
            created. We will strive to be a user-centric DAO by the people and
            for the people. We will make it impossible to survive without having
            the users best interest at heart. We will be transparent, prioritize
            security and always work hand by hand with and for the community.
          </p>
          <br />
          <br />
          <p>
            We will prioritize user wealth growth. We want to bring wealth to
            our users in a safe, decentralized manner while being held
            accountable for every step we take. As we grow our platform, we will
            do our best to grow the trust you set on us. There won't be a
            one-man or one-point of failure. This is the strength of
            decentralization. As a platform, we will focus on bringing a lot
            more users to the cosmos ecosystem. Our hopes and dreams are big,
            but our work will rise to the challenge.
          </p>
        </div>
      </section>
    </div>
  );

  // return (
  //   <>
  //     <Grid container justifyContent="center">
  //       <Grid item xs={12} sm={12} md={12} lg={12}>
  //         <ParalaxSectionTitle title="Atlas DAO" />
  //       </Grid>

  //       <Grid
  //         item
  //         xs={12}
  //         sm={12}
  //         md={12}
  //         lg={12}
  //         sx={{
  //           padding: theme.spacing(5),
  //         }}
  //       ></Grid>

  //       <Grid item xs={12} sm={12} md={12} lg={12}>
  //         <Parallax speed={10} opacity={[0, 1.5]}>
  //           <Card
  //             sx={{
  //               width: "100wv",
  //               padding: theme.spacing(5),
  //               fontSize: theme.typography.pxToRem(isMobile ? 20 : 30),
  //               letterSpacing: "2px",
  //             }}
  //           >
  // Atlas DAO is a Community focused DAO on empowering and creating
  // products for everyday people. In the present day, we lack crypto
  // usage in the business world. This is why we need a DAO to fill in
  // the gap and benefit the crypto ecosystem at large. We need a
  // platform that will create, buy, and fund real world business and
  // use cryptocurrency as a base pair of currency.
  //           </Card>
  //         </Parallax>
  //       </Grid>

  //       <Divider>
  //         <img style={{ width: "40px" }} src={roadmap4} />
  //       </Divider>

  //       <Grid item xs={12} sm={12} md={6} lg={6}>
  //         <Parallax speed={10} opacity={[0, 1.5]}>
  //           <Card
  //             sx={{
  //               padding: theme.spacing(5),
  //               fontSize: theme.typography.pxToRem(isMobile ? 20 : 30),
  //               letterSpacing: "2px",
  //             }}
  //           >
  // Cryptocurrency offers a lot of potential and will change the
  // global economy for the better. It is the time for creative
  // thinking and collaboration to usher in a new era. The DAO model is
  // the way forward for corporations and companies. That's why Atlas
  // DAO was created. We will strive to be a user-centric DAO by the
  // people and for the people. We will make it impossible to survive
  // without having the users best interest at heart. We will be
  // transparent, prioritize security and always work hand by hand with
  // and for the community.
  //           </Card>
  //         </Parallax>
  //       </Grid>

  //       <Divider>
  //         <img style={{ width: "40px" }} src={roadmap4} />
  //       </Divider>

  //       <Grid item xs={12} sm={12} md={6} lg={6}>
  //         <Parallax speed={10} opacity={[0, 1.5]}>
  //           <Card
  //             sx={{
  //               padding: theme.spacing(5),
  //               fontSize: theme.typography.pxToRem(isMobile ? 20 : 30),
  //               letterSpacing: "2px",
  //             }}
  //           >
  // We will prioritize user wealth growth. We want to bring wealth to
  // our users in a safe, decentralized manner while being held
  // accountable for every step we take. As we grow our platform, we
  // will do our best to grow the trust you set on us. There won't be a
  // one-man or one-point of failure. This is the strength of
  // decentralization. As a platform, we will focus on bringing a lot
  // more users to the cosmos ecosystem. Our hopes and dreams are big,
  // but our work will rise to the challenge.
  //           </Card>
  //         </Parallax>
  //       </Grid>

  //       <Grid
  //         item
  //         xs={12}
  //         sm={12}
  //         md={12}
  //         lg={12}
  //         sx={{ height: "300px" }}
  //       ></Grid>
  //     </Grid>
  //   </>
  // );
};

Home.propTypes = {};

export default Home;
