import React, {useContext} from "react";
import HeroSection from "./Components/HeroSection";


const Home = () => {
  
  const data ={
    name:"Technova 2024",
    image:"./images/home_hero.png"
  }
  return <HeroSection{...data} />;  
  
};

export default Home

