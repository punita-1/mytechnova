import "./AboutCard.css";
import { NavLink } from "react-router-dom";
import React from "react";
const AboutCard = () => {
  return (
    <><div className="myClassForThisDiv container grid grid-two-row">
    <div>
      <h3 class="aboutCardHeading">About Technova</h3>
      
        <p class="aboutCardDescription">
          Welcome to Technova - an exciting celebration of innovation,
          creativity, and teamwork! Dive into a variety of events showcasing
          the best in technology, creativity, and talent. Discover a range of
          activities, from captivating displays at our central events to
          skillful competitions organized by departments and engaging
          initiatives by university societies. Don't miss out on this chance
          to be part of something extraordinary. Join us at Technova, and
          together, let's embark on a journey of discovery, innovation, and
          endless opportunities!
        </p>
      
      <div><NavLink to='/event'>Explore the events</NavLink></div>
        
    </div>
      <div className="aboutGridWrapper">
        <h3 className="aboutGridHeading aboutCardHeading">why join us</h3>

        <div className="container grid grid-three-column">
          <div><br/>Opportunity
            <p className="aboutGridDescription aboutCardDescription">
              Opportunity for personal and professional growth. Networking
              with peers and industry professionals.
            </p>
          </div>



          <div><br/>Recognition
            <p className="aboutGridDescription aboutCardDescription">
              Hands-on experiential learning. Recognition and rewards for
              achievements.
            </p>
          </div>



          <div><br/>Education
            <p className="aboutGridDescription aboutCardDescription">
              Inspiration to think creatively and pursue innovation.
              Community engagement and collaboration.
            </p>
          </div>



        </div>
      </div>
      </div>
    </>


  );
};

export default AboutCard;
