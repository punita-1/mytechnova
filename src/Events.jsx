import React, { useState } from 'react';
import Card from './Card';
import './Event.css'

const Event = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Event 1',
      description: 'This is event 1 description.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Event 2',
      description: 'This is event 2 description.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Event 3',
      description: 'This is event 3 description.',
    },
    // Add more events here
  ];
  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Events</h1>
      <div className="card-group">
        {events.map((event) => (
          <Card
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            handleRegisterClick={() => handleRegisterClick(event)}
          />
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h5>{selectedEvent.title}</h5>
            <p>{selectedEvent.description}</p>
            <button className="btn btn-primary">Register Now</button>
            <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;