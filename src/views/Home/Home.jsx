import React from "react";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle.jsx";
import Roadmap from "../Roadmap/Roadmap.jsx";
import rocket2 from "../../images/rocket2.png";
import rocket from "../../images/rocket.png";
import welcome from "../../images/welcome.jpg";
import Header from "../../components/Header/Header.jsx";

const Home = () => {

  return (
    <>
      <Header />
      <ParalaxSectionTitle title={"Welcome to Atlas DAO"} />
      <img src={welcome} id="welcomeImage" />
      <div className="home">
        <img src={rocket} id="rocket" />
        <img src={rocket2} id="shining-star" />
      </div>
      <Roadmap />
    </>
  );
};

export default Home;
