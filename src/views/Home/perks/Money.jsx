import React from "react";
import { Parallax } from "react-scroll-parallax";
import PaidIcon from '@mui/icons-material/Paid';

const Money = (props) => {

  return  <Parallax 
            translateY={["0px","-200px"]}
            scale={[0, 1]}
            translateX={["0px","500px"]}
            easing={[.46,1.14,.26,1.01]}
            >
                <PaidIcon sx={{
                fontSize: "250px",
                marginBottom: "24px",
                }}/>
          </Parallax>
};


export default Money;