import React from "react"
import styled from "styled-components"
import "./stylesheets/About.css"
import { NavLink } from "react-router-dom"
import { Button } from "./styles/Button"
const About = () => {

  return <> <Wrapper>
    <div className="fullcontainerpadding container grid grid-two-column">
      <div className="section-hero-data">
        <p className='hero-top-data'>
          WE ARE BACK
        </p>
        <h1 className='hero-heading'>
          About Technova
        </h1>
        <h4>"5th April - 6th April"</h4>
        <p className='hero-para'>"Ignite Your Passion for Innovation:Join Us for a Spectacular Fusion of Technology and Talent!"</p>
        <Button className='btn eventpage-btn'>
          <NavLink to='/event'>Register Now</NavLink>
        </Button>
      </div>

      <div className="section-hero-image">
        <picture>
          <img className="hero-img" src="images/about_hero.png" />
        </picture>
      </div>
    </div>
    <div className='why'>
      <h2 style={{ fontWeight: 'bold' }}>Why join us?</h2>
      <div class="container">
        <div class="rectangle"></div>
      </div>
    </div>
    <div className='about_why container grid grid-three-column'>
      <div className='why_card'>
        <h3 class="card-title">Promoting Innovation:</h3>
        <ul className='show_description'>
          <li>Explore new possibilities and push boundaries in technology, inspiring forward-thinking solutions.</li>
          <li>Events feature talks and seminars where experts share insights, keeping attendees updated on trends.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title">Skill Development:</h3>
        <ul className='show_description'>
          <li>Participants in Technova events develop technical skills through workshops, seminars, and hands-on experiences.</li>
          <li>These opportunities prepare attendees for future challenges in the dynamic technological landscape.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title">Knowledge Sharing:</h3>
        <ul className='show_description'>
          <li>Technova feature workshops, seminars, and talks where experts share insights and expertise.</li>
          <li>Attendees learn from each other, staying updated on the latest trends and developments in technology.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title">Socializing platforms:</h3>
        <ul className='show_description'>
          <li>Technova unite professionals, students, researchers, and enthusiasts from diverse backgrounds.</li>
          <li>Networking and collaboration at these events create opportunities for new partnerships and professional growth.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title">Inspiration:</h3>
        <ul className='show_description'>
          <li>Technova events inspire attendees to pursue STEM careers by showcasing exciting possibilities and real-world technology applications.</li>
        </ul>
      </div>

    </div>
  </Wrapper>;
  </>
}
const Wrapper = styled.section`
padding: 7rem 0;

.fullcontainerpadding{
  padding-top: 0px;
}
.section-hero-data {
  display: flex;
  flex-direction: column;
  align-self: center; 
  padding-left: 70px;
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
  font-size: 5.0rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 80rem;
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
  height: 400px;
  width: 400px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 1rem 0;
  .section-hero-data {

    padding-left: 0; /* remove padding for mobile screens */
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 4.0rem;
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

export default About
