import React from "react";
import Astronaut from "./Astronaut.jsx";
import DataCard from "./DataCard.jsx";
import atlas1 from "../../images/parallax/atlas1.png";
import atlas2 from "../../images/parallax/atlas2.png";
import atlas3 from "../../images/parallax/atlas3.png";
import atlas4 from "../../images/parallax/atlas4.png";
import SectionTitle from "./SectionTitle.jsx";
import Perks from "./Perk.jsx";

const dataCards = [
  {
    title: "Sky Monk Gives Back",
    content: "10% of the NFT proceeds will go to start a Non-profit organisation that provides food and water to impoverished communities around the world.",
    image: atlas1
  },
  {
    title: "We value Our Community",
    content: "All the funds raised will be HELD in a multisig wallet with different well known trustworthy cosmonauts.",
    image: atlas2
  },
  {
    title: "No Whitelist",
    content: "We don't believe whitelists will bring value to our community.",
    image: atlas3
  },
  {
    title: "Sky Monk NFT Holder Help",
    content: "Sky Monk holders will play an integral role in the project. They will Participate in governance and early access to products release.",
    image: atlas4
  }
];

const Home = (props) => {
  return  <div className="home">    
              <div className="astronaut">
              <Astronaut/>
              </div>
              <SectionTitle data={{title: "Sky Monks"}}/>
              <div className="datacard">
              {dataCards.map((item, index) => (
                <DataCard data={item} index={index} />
              ))}
              <SectionTitle data={{title: "Perks"}}/>
              </div>
              <Perks/>
          </div>
};

Home.propTypes = {};

export default Home;
