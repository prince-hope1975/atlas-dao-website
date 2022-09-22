import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery, useTheme } from "@mui/material";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

const Perk = (props) => {
  const { title, Icon, translateX, translateY } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.div {...props} className={props.className} style={{width:"100%"}}>
   
        <h2 style={{ textAlign: "center" , fontSize:"clamp(.8rem, 3vw, 3rem)", fontWeight:"100", color:"hsl(0, 0%, 100%, .8)"}}>{title}</h2>
      
      <Icon
        sx={{
          fontSize: "clamp(4rem, 10vw, 10rem)",
          color: "rgb(29, 21, 21)",
          backgroundColor: "#2f4353",
          backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
          borderRadius: "50%",
          padding: "10px",
          margin: "5px",
        }}
      />
    </motion.div>
  );
};

Perk.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.any,
  translateX: PropTypes.string,
  translateY: PropTypes.string,
};

export default Perk;
