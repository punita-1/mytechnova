import React, { useContext } from "react";
import HeroSection from "./Components/HeroSection";
import SocialIcon from "./Socialicon";

const Home = () => {
  const data = {
    name: "Technova 2024",
    image: "./images/home_hero.png"
  };

  return (
    <>
      <HeroSection {...data} />
      <SocialIcon />
    </>
  );
};

export default Home;

