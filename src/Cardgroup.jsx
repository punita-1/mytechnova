import React from 'react';
import Card from './Card';

const CardGroup = ({ heading, events, handleRegisterClick }) => {
  return (
    <div className='my-5 py-5 container'>
      <h2 style={{fontWeight:600}}>{heading}</h2>
      <div className="row justify-content-center align-items-center w-100">
        {events.map((event) => (
          <Card
            key={event.id}
            image={event.image}
            title={event.title}
            min={event.min}
            max={event.max}
            handleRegisterClick={() => handleRegisterClick(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;