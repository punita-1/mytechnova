import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";

const HeroSection = ({ name, image }) => {
    return (<Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top-data'>
                    WE ARE BACK
                </p>
                <h1 className='hero-heading'>
                    {name}
                </h1>
                <h3>"12th March - 14th March"</h3>
                <Timer/>
                <p className='hero-para'>"Ignite Your Passion for Innovation:Join Us for a Spectacular Fusion of Technology and Talent!"</p>
                <Button className='btn eventpage-btn'>
                    <NavLink to='/event'>Register Now</NavLink>
                </Button>

            </div>

            <div className="section-hero-image">
                <picture>
                    <img src={image} />
                </picture>
            </div>

        </div>
    </Wrapper>
    )  
};

const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 6.4rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
`;

export default HeroSection
