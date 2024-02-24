import React, { useContext } from "react";
import HeroSection from "./Components/HeroSection";
import SocialIcon from "./Socialicon";
import AboutCard from "./AboutCard";
import Previously from "./previously";
import Venue from "./venue";

const Home = () => {
  const data = {
    name: "Technova 2024",
    image: "./images/home_hero.png"
  };

  return (
    <>
      <HeroSection {...data} />
      <SocialIcon />
      <AboutCard/>
      <Previously/>
      <Venue/>
    </>
  );
};

export default Home;

