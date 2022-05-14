import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const SkyMonks = ({data,index}) => {
  return  <Parallax 
            opacity= {[0, 1]}
            easing={[.46,1.14,.26,1.01]}
            >
              <div className="homepage-title">Sky Monks</div>
          </Parallax>;
};

SkyMonks.propTypes = { data: PropTypes.object };

export default SkyMonks;