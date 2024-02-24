import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <Link to={`/events/${event.id}`}>
                <button className="details-button">Details</button>
            </Link>

        </div>
    );
};

export default EventCard;
