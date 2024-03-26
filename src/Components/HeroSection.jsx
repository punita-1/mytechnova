import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";
import Timer from "../timer";
import { animate, motion } from 'framer-motion';
import './doodle.css';


const TextVariants = {
  initial: {
    x: -500,
    opacity: 0,

  },
  animate: {
    x: '0',
    opacity: '1',
    transition:
    {
      duration: 1,
      staggeredChildren: 0.1,


    }
  }
}


const SliderVariants = {
  initi: {
    x: 0,

  },
  anima: {
    x: '-200%',
    transition:
    {
      repeat: Infinity,
      // repeatType: "mirror",
      duration: 5,


    }
  }
}



const HeroSection = () => {

  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (<Wrapper className="hero">
    <div
      className=" container grid grid-two-column">
      <motion.div variants={TextVariants} initial='initial' animate='animate'

        className="section-hero-data">
        <motion.p variants={TextVariants}
          className='hero-top-data'>
          WE ARE BACK
        </motion.p>
        <motion.h1 variants={TextVariants}
          className='hero-heading'>
          Technova 2024
        </motion.h1>
        <motion.p initial={{ x: -500, opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{ delay: '0.3', duration: '1' }}
          className='hero-para'>"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!"</motion.p>
        <motion.h3
          initial={{ x: -500, opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{ delay: '0.4', duration: '1' }}
          className="hero-date">"5th April - 6th April"</motion.h3>
        <Timer />
        <motion.div style={{textAlign:'center', alignItems:'center'}} className="slidingTextContainer fullcontainerpadding"
          variants={SliderVariants}
          initial="initi" animate="anima">
          Technova 2024
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: '0',scale:'1' }}
          animate={{ x: '0', opacity: '1',scale:'1.5' }}
          transition={{ delay: '0.6', duration: '1' }}
          style={{ zIndex: '9999999999px' }}
          className="button-container">
          <NavLink to='/event' onClick={handleButtonClick}>
            <Button className='btn'>
              Register Now
            </Button>
          </NavLink>
        </motion.div>


      </motion.div>
      <div>
        <motion.div
        variants={TextVariants} animate='animate' initial='initial'
          className="section-hero-image">
          <picture>
            <img style={{ marginTop: '130px' }} className="hero-img" src="public/images/final.png" alt="Description of the image" />
          </picture>
        </motion.div>
      </div>


    </div>

  </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 5rem 0;

.fullcontainerpadding {
  padding-top: 0px;
  // overflow-x: hidden;
  width: 100%;
}

 .section-hero-data {
  display: flex;
  flex-direction: column;
  // overflow-x: hidden;
  align-self: center; 
  padding-left: 0px;
  justify-content: center;
  padding: 0 2rem;
}

.button-container {
  margin-left: 300px;
  display: flex;
  max-width: 13rem;
  justify-content: center;
}

.btn {
  max-width: 20rem;
  z-index:9999;
}

.btn:hover a {
  color: white;
}

.timer{
  padding-left: 150px;
  padding-right: 150px;
}

.hero-top-data {
  margin-top:40px;
  margin-left:15px;
  width:780px;
  text-transform: uppercase;
  font-weight: 500;
  font-size:22px;
  color: rebeccapurple;
  letter-spacing: 0.2rem;
}

.hero-heading {
    color: lightgrey;
width:780px;
    text-transform: uppercase;
    font-size: 9rem;
}
.hero-date{
  // margin: 20px 0px 0px;
  // font-family: "Paprika", system-ui;
  font-weight: 600;
  font-size: 2.6rem;
  padding: 10px;
  width:780px;
  // border-radius: 5px;
  text-align: center;
}
.hero-para {
    // font-family: "Sorts Mill Goudy", serif;
    // margin-top: 2rem;
    width:780px;
    color:lightgrey;
    font-size: 2.4rem;
    // text-align: center;
    // line-height: 28px;
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
