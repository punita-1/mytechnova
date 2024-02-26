import React, { useState } from 'react';
import HeroSection from "./Components/HeroSection";
import SocialIcon from "./Socialicon";
import AboutCard from "./AboutCard";
import Previously from "./previously";
import CardGroup from './Cardgroup';
import Venue from "./venue";
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const data = {
    name: "Technova 2024",
    image: "./images/home_hero.png"
  };
  const events = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Projectile Precision Challenge',
      description: `
      
      Welcome to the Projectile Precision Challenge, where creativity meets precision in a 
      thrilling two-round competition! In Round 1, participants will unleash their paper-folding skills as they 
      craft aerodynamic paper airplanes designed to soar through the air with speed and accuracy. Throughout 
      both rounds, participants will demonstrate their creativity, technical skills, and problem-solving 
      abilities as they strive for precision and accuracy in both the physical and digital realms. Judges will 
      evaluate the paper airplanes based on flight distance, accuracy, and aerodynamic performance, while 
      digital designs will be assessed for accuracy, innovation, and adherence to design specifications.
      
      Team size: 1-2
      
      Round 1:
      Aeronautic Aviators Contest: Participants will fold and craft paper airplanes before testing their designs 
      in a series of distance and accuracy challenges. Points will be awarded based on the distance flown and 
      the ability to hit designated targets.
      
      Rules:
      Here are the rules for the Aeronautic Aviators Contest:
      1.Time: 15 minutes.
      2.Materials: Each team will be provided with a standard set of materials for constructing paper airplanes. 
      This may include paper (of a specific size or weight), scissors, and tape. 
      3.Design Phase: Teams have a designated amount of time to design and construct their paper airplanes using 
      the provided materials. The design should incorporate principles of aerodynamics to achieve maximum 
      distance and accuracy.
      4.Launcher Specifications: Paper airplanes must be hand-launched by team members from a designated 
      starting point. The airplanes should be capable of sustained flight and must be powered solely by human 
      force.
      5.Scoring: Points are awarded based on the distance achieved by the paper airplane. The airplane that 
      travels the farthest distance from the starting point earns the team the highest score. 
      
      Round 2:
      In this round, participants will take their creativity to the digital realm as they bring their paper aero 
      paper designs to life using AutoCAD, the leading software for computer-aided design (CAD).
      Participants will have the opportunity to translate their handcrafted aero-paper designs into precise 
      digital models using AutoCAD's powerful tools and features. From intricate wing designs to streamlined 
      fuselages, participants will meticulously recreate every detail of their paper aero papers with precision 
      and accuracy.
      
      Rules:
      1.The teams will be given 30 minutes for the design.
      2.Taking outside help is prohibited.
      3.The design should be made on the spot.
      4.Predesigned drawings are not allowed.
      5.Participants will have to bring their own laptops 
      
      `

    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Scale Seekers ',
      description: ` 
      
      Welcome to Scale Seekers, where precision meets creativity in a thrilling two-round challenge! Scale 
      Seekers promises a blend of mental acuity and hands-on creativity, offering participants a chance to 
      showcase their skills, compete for glory, and above all, have a blast in the process. Join us for an 
      unforgettable event where every measurement counts and every tower reaches for the sky!

      Team Size: 1-2
      
      Round 1:
      Proximate: Step into the world of Proximate, where guessing dimensions is both a game and an art! Dive 
      into the challenge of estimating sizes, lengths, and widths of mysterious objects without a tape measure 
      in sight.
      
      Rules:
      1.Object Selection: A variety of objects with different shapes and sizes will be provided for participants 
      to guess the dimensions of.
      2.No Physical Measurement Tools: Participants are not allowed to use any physical measurements tools such 
      as rulers, tape measures, or calipers. Guesses must be made solely based on visual observation and 
      estimation.
      3.Time Limit: Each participant will be given a specific amount of time to examine and guess the dimensions 
      of each object.
      4.Multiple Dimensions: Participants are encouraged to guess various dimensions of the objects, including 
      length, width, height, and any other relevant measurements depending on the object's shape and complexity.
      5.Scoring: Points will be awarded based on the accuracy of the guesses. The closer the guess is to the 
      actual dimensions of the object, the higher the score.
      
      Round 2:
      Clay Tower Challenge: The objective of the Clay Tower Challenge is to build the tallest freestanding tower 
      using only clay and straws within a specified time limit.
      
      Rules:
      1.Time: 45 minutes
      2.Tower Building: Each team receives a predetermined amount of clay and a set number of straws. The clay 
        serves as the base and the straws as the building material for the tower.
      3.Tower Specifications:
        The tower must be freestanding, meaning it cannot be supported by any external structures or materials.
        Teams may use the clay as a base for stability, but the majority of the tower's height must be 
        constructed using only straws.
        Teams can shape the clay into a stable base for the tower using their hands.
        Straws can be cut or bent to fit the desired design of the tower.
      4.Height Measurement: Once the time limit is reached, use a measuring tape to determine the height of each 
        team's tower from the base to the highest point.
        
        `,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'DESIGN & SUSTAIN',
      description: `
      
      Design and Sustain invites participants to showcase their ingenuity in two exciting categories: ice cream 
      stick bridge design and energy-efficient building design. Participants have the option to choose one or 
      both categories, offering a platform to explore their creativity and engineering skills. Whether it's 
      crafting a sturdy bridge model or envisioning a sustainable building design.
      Team Size: 1-4
      Category 1:
      In this challenge, teams build ice cream stick bridges to withstand maximum weight. After designing, 
      bridges face the weight-bearing test. The team with the strongest bridge wins. Get ready for a thrilling 
      competition of creativity and resilience! Join us for Design & Sustain!
      
      Rules:
      1. Each participant, or team, will work with approximately 150 ice cream sticks.
      2. Ice cream sticks must be left whole.
      3. One sheet of newspaper is to be used for the deck of the bridge, cut to fit the bridge design.
      4. The bridge deck should be designed to have a matchbox car rolled across it. The car is approximately 
         35mm wide and 15mm high.
      5. A load is applied at the top of the bridge, near the center, using a loading plate.
      5. It is critical that the bridge must span a minimum 400mm gap. We recommend that the bridge be at least 
         450mm long to ensure that the bridge does not fall through the 400mm opening of the test apparatus when 
         the load is applied.
      6. The bridge must not exceed 125mm in width. 
      7. The load will be applied manually.
      
      Category 2:
      In this challenge, teams should be dedicated to the exploration and advancement of energy-efficient 
      building design! Participants will have to showcase their creativity and engineering prowess by designing 
      model buildings that prioritize energy efficiency, sustainability, and environmental stewardship.
      Design Parameters: Designs should prioritize energy efficiency, sustainability, and environmental 
      stewardship. Participants are encouraged to incorporate sustainable building materials, passive design 
      strategies, renewable energy technologies, and energy-efficient systems into their designs.
      
      Rules:
      1. Your model must be original. 
      2. The building should be at least G+1. 
      3. The building may be residential, commercial, or institutional.
      4. The model can be made by using any material.
      
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
        <h1 >Events</h1>
        <CardGroup
          heading="CIVIL DEPARTMENT #NIRMAN"
          events={events.slice(0, 3)}
          handleRegisterClick={handleRegisterClick}
        />

        <Button className='btn eventpage-btn'>
          <NavLink to='/event'>View all</NavLink>
        </Button>

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

