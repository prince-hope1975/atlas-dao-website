import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import globe from "../../images/globe.svg";
import shield from "../../images/shield.svg";
import world from "../../images/world.svg";
import stars from "../../images/stars.png";
import akash from "../../images/akash.png";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle";

const data = [
  {
    title: "We give back",
    logo: shield,
    content: "We will use our validator rewards to help further our mission of empowering the impoverished."
  },
  {
    title: "Community",
    logo: globe,
    content: "We are a community-run validator node."
  },
  {
    title: "IBC is the future",
    logo: world,
    content: "We believe in the cosmos ecosystem and want to contribute."
  }
]
const chains = [
  {
    title: "Stargaze",
    logo: stars,
    apr: "100%",
    description: "The first interoperable L1 for NFTs.",
    link: "https://wallet.keplr.app/#/stargaze/stake?tab=inactive-validators&modal=stake&validator=starsvaloper1heysdk56e4t8vaq5msmek2hsnc6guv8mhklcqx"
  },
  {
    title: "Akash",
    logo: akash,
    apr: "-",
    description: "Coming Soon",
    link: "https://wallet.keplr.app/#/stargaze/stake?tab=inactive-validators&modal=stake&validator=starsvaloper1heysdk56e4t8vaq5msmek2hsnc6guv8mhklcqx"
  }
]

const Validator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const chainRow = [];
  let varRow =[];
  for(let i=1; i<=chains.length; i++){
    let currentChain = chains[i-1];
    varRow.push(Chain(currentChain));
    if (i%3 == 0){
      chainRow.push(varRow);
      varRow = [];
    }
  }
  if (varRow.length > 0){
    chainRow.push(varRow);
  }

  return (
    <div className="validator">
      <div className="validator-title">
        <ParalaxSectionTitle title={"Our Values"}/>
      </div>
      <div className="validator-chars">
        {data.map((file,item) => (
            <div className="validator-card">
              <img src={file.logo} className="validator-logo"/>
              <h1>
                {file.title}
              </h1>
              <div>
              {file.content}
              </div>
              </div>
              ))}
      </div>
      <div className="validator-title">
        <ParalaxSectionTitle title={"Our chains"}/>
      </div>
      <div className="validator-chains">
      {chainRow.map(function(file,item){
          return(
            <div className="chain-row">
              {file}
            </div>
            )
          }
        )
      }
      </div>
    </div>
  );
};

Validator.propTypes = {};

const Chain = (file) => {
  return (
    <div className="validator-token">
      <div className="validator-token-right">
        <img src={file.logo}/>
      </div>
      <div className="validator-token-left">
        <h1>
          {file.title}
        </h1>
        <div>
          APR: {file.apr}
        </div>
        <div>
          {file.description}
        </div>
      </div>
      <a href={file.link} target="_blank">
        Stake
      </a>
    </div>
  )
}

export default Validator;
