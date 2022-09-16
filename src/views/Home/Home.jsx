import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Roadmap from "../Roadmap/Roadmap.jsx";
import { motion } from "framer-motion";
import { faqList } from "../Roadmap/info.js";
import { BiRightArrowAlt } from "react-icons/bi";
import { FcDown } from "react-icons/fc";
// import {  } from "react-icons/all";
import "../../sass/box.scss";
const parentVariant = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      type: "tween",
    },
  },
};
const childVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const randomize = (int) => Math.floor(Math.random() * int);
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
  const isMd = useMediaQuery("(min-width: 1012px)");
  const isLg = useMediaQuery("(min-width: 1050px)");

  const [active, setActive] = useState(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setActive((prev) => {
        return (prev + 1) % 3;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    const arr = [...Array(200)].map(() => {
      const size = randomize(5);
      const posX = randomize(100);
      const posY = randomize(100);
      const propX = [randomize(4)];
      const propY = [randomize(4)];

      return { size, posX, posY, propX, propY };
    });
    setArray(arr);
  }, []);

  const variant = {
    animate: {
      x: 0,
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    initial: {
      x: -400,
      zIndex: -1,
      opacity: 0,
      scale: 0.8,
    },
    exit: {
      x: 400,
      zIndex: -1,
      opacity: 0,
      scale: 0.8,
    },
    scaleUp: {
      scale: 1.2,
      zIndex: 10,
    },
    move: {
      x: 100,
    },
    negmove: {
      x: -100,
    },
  };
  return (
    <>
      <section className="hero">
        <Stars array={array} />
        <ParalaxSectionTitle title={"Welcome to Atlas DAO"} />
        <p className="p-text">
          Providing an our of this world Experience on the Cosmos Chain
        </p>
        <motion.div className="btn">Browse Collections</motion.div>
        <motion.div className="grid">
          {isMobile ? (
            <motion.div className="slide">
              {[...Array(3).keys()].map((_, index) => {
                return (
                  <motion.div
                    transition={{ type: "tween", duration: 0.8 }}
                    style={{ color: "black" }}
                    initial={{}}
                    animate={
                      active === index
                        ? "animate"
                        : (active + 1) % 3 === index
                        ? "initial"
                        : "exit"
                    }
                    key={index}
                    variants={variant}
                    className={"box"}
                  ></motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div className="slide">
              {[...Array(3).keys()].map((_, index) => {
                return (
                  <motion.div
                    transition={{ type: "tween", duration: 0.8 }}
                    style={{ color: "black" }}
                    initial={{}}
                    animate={
                      1 === index ? "scaleUp" : index === 0 ? "move" : "negmove"
                    }
                    key={index}
                    variants={variant}
                    className={"box"}
                  ></motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
        <div className="whiteSpace"></div>

        <div className="about">
          <div>img</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              libero, velit, donec nec faucibus vestibulum sit posuere. Mauris,
              non arcu feugiat in tincidunt. Sit cursus lacus quis massa.
              Malesuada non, malesuada tincidunt sit id sed turpis nibh. Vel
              quam erat at mauris quisque pharetra. Eu gravida euismod euismod
              sed vitae posuere. Odio sit eu elit in tellus. Euismod aliquet
              tortor non, vel odio. Eget eget risus ac ornare velit elit. Aenean
              quisque maecenas euismod mattis amet, nunc. Eget cursus nulla
              tortor, Hendrerit volutpat integer suspendisse aliquet. Velit
              turpis pretium
            </p>
            <p>
              diam sed eu nulla sit. Sed sem justo diam nisi ornare iaculis
              auctor a. Euismod aliquet tortor non, vel odio. Eget eget risus ac
              ornare velit elit. Aenean quisque maecenas euismod mattis amet,
              nunc. Eget cursus nulla tortor, hendrerit volutpat integer
              suspendisse aliquet. Velit turpis pretium diam sed eu nulla sit.
              Sed sem justo diam nisi ornare iaculis auctor a. Euismod aliquet
              tortor non, vel odio. Eget eget risus ac ornare velit elit. Aenean
              quisque maecenas euismod mattis amet, nunc. Eget cursus nulla
              tortor, hendrerit volutpat integer suspendisse aliquet. Velit
              turpis pretium diam sed eu nulla sit. Sed sem justo diam nisi
              ornare iaculis auctor a.
            </p>
          </div>
        </div>
        <div className="reasonSection">
          <h2>Why Choose Atlas ?</h2>
          <div>
            {Data.map((prop, index) => {
              return <Options key={prop.heading + index} {...prop} />;
            })}
          </div>

          <div className="whiteSpace"></div>
        </div>

        <div className="gallery">
          <h2>Gallery</h2>
          <span className="desc">Here are some of our Facourite NFTs.</span>
          <div className="collection">
            {collectionData.map((props, index) => {
              return (
                <CollectionItem
                  key={index}
                  animate={{
                    y: isLg ? (index === 1 || index === 4 ? -100 : 0) : 0,
                  }}
                  {...props}
                />
              );
            })}
          </div>
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, repeatType: "reverse", bounce: 1 }}
            className="viewMore"
          >
            View more <BiRightArrowAlt />{" "}
          </motion.div>
        </div>
        <div style={{ marginTop: "6rem" }} className="whiteSpace"></div>

        <div className="roadMap">
          <h2>Road Map</h2>
          <div className="map">
            {roadmapData.map((props, index) => (
              <Quarters
              key={index}
                initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={
                  {
                    // transition: {
                    //   when: "beforeChildren",
                    //   staggerChildren: 0.15,
                    //   type: "tween",
                    // },
                  }
                }
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: "tween",
                  staggerChildren: 0.15,
                }}
                {...{ index, ...props }}
              />
            ))}
          </div>
        </div>

        <div className="team ">
          <div className="whiteSpace">
            <h2>Our Team</h2>
            <div className="members">
              {teamData.map(({ img, name, title }, index) => {
                return (
                  <div key={name + index} className="member">
                    <div className="img">
                      <img src={img} alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <span>{title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="faq">
            <h2>FAQ</h2>
            <motion.div
              // layout
              className="questions"
              // variants={parentVariant}
              // initial="hidden"
              // whileInView="visible"
            >
              {faqList.map((props) => {
                return <ListItem key={props.answer} {...props} />;
              })}
            </motion.div>
          </div>
        </div>
        {/* <Roadmap /> */}
      </section>
    </>
  );
};

const ListItem = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.span
      {...props}
      // layout
      variants={childVariant}
      whileHover={{ scale: 1.2 }}
    >
      <div onClick={() => setOpen(!isOpen)} className="ques">
        {props.question}
      </div>
      <motion.div
        className="ans"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 100 : 0 }}
      >
        {props.answer}
      </motion.div>
    </motion.span>
  );
};

export const Stars = ({ array }) => {
  return array.map(({ propX, propY, posX, posY, size }, index) => {
    return (
      <motion.div
      key={index}
        className="dot"
        style={{
          left: `${posX}%`,
          top: `${posY}%`,
          width: `${size}px`,
          height: `${size}px`,
          right: `${posX}%`,
          bottom: `${posY}%`,
        }}
      ></motion.div>
    );
  });
};

const Options = ({ text, heading, img }) => {
  return (
    <div className="wrapper">
      <div className="img">
        <img src={img} alt={heading} />
      </div>
      <span className="heading">{heading}</span>
      <p className="text">{text}</p>
    </div>
  );
};

const CollectionItem = (prop) => {
  const { image, title, owner } = prop;
  return (
    <motion.div {...prop} className="wrapper">
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="desc">
        <span className="title">{title}</span>
        <p>By {owner}</p>
      </div>
    </motion.div>
  );
};

const Quarters = (props) => {
  const { entries, index } = props;
  return (
    <motion.div className="card" {...props}>
      <h3> Q{index + 2}</h3>
      {entries.map((item, idx) => (
        <motion.li
        key={idx}
          initial={{ x: index % 2 === 0 ? -70 : 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (idx + 1) * 0.15, type: "tween" }}
        >
          {item}
        </motion.li>
      ))}
    </motion.div>
  );
};

const teamData = [
  { img: "", name: "Jacob", title: "CEO" },
  { img: "", name: "Prince", title: "Fullstack Dev" },
  { img: "", name: "Shasha", title: "Backend Dev" },
];
const roadmapData = [
  {
    entries: [
      "Build Core Team",
      "Establish social media Presence",
      "Launch Website",
      "Launch Star Monks on Stargaze",
      "Partner with other Cosmos Chain NFTs",
      "Spin Stargaze Validator Node",
      "Distribute NFT mint Raffle",
    ],
  },
  {
    entries: [
      "Launch Next Sky Monks Collection",
      "Spin Juno Validator Node",
      "Hire More Developers",
      "Research and Development",
    ],
  },
  {
    entries: [
      "Spin ATOM Validator Node",
      "Launch End World Hunger Foundation",
      "Launch NFT DAO",
      "More Information Coming Soon...",
    ],
  },
];

const collectionData = [
  { image: "", title: "Cosmos Monk", owner: "Prince" },
  { image: "", title: "Cosmos Monk", owner: "Prince" },
  { image: "", title: "Cosmos Monk", owner: "Prince" },
  { image: "", title: "Cosmos Monk", owner: "Prince" },
  { image: "", title: "Cosmos Monk", owner: "Prince" },
  { image: "", title: "Cosmos Monk", owner: "Prince" },
];
const Data = [
  {
    heading: "Sky Monks Give Back",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi vulputate leo leo auctor.",
    img: "",
  },
  {
    heading: "No Wishlist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi vulputate leo leo auctor.",
    img: "",
  },
  {
    heading: "We Value Our Community",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi vulputate leo leo auctor.",
    img: "",
  },
  {
    heading: "NFT Holder Help",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi vulputate leo leo auctor.",
    img: "",
  },
];
export default Home;
