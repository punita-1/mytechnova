import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";

const HeroSection = ({ name, image }) => {
  return (<Wrapper>
    <div className="fullcontainerpadding container grid grid-two-column">
      <div className="section-hero-data">
        <p className='hero-top-data'>
          WE ARE BACK
        </p>
        <h1 className='hero-heading'>
          {name}
        </h1>
        <h3>"5th April - 6th April"</h3>
        <Timer />
        <p className='hero-para'>"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!"</p>
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
padding: 9rem 0;

.fullcontainerpadding{
  padding-top: 40px;
}
.section-hero-data {
  display: flex;
  flex-direction: column;
  align-self: center; 
  padding-left: 70px;
  justify-content: center;
}
.timer {
  justify-content: flex-start;
  margin-bottom: 2rem;
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
  font-size: 5.5rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  height: 400px;
  width: 400px;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 1rem 0;
  .section-hero-data {

    padding-left: 0; /* remove padding for mobile screens */
  }
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

  .grid {
    display: grid;
    grid-template-row: repeat(2, 1fr);
    gap: 2rem;
  }

`;

export default HeroSection
