import React from "react"
import HeroSection from "./Components/HeroSection"
const About = () => {
  const data ={
name:"About Technova",
image:"./images/about_hero.png"
  };
  return  <HeroSection{...data} />;
 
}

export default About
