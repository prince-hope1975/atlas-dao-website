import React from "react";
import astronaut from "../../images/parallax/astronaut.png";
import { Parallax } from "react-scroll-parallax";

const Astronaut = () => {
  return (
    <Parallax scale={[1, 0]}>
      <img src={astronaut} id={"#astronaut"} />
    </Parallax>
  );
};

export default Astronaut;
