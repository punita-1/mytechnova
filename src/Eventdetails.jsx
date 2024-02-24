// EventDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const { eventId } = useParams();

    // Fetch event data based on eventId
    // For example, you can use the events array or fetch data from an API
    const eventData = { id: 1, title: "Event 1", description: "Event 1 description", image: "https://via.placeholder.com/150" };

    return (
        <div>
            <h2>{eventData.title}</h2>
            <img src={eventData.image} alt={eventData.title} />
            <p>{eventData.description}</p>
        </div>
    );
};

export default EventDetails;
