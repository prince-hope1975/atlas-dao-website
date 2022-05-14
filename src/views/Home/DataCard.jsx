import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

const DataCard = ({data,index}) => {
  if (index % 2 == 0){
  return  <Parallax 
            translateX = {['200px', '0px']}
            opacity= {[0, 1]}
            easing={[.46,1.14,.26,1.01]}
            >
              <div className="datacard-content">
                <img src={data.image}/>
                <div className="datacard-content-text">
                  <h1>{data.title}</h1>
                  <div >{data.content}</div>
                </div>
              </div>
          </Parallax>;
  }
  else{
    return  <Parallax 
              translateX = {['-200px', '0px']}
              opacity= {[0, 1]}
              easing={[.46,1.14,.26,1.01]}
              >
                <div className="datacard-content">
                  <img src={data.image}/>
                  <div className="datacard-content-text">
                    <h1>{data.title}</h1>
                    <div>{data.content}</div>
                  </div>
                </div>
            </Parallax>;
  }
};

DataCard.propTypes = { data: PropTypes.object };

export default DataCard;