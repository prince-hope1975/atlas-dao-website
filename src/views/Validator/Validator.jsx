import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import globe from "../../images/globe.svg";
import shield from "../../images/shield.svg";
import world from "../../images/world.svg";
import stars from "../../images/stars.png";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle";

const data = [
  {
    title: "title 1",
    logo: shield,
    content: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos"
  },
  {
    title: "title 2",
    logo: globe,
    content: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos"
  },
  {
    title: "title 3",
    logo: world,
    content: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos"
  }
]
const chains = [
  {
    title: "Stargaze",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  },
  {
    title: "title 2",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  },
  {
    title: "title 3",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  },
  {
    title: "title 1",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  },
  {
    title: "title 2",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  },
  {
    title: "title 3",
    logo: stars,
    apr: "apr",
    description: "has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cos",
    link: "https://www.google.com"
  }
]

const Validator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let chainRow = [];
  let varRow =[];
  for(var i=1; i<=chains.length; i++){
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
        <ParalaxSectionTitle title={"Our Validators"}/>
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
