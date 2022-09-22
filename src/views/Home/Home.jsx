import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import { faqList } from "../Roadmap/info.js";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import Container from "../../layout/BaseLayout/container.jsx";
import fnder from "../../images/team/founder.png";
import One from "../../images/display/1.png";
import Two from "../../images/display/2.png";
import Three from "../../images/display/3.png";
import Four from "../../images/display/4.png";
import Five from "../../images/display/5.png";
import Six from "../../images/display/6.png";
import Seven from "../../images/display/7.png";
import Eight from "../../images/display/8.png";
import Eleven from "../../images/display/11.png";
import Twelve from "../../images/display/12.png";
import csm1 from "../../images/Collection/csm1.png";
import csm2 from "../../images/Collection/csm2.png";
import csm3 from "../../images/Collection/csm3.png";
import skm1 from "../../images/Collection/skm1.PNG";
import skm2 from "../../images/Collection/skm2.png";
import skm3 from "../../images/Collection/skm3.PNG";
import { useNavigate } from "react-router-dom";
import "../../sass/home.scss";
import dev from "../../images/team/web3dev.png";
import artist from "../../images/team/marketingDirector.png";
// import Two from "../../images/display/2.png";

const imgs = [One, Two, fnder];
const mobileImg =[...imgs, Three, Four, Five, Six, Seven, Eight, ]
// import { BiCaretDown } from "react-icons/all";
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
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
  const isMd = useMediaQuery("(min-width: 1012px)");
  const isLg = useMediaQuery("(min-width: 1050px)");

  const [active, setActive] = useState(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setActive((prev) => {
        return (prev + 1) % mobileImg.length;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    const arr = [...Array(500)].map(() => {
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
      zIndex: 1,
      opacity: 0,
      scale: 0.8,
    },
    exit: {
      x: 400,
      zIndex: 1,
      opacity: 0,
      scale: 0.8,
    },
    scaleUp: {
      scale: 1.2,
      zIndex: 1000,
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
      <Container className="hero">
        <Stars array={array} />
        <h1>Welcome to Atlas DAO</h1>
        <p className="p-text">
          Providing an out of this world Experience on the Cosmos Chain
        </p>
        <motion.div
          onClick={() => {
            navigate("/collections");
          }}
          className="btn"
        >
          Browse Collections
        </motion.div>
        <motion.div className="grid">
          {isMobile ? (
            <motion.div className="slide">
              {mobileImg.map(
                (src, index) => {
                  return (
                    <motion.div
                      transition={{ type: "tween", duration: 0.8 }}
                      style={{
                        color: "black",
                        backgroundImage: `url(${src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        objectFit: "cover",
                      }}
                      initial={
                        active === index
                          ? "animate"
                          : (active + 1) % mobileImg.length === index
                          ? "initial"
                          : "exit"
                      }
                      animate={
                        active === index
                          ? "animate"
                          : (active + 1) % mobileImg.length === index
                          ? "initial"
                          : "exit"
                      }
                      key={index}
                      variants={variant}
                      className={"box"}
                    ></motion.div>
                  );
                }
              )}
            </motion.div>
          ) : (
            <motion.div className="slide">
              {imgs.map((src, index) => {
                return (
                  <motion.div
                    transition={{ type: "tween", duration: 0.8 }}
                    style={{
                      color: "black",
                      overflow: "hidden",
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
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
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `url(${Twelve})`,
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></motion.div>
          <div>
            <motion.h2
              initial={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              What is Atlas DAO ?
            </motion.h2>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              We are a DAO NFT community with a focus on philanthropy. We seek
              to create a community of devs, builders, creators, and non-crypto
              natives to create Dapp and products for the benefit of regular
              folks. Some of our long-term goals are to provide food, water,
              affordable housing, create a Nonprofit organization, and more for
              people in need
            </motion.p>
          </div>
        </div>
        {/* <div className="reasonSection">
          <h2>Why Choose Atlas ?</h2>
          <div>
            {Data.map((prop, index) => {
              return <Options key={prop.heading + index} {...prop} />;
            })}
          </div>

          <div className="whiteSpace"></div>
        </div> */}

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
            onClick={() => {
              navigate("/collections");
            }}
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
                animate={{}}
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

        {/* Components */}
        <Team />
        <Faq />
        {/* <Roadmap /> */}
      </Container>
    </>
  );
};
export const Team = () => {
  return (
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
    </div>
  );
};

const Faq = () => {
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <motion.div
        // layout
        className="questions"
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqList.map((props) => {
          return <ListItem key={props.answer} {...props} />;
        })}
      </motion.div>
    </div>
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
      transition={{ type: "tween" }}
    >
      <div onClick={() => setOpen(!isOpen)} className="ques">
        {props.question} <BiCaretDown />
      </div>
      <motion.div
        transition={{ type: "tween" }}
        className="ans"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
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
        {/* TODO : Add picture */}
        {/* <img src={img} alt={heading} /> */}
      </div>
      <span className="heading">{heading}</span>
      <p className="text">{text}</p>
    </div>
  );
};

export const CollectionItem = (prop) => {
  const { image, title, owner, children } = prop;
  return (
    <motion.div {...prop} className={`wrapper ${prop.className}`}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${image})`,
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* <img src={image} alt={title} /> */}
      </div>
      <div className="desc">
        {title && <span className="title">{title}</span>}
        {owner && <p>By {owner}</p>}
      </div>
      {children}
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
      "Launch Akash Validator node",
      "Hire More Developers",
      "Research and Development",
    ],
  },
  {
    entries: [
      "Launch other validator node",
      "Launch End World Hunger Foundation",
      "Launch NFT DAO",
      "More Information Coming Soon...",
    ],
  },
];

const collectionData = [
  { image: csm1, title: "Cosmic Sky Monk", owner: "Atlas DAO" },
  { image: csm2, title: "Cosmic Sky Monk", owner: "Atlas DAO" },
  { image: csm3, title: "Cosmic Sky Monk", owner: "Atlas DAO" },
  { image: skm1, title: "Sky Monk", owner: "Atlas DAO" },
  { image: skm2, title: "Sky Monk", owner: "Atlas DAO" },
  { image: skm3, title: "Sky Monk", owner: "Atlas DAO" },
];
const Data = [
  {
    heading: "Sky Monks Give Back",
    text: "We will contribute into providing food and water to communities in need.",
    img: "",
  },
  {
    heading: "No Wishlist",
    text: "We don't believe whitelists will bring value to our community.",
    img: "",
  },
  {
    heading: "We Value Our Community",
    text: "Funds raised will be held in a multisig wallet.",
    img: "",
  },
  {
    heading: "NFT Holder Help",
    text: "Sky Monk holders will Participate in governance and early access to products release.",
    img: "",
  },
];
export default Home;
