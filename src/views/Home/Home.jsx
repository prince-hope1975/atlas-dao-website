import React from "react";
import Astronaut from "./Astronaut.jsx"

const Home = (props) => {
  return  <div className="home">    
              <div className="astronaut">
                  <Astronaut/>
              </div>        
          </div>
};

Home.propTypes = {};

export default Home;
