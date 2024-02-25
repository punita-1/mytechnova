import React from 'react';
import Card from './Card';

const CardGroup = ({ heading, events, handleRegisterClick }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <div className="card-group grid grid-three-column">
        {events.map((event) => (
          <Card
            key={event.id}
            image={event.image}
            title={event.title}
            handleRegisterClick={() => handleRegisterClick(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;