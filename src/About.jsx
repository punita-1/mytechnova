import React, { useState } from 'react';
import styled from "styled-components"
import "./stylesheets/About.css"
import { NavLink } from "react-router-dom"
import { Button } from "./styles/Button"
import { Tabs, Tab } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import './anotherdoodle.css';

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


// const svgVariants = {
//   hidden: { x: 480 },
//   visible: {
//     x: 0,
//     // scale:1.5,
//     transition: { duration: 0.5, type: 'spring', stiffness: '230' }
//   },
// }
// const pathVarients = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeInOut"
//     }

//   }
// }

const About = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const [activeTab, setActiveTab] = useState(0);
  return <> <Wrapper >
    <div className="fullcontainerpadding container grid grid-two-column">
      <motion.div variants={TextVariants} initial='initial' animate='animate'

        className="section-hero-data">
        <motion.p variants={TextVariants}
          className='hero-top-data'>
          WE ARE BACK
        </motion.p>
        <motion.h1 variants={TextVariants}
          className='hero-heading'>
          About Technova
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
        <motion.div
          initial={{ x: -500, opacity: '0', scale: '1' }}
          animate={{ x: '0', opacity: '1', scale: '1.5' }}
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
      <motion.div
        variants={TextVariants} animate='animate' initial='initial'
        className="section-hero-image">
        <img style={{ marginTop: '100px' }} className="hero-img" src="public/images/anotherfinal.png" alt="Description of the image" />

      </motion.div>
    </div>
    <div>
                        <h3  className="aboutGridHeading myheading">Why join us</h3>
                        <Tabs defaultActiveKey="Opportunity" onSelect={(key) => setActiveTab(key)}>
                            <Tab eventKey="Opportunity" title="Opportunity">
                                <p className="aboutGridDescription aboutCardDescription">
                                    Opportunity for personal and professional growth. Networking
                                    with peers and industry professionals.
                                </p>
                                <AnimatePresence>
                                    {activeTab === "Opportunity" && (
                                        <motion.img
                                            initial={{ x: '-1000px' }}
                                            animate={{ x: '0' }}
                                            exit={{ x: '-1000px' }}
                                            transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                            style={{ height: '20px' }}
                                            src="public/images/technova_gallery/events/robo_soccer.jpg"
                                            alt="Random Image"
                                        />
                                    )}
                                </AnimatePresence>
                            </Tab>
                            <Tab eventKey="Recognition" title="Recognition">
                                <p className="aboutGridDescription aboutCardDescription">
                                    Hands-on experiential learning. Recognition and rewards for
                                    achievements.
                                </p>
                                <AnimatePresence>
                                    {activeTab === "Recognition" && (
                                        <motion.img
                                            initial={{ x: '-1000px' }}
                                            animate={{ x: '0' }}
                                            exit={{ x: '-1000px' }}
                                            transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                            style={{ height: '20px' }}
                                            src="public/images/technova_gallery/events/your_image_for_recognition.jpg"
                                            alt="Random Image"
                                        />
                                    )}
                                </AnimatePresence>
                            </Tab>
                            <Tab eventKey="Education" title="Education">
                                <p className="aboutGridDescription aboutCardDescription">
                                    Inspiration to think creatively and pursue innovation.
                                    Community engagement and collaboration.
                                </p>
                                <AnimatePresence>
                                    {activeTab === "Education" && (
                                        <motion.img
                                            initial={{ x: '-1000px' }}
                                            animate={{ x: '0' }}
                                            exit={{ x: '-1000px' }}
                                            transition={{ delay: '0', duration: '1', type: 'spring', stiffness: '230' }}
                                            style={{ height: '20px' }}
                                            src="public/images/technova_gallery/events/your_image_for_education.jpg"
                                            alt="Random Image"
                                        />
                                    )}
                                </AnimatePresence>
                            </Tab>
                        </Tabs>
                    </div>
    {/* <div className='why'> */}
      {/* <h2 style={{ fontWeight: 'bold', color: 'lightgray' }}>Why join us?</h2> */}
      {/* <div class="container"> */}
      {/* <div class="rectangle"></div> */}
      {/* </div> */}
    {/* </div> */}
    {/* <div className='about_why container grid grid-three-column'> */}
    {/* <div className='why_card'>
        <h3 class="card-title-mine">Promoting Innovation:</h3>
        <ul className='show_description'>
          <li>Explore new possibilities and push boundaries in technology, inspiring forward-thinking solutions.</li>
          <li>Events feature talks and seminars where experts share insights, keeping attendees updated on trends.</li>
        </ul>
      </div> */}
    {/* <div className='why_card'>
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
      </div> */}
    {/* <div className='why_card'>
        <h3 class="card-title-mine">Socializing platforms:</h3>
        <ul className='show_description'>
          <li>Technova unite professionals, students, researchers, and enthusiasts from diverse backgrounds.</li>
          <li>Networking and collaboration at these events create opportunities for new partnerships and professional growth.</li>
        </ul>
      </div> */}
    {/* <div className='why_card'>
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
      </div> */}

    {/* </div> */}
  </Wrapper>;
  </>
}
const Wrapper = styled.section`
padding: 5rem 0;

.fullcontainerpadding {
  padding-top: 0px;
  width: 100%;
}

 .section-hero-data {
  display: flex;
  flex-direction: column;
  align-self: center; 
  padding-left: 0px;
  justify-content: center;
  padding: 0 0rem;
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
  font-size: 8rem;
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
  // padding-left:-10px;
  // padding-right:50px;
height: 350px;
width: 390px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 5rem 0;

  .fullcontainerpadding {
    padding-top: 0px;
    // width: 100%;
  }
  
   .section-hero-data {
    display: flex;
    flex-direction: column;
    align-self: center; 
    padding-left: 0px;
    justify-content: center;
    padding: 0 1rem;
  }
  
  .button-container {
    margin-left: 70px;
    
    display: flex;
    max-width: 20rem;
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
    padding-left: 0px;
    padding-right: 0px;
  }
  
  .hero-top-data {
    margin-top:40px;
    margin-left:9px;
    width:100%;
    text-transform: uppercase;
    font-weight: 500;
    font-size:18px;
    color: rebeccapurple;
    letter-spacing: 0.2rem;
    // text-align:center;
  }
  
  .hero-heading {
      color: lightgrey;
      width:100%;
      text-transform: uppercase;
      font-size: 4.0rem;
      text-align: center;
  }
  .hero-date{
    // margin: 20px 0px 0px;
    // font-family: "Paprika", system-ui;
    font-weight: 600;
    font-size: 2.6rem;
    padding: 10px;
    width:100%;
    // border-radius: 5px;
    text-align: center;
  }
  .hero-para {
      // font-family: "Sorts Mill Goudy", serif;
      // margin-top: 2rem;
      width:300px;
      color:lightgrey;
      font-size: 2.0rem;
      // text-align: center;
      // line-height: 28px;
      font-style: italic;
      font-weight: 500;
      text-align: center;
  }
  
  .hero-img {
    height: 290px;
    // align-item: center;
    width: 320px;
    // margin-left:60px;
    // margin-top:-200px;
    // padding-top: 90px;
    // transform: rotate(270deg); /* Rotate the image by 45 degrees */
  }
  
}
`;

export default About
