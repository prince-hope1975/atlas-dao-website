import React from "react";
import astronaut from "../../images/parallax/astronaut.png";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const Astronaut = (props) => {
  return  <Parallax scale={[1, 0]}>
            <img src={astronaut} id={"#astronaut"}/>
          </Parallax>;
};


export default Astronaut;
