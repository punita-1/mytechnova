import React from "react";
import EventCard from "./Card";

const events = [
  {
    id: 1,
    title: "Event 1",
    image: "https://via.placeholder.com/150",
    description: "This is event 1 description.",
  },
  {
    id: 2,
    title: "Event 2",
    image: "https://via.placeholder.com/150",
    description: "This is event 2 description.",
  },
  // More events...
];

const Event = () => {
  return (
    <div className="events-page">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Event;
