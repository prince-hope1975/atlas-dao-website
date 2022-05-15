import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import PolicyIcon from '@mui/icons-material/Policy';

const Trophy = (props) => {

  return  <Parallax 
              translateY={["0px", "300px"]}
              translateX={["0px","-250px"]}
              scale={[0,1]}
              easing={[.46,1.14,.26,1.01]}
            >
              <h1>Commercial Rights</h1>
            <PolicyIcon sx={{
              fontSize: "250px",
              marginBottom: "24px",
            }}/>
            </Parallax>
};


export default Trophy;
