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
        <h3>"5th April - 6th April"</h3>
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
        <h3>Promoting Innovation:</h3>
        <p className='show_description'>
          Technova events provide a platform for showcasing innovative technologies, products, and ideas, fostering creativity and pushing the
          boundaries of what's possible.
        </p>
      </div>
      <div className='why_card'>
        <h3>Skill Development:</h3>
        <p className='show_description'>
          It offers opportunities for participants to enhance their technical skills through workshops, seminars, and hands-on experiences, preparing them for future challenges in the rapidly evolving technological landscape.
        </p>

      </div>
      <div className='why_card'>
        <h3>Knowledge Sharing:</h3>
        <p className='show_description'>
          Technova events often include workshops, seminars, and talks where experts share insights and expertise, allowing participants to learn
          from each other and stay updated on the latest trends and developments.
        </p>
        </div>
        <div className='why_card'>
          <h3>Socializing platforms:</h3>
          <p className='show_description'>
            Technova events bring together professionals, students, researchers, and enthusiasts from diverse backgrounds, facilitating networking
            and collaboration that can lead to new partnerships and opportunities.
          </p>

        </div>

        <div className='why_card'>
          <h3>Inspiration:</h3>
          <p className='show_description'>
            Technova events inspire attendees to pursue careers in STEM (Science, Technology, Engineering, and Mathematics) fields by showcasing
            the exciting possibilities and real-world applications of technology.
          </p>

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
