import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const Ticket = (props) => {

  return  <Parallax 
            translateY={["0px","150px"]}
            scale={[0, 1]}
            translateX={["0px","250px"]}
            easing={[.46,1.14,.26,1.01]}
            >
              <h1>Cosmoverse Ticket Raffles</h1>
                <LocalActivityIcon sx={{
                fontSize: "250px",
                marginBottom: "24px",
                }}/>
          </Parallax>
};


export default Ticket;