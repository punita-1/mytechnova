import React, { useState } from 'react';
import './Event.css'
import { NavLink } from 'react-router-dom';
import CardGroup from './Cardgroup';
import events from "./assets/data"
import SearchBar from './SearchBar';

const Event = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search logic here
    // Then set the search results
    setSearchResults(/* search results */);
  };
  
  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  return (

    <div>

      <SearchBar onSearch={handleSearch} />
      {/* Display search results here */}
      {searchResults.map((result) => (
        <p key={result}>{result}</p>
      ))}

      <br />

      <div style={{ alignItems: 'center', textAlign: 'center' }}> <h1><b>EVENTS</b></h1>

      </div>
      <br />
      <br />

      <h2><b>CENTRALIZED EVENTS</b></h2>
      <CardGroup
        heading="Unite & Ignite: Events for All Students"
        events={events.slice(49, 52)}
        handleRegisterClick={handleRegisterClick}
      />
      <h2><b>DEPARTMENT EVENTS</b></h2>
      <CardGroup
        heading="Biotechnology department #ENGENISIS"
        events={events.slice(5, 8)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department of Management Studies(MBA) #ZENITH "
        events={events.slice(10, 13)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="DEPARTMENT OF AGRICULTURE ENGINEERING #CEEES "
        events={events.slice(15, 18)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="DEPARTMENT OF BIO MEDICAL ENGINEERING(BME) #MEDITRONICA "
        events={events.slice(18, 21)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department of Electrical Engineering"
        events={events.slice(23, 26)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department of Chemical Engineering #MANTHAN"
        events={events.slice(28, 31)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING #INTEC"
        events={events.slice(31, 34)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="DEPARTMENT OF Mathematics #MATHEMAGICIANS"
        events={events.slice(34, 37)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="DEPARTMENT OF PHYSICS #RAMAN"
        events={events.slice(37, 40)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department of COMPUTER SCIENCE ENGINEERING(CSE) #COSMOS"
        events={events.slice(40, 43)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department OF MECHANICAL ENGINEERING(MED) #SOMEC"
        events={events.slice(43, 46)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department OF CHEMISTRY #RASAYANAM"
        events={events.slice(46, 49)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Department OF ARCHITECHTURE"
        events={events.slice(52, 55)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="CIVIL DEPARTMENT #NIRMAN"
        events={events.slice(0, 3)}
        handleRegisterClick={handleRegisterClick}
      />
      <h2>SOCIETY EVENTS</h2>
      <CardGroup
        heading="SUNSHINE"
        events={events.slice(55, 57)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="E-Cell"
        events={events.slice(21, 23)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="LISOC (LITERARY SOCIETY) "
        events={events.slice(13, 15)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="SAVERA"
        events={events.slice(8, 10)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="Thinkbots"
        events={events.slice(26, 28)}
        handleRegisterClick={handleRegisterClick}
      />
      <CardGroup
        heading="OPEN SOURCE DEVELOPERS COMMUNITY #DCRUSTODC"
        events={events.slice(3, 5)}
        handleRegisterClick={handleRegisterClick}
      />

      {/* // Add more CardGroup components as needed */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h5>{selectedEvent.title}</h5>
            <div className="popup-text mb-3">
              <pre>{selectedEvent.description}</pre>
            </div>
            <NavLink
              className="btn btn-primary me-2 text-light btn-lg"
              to={"/registerform/" + selectedEvent.id}>
              Register Now
            </NavLink>

            <button className="btn btn-secondary btn-lg" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;