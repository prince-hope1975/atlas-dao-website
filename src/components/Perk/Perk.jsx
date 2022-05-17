import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const Perk = ({ title, Icon, translateX, translateY }) => {
  return (
    <Parallax
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      translateX={["0px", translateX]}
      translateY={["0px", translateY]}
      scale={[0, 1]}
      easing={[0.46, 1.14, 0.26, 1.01]}
    >
      <h1>{title}</h1>
      <Icon
        sx={{
          fontSize: "250px",
          color: "rgb(29, 21, 21)",
          backgroundColor: "#2f4353",
          backgroundImage: "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
          borderRadius: "50%",
          padding: "10px",
          margin: "5px",
        }}
      />
    </Parallax>
  );
};

Perk.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.any,
  translateX: PropTypes.string,
  translateY: PropTypes.string,
};

export default Perk;
