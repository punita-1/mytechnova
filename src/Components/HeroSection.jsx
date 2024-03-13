import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";

const HeroSection = ({ name, image }) => {
  return (<Wrapper>
    <div className="fullcontainerpadding container">
      <div className="section-hero-data flex absolute-center">
        <p className='hero-top-data'>
          WE ARE BACK
        </p>
        <h1 className='hero-heading'>
          {name}
        </h1>
        <p className='hero-para'>"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!"</p>
        <h3 className="hero-date">"5th April - 6th April"</h3>
        <Timer />
        <Button className='btn eventpage-btn'>
          <NavLink to='/event'>Register Now</NavLink>
        </Button>
      </div>

      <div className="section-hero-image">
        <picture>
          <img className="hero-img" src={image} />
        </picture>
      </div>

    </div>
  </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 4rem 0 6rem;

.fullcontainerpadding{
  padding-top: 0px;
}
.section-hero-image{
      position: absolute;
      z-index: 99999999;
      top: 60px;
      right: 300px;
}
.section-hero-data {
  margin-top:30px;
  // width:125%;
  flex-direction: column;
  // padding-left: 70px;
}
.timer {
  justify-content: flex-start;
  // margin-top: 2rem;
}
.btn {
  max-width: 20rem;
}

.hero-top-data {
  margin-top:40px;
  text-transform: uppercase;
  font-weight: 500;
  color: #31363F;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 8px;
}

.hero-heading {
    letter-spacing: 4px;
    color: var(--primary-background-color);
    font-family: fantasy;
    text-align: center;
    text-transform: uppercase;
    font-size: 12rem;
}
.hero-date{
  margin: 15px 0px 0px;
  // font-family: fantasy;
  font-family: "Paprika", system-ui;
  font-weight: 600;
  font-size: 2.6rem;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  letter-spacing:3px;
}
.hero-para {
    font-family: "Sorts Mill Goudy", serif;
    margin-top: 2rem;
    max-width: 64rem;
    font-size: 2.4rem;
    text-align: center;
    letter-spacing: 0.6px;
    line-height: 28px;
    font-style: italic;
    font-weight: 600;
}

.section-hero-image {
  // display: flex;
  // justify-content: flex-end;
  // align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  height: 180px;
  width: 180px;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 1rem 0;
  .section-hero-data {

    padding-left: 0; 
  }

  .fullcontainerpadding{
    padding-top: 40px;
  }
  .btn {
    max-width: 20rem;
  }
  
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  
  .hero-heading {
    text-transform: uppercase;
    font-size: 5.0rem;
  }
  
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 40rem;
  }
  .hero-img {
    height: 400px;
    width: 400px;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  picture {
    text-align: center;
  }
}


  .grid {
    display: grid;
    grid-template-row: repeat(2, 1fr);
    gap: 2rem;
  }

`;

export default HeroSection
