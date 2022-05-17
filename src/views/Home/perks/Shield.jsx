import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Trophy = (props) => {

  return  <Parallax 
            translateY={["0px","150px"]}
            scale={[0,1]}
            translateX={["0px","-50px"]}
            easing={[.46,1.14,.26,1.01]}
            >
              <h1>Validator Rewards</h1>
                <EmojiEventsIcon sx={{
                fontSize: "250px",
                marginBottom: "24px",
                }}/>
          </Parallax>
};


export default Trophy;
