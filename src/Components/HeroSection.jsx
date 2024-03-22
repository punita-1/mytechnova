import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";

const HeroSection = ({ name, image }) => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (<Wrapper>
    <div className="fullcontainerpadding container grid grid-two-column">
      <div className="section-hero-data">
        <p className='hero-top-data'>
          WE ARE BACK
        </p>
        <h1 className='hero-heading'>
          {name}
        </h1>
        <p className='hero-para'>"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!"</p>
        <h3 className="hero-date">"5th April - 6th April"</h3>
        <Timer />
        {/* <div className="button-container">
          <Button className='btn'>
            <NavLink to='/event'>Register Now</NavLink>
          </Button>
        </div> */}
        <div className="button-container">
          <NavLink to='/event' onClick={handleButtonClick}>
            <Button className='btn'>
              Register Now
            </Button>
          </NavLink>
        </div>

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
padding: 5rem 0;

.fullcontainerpadding{
  padding-top: 0px;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
 .section-hero-data {
  display: flex;
  flex-direction: column;
  align-self: center; 
  padding-left: 0px;
  justify-content: center;
}

.button-container {
  display: flex;
  justify-content: center;
}

.btn {
  max-width: 20rem;
}

.btn:hover a {
  color: #5C8374;
}

.timer{
  padding-left: 150px;
  padding-right: 150px;
}

.hero-top-data {
  margin-top:40px;
  text-transform: uppercase;
  font-weight: 500;
  color: #31363F;
  text-align: center;
  letter-spacing: 0.2rem;
}

.hero-heading {
    color: var(--primary-background-color);
    font-family: fantasy;
    text-transform: uppercase;
    font-size: 9rem;
    width: 70rem;
    text-align: center;
    letter-spacing: 0.3rem;
}
.hero-date{
  margin: 20px 0px 0px;
  font-family: "Paprika", system-ui;
  font-weight: 600;
  font-size: 2.6rem;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
.hero-para {
    font-family: "Sorts Mill Goudy", serif;
    margin-top: 2rem;
    width: 70rem;
    font-size: 2.4rem;
    text-align: center;
    line-height: 28px;
    font-style: italic;
    font-weight: 600;
    text-align: center;
}

.hero-img {
  height: 350px;
  width: 350px;
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
  align-self: center;
  margin-top: 2rem;
  }
  
  .hero-top-data {
    margin-top:40px;
    text-transform: uppercase;
    font-weight: 500;
    color: #31363F;
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

`;

export default HeroSection
