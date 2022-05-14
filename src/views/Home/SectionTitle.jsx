import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const SectionTitle = ({data}) => {
  return  <Parallax 
            opacity= {[0, 1]}
            easing={[.76,1.17,.52,1]}
            >
              <div className="homepage-title">{data.title}</div>
          </Parallax>;
};

SectionTitle.propTypes = { data: PropTypes.object };

export default SectionTitle;