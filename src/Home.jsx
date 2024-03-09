import React, { useState } from 'react';
import HeroSection from "./Components/HeroSection";
import SocialIcon from "./Socialicon";
import AboutCard from "./AboutCard";
import Previously from "./previously";
import CardGroup from './Cardgroup';
import Venue from "./venue";
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
import './minorhome.css'

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const data = {
    name: "Technova 2024",
    image: "./images/home_hero.png"
  };
  const events = [
    {
      id: 50,
      image: 'https://via.placeholder.com/150',
      title: 'PROJRCT EXPO',
      min: '1',
      max: '5',
      category: 'centralized',
      description: `
  
      PROJECT EXPO: 
      Branch wise for all Branches of Engineering, Architecture, and Sciences
      
      `,
    },
    {
      id: 51,
      image: 'https://via.placeholder.com/150',
      title: 'HOBBY EXPO',
      min: '1',
      max: '1',
      category: 'centralized',
      description: `
  
      HOBBY EXPO:
      a) Exhibition
      b) Craftsman
      
      `,
    },
    {
      id: 52,
      image: 'public/images/events_profile_pic/poster_making_pic.png', //done
      title: 'POSTER PRESENTATION',
      min: '1',
      max: '1',
      category: 'centralized',
      description: `
      
      POSTER PRESENTATION:
      Branch wise for all Branches of Engineering, Architecture, and Sciences
      
      `,
    },]
  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };
  return (
    <>
      <HeroSection {...data} />
      <SocialIcon />
      <AboutCard />
      <Previously />
      <div>
        <h2 style={{ fontWeight: 'bold' }}>Events</h2>
        <CardGroup
          heading="Unite & Ignite: Events for All Students"
          events={events.slice(0, 3)}
          handleRegisterClick={handleRegisterClick}
        />

        <div className="button-container">
          <Button className='btn eventpage-btn'>
            <NavLink to='/event'>View all</NavLink>
          </Button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h5>{selectedEvent.title}</h5>
              <div className="popup-text">
                <pre>{selectedEvent.description}</pre>
              </div>
              <button className="btn btn-primary">Register Now</button>
              <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Venue />
    </>
  );
};

export default Home;

