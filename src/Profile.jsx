import React, { useState } from 'react';

const Profile = () => {
  // State to store user data
  const [user, setUser] = useState(null);

  // State to store event data
  const [events, setEvents] = useState([]);

  // Function to handle user login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Function to fetch event data based on user registration
  const fetchEvents = async () => {
    const response = await fetch('/api/events/' + user.id);
    const data = await response.json();
    setEvents(data);
  };

  // Effect to fetch event data when user data is available
  React.useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  return (
    <div>
      {/* Show user data */}
      {user && (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          {/* Show event data */}
          <h2>Registered Events:</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Login button for unauthenticated users */}
      {!user && (
        <button onClick={() => handleLogin({ name: 'John Doe', email: 'johndoe@example.com', id: 1 })}>
          Login
        </button>
      )}
    </div>
  );
};

export default Profile;