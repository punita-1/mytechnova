import React from "react"
import styled from "styled-components"
import "./stylesheets/About.css"
import { NavLink } from "react-router-dom"
import { Button } from "./styles/Button"
const About = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return <> <Wrapper>
    <div className="fullcontainerpadding container grid grid-two-column">
      <div className="section-hero-data">
        <p className='hero-top-data'>
          WE ARE BACK
        </p>
        <h1 className='hero-heading'>
          About Technova
        </h1>
        <p className='hero-para'>"Ignite Your Passion for Innovation:Join Us for a Spectacular Fusion of Technology and Talent!"</p>
        <h4 className="hero-date">"5th April - 6th April"</h4>
        <div className="button-container">
        <NavLink to='/gallery' onClick={handleButtonClick}>
          <Button className='btn visitgalbtn eventpage-btn'>
            Visit Gallery
          </Button>
        </NavLink>
        </div>
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
        <h3 class="card-title-mine">Promoting Innovation:</h3>
        <ul className='show_description'>
          <li>Explore new possibilities and push boundaries in technology, inspiring forward-thinking solutions.</li>
          <li>Events feature talks and seminars where experts share insights, keeping attendees updated on trends.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title-mine">Skill Development:</h3>
        <ul className='show_description'>
          <li>Participants in Technova events develop technical skills through workshops, seminars, and hands-on experiences.</li>
          <li>These opportunities prepare attendees for future challenges in the dynamic technological landscape.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title-mine">Knowledge Sharing:</h3>
        <ul className='show_description'>
          <li>Technova feature workshops, seminars, and talks where experts share insights and expertise.</li>
          <li>Attendees learn from each other, staying updated on the latest trends and developments in technology.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title-mine">Socializing platforms:</h3>
        <ul className='show_description'>
          <li>Technova unite professionals, students, researchers, and enthusiasts from diverse backgrounds.</li>
          <li>Networking and collaboration at these events create opportunities for new partnerships and professional growth.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title-mine">Inspiration:</h3>
        <ul className='show_description'>
          <li>Technova events inspire attendees to pursue STEM careers by showcasing exciting possibilities and real-world technology applications.</li>
        </ul>
      </div>
      <div className='why_card'>
        <h3 class="card-title-mine">Inspiration:</h3>
        <ul className='show_description'>
          <li>Technova events inspire attendees to pursue STEM careers by showcasing exciting possibilities and real-world technology applications.</li>
        </ul>
      </div>

    </div>
  </Wrapper>;
  </>
}
const Wrapper = styled.section`
padding: 5rem 0;

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
  margin-top:40px;
  text-transform: uppercase;
  font-weight: 500;
  color: #31363F;
  text-align: center;
  letter-spacing: 0.2rem;
}

.hero-top-data {
  
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: #31363F;
  text-align: center;
  letter-spacing: 0.2rem;
}

.hero-heading {
  color: var(--primary-background-color);
  font-family: fantasy;
  text-transform: uppercase;
  font-size: 8rem;
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


.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  max-width: 20rem;
  align-self: center;
  margin-top: 2rem;
}

picture {
  text-align: center;
}

.hero-img {
  height: 350px;
  width: 350px;
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
