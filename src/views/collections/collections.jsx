import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Perk from "../../components/Perk/Perk";
import ParalaxCard from "../../components/ParalaxCard/ParalaxCard.jsx";

import { dataCards, perks } from "./data.js";
import Container from "../../layout/BaseLayout/container.jsx";
import atlasGif from "../../images/skyMonks.gif";
import femaleMonk from "../../images/display/9.png";

import founder from "../../images/team/founder.png";
import artist from "../../images/team/artist.png";
import marketingDirector from "../../images/team/marketingDirector.png";
import web3dev from "../../images/team/web3dev.png";
import SimpleImageComponent from "../Gallery/SimpleImageComponent/SimpleImageComponent.jsx";
import { motion } from "framer-motion";
import "../../sass/collection.scss";
import { CollectionItem, Team } from "../Home/Home.jsx";
import { useNavigate } from "react-router-dom";
import Thirteen from "../../images/display/13.gif";


const team = [
  {
    image: founder,
    description: "Founder",
    url: "https://twitter.com/jacobremy0",
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
    description: "Web3 Dev",
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
  const navigate = useNavigate();

  return (
    <Container className="gallery">
      <div className="group">
        {collectionData.map((props) => (
          <CollectionItem
            className={`${props.new && "new"}`}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.9 } }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ type: "tween" }}
            image={props.image}
          >
            <div className="name">{props.title}</div>
            <butto
              disabled={!props.link}
              onClick={() => {
                if (!props.rel) return alert("Coming soon...")
                window.location.href = props.link;
              }}
              className="button"
            >
              {props.callToAction}
            </butto>
          </CollectionItem>
        ))}
      </div>
      <>
        <ParalaxSectionTitle title="Perks" />
        <motion.div
          className="perk"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            type: "tween",
          }}
        >
          {perks.map((item, index) => (
            <Perk
              animate={{ rotate: -360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
              className={`item-${index}`}
              key={index}
              title={item.title}
              Icon={item.icon}
            />
          ))}
        </motion.div>
      </>
    </Container>
  );
};

const collectionData = [
  {
    title: "Cosmic Sky Monks",
    desc: "",
    image: Thirteen,
    new: true,
    callToAction: "Coming Soon...",
    link: "",
  },
  {
    title: "Sky Monks",
    desc: "",
    image: atlasGif,
    callToAction: "Buy on Marketplace",
    rel: true,
    link: "https://www.stargaze.zone/marketplace/stars1w8qec4wfe2gycra9kmny9n8r7547x4ychtthlkeqsqlu9x6wvdjqf5g89c",
  },
];

SkyMonks.propTypes = {};

export default SkyMonks;
