import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const SectionTitle = ({data}) => {
  return  <div className="homepage-title">
            <Parallax 
              opacity= {[0, 1]}
              easing={[.76,1.17,.52,1]}
              >
                {data.title}
            </Parallax>
          </div>;
};

SectionTitle.propTypes = { data: PropTypes.object };

export default SectionTitle;