// import "./AboutCard.css";
import React from "react";
const AboutCard = () => {
  return (
    <><div className="container grid grid-two-row">
    <div>
      <h3>About Technova</h3>
      <div>
        <p>
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
      </div>
      
      <div>Explore the events</div>
    </div>
      <div>
        <h3>why join us</h3>

        <div className="container grid grid-three-column">
          <div><br/>Opportunity
            <p>
              Opportunity for personal and professional growth. Networking
              with peers and industry professionals.
            </p>
          </div>



          <div><br/>Recognition
            <p>
              Hands-on experiential learning. Recognition and rewards for
              achievements.
            </p>
          </div>



          <div><br/>Education
            <p>
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
