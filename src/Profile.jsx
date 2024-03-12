import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './services/firebase';
import { authServices } from './services';
import { Link, Navigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [events, setEvents] = useState([]);

  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  });

  const logoutHandler = (e) => {
    e.preventDefault();
    authServices.logout().then((res) => {
      // console.log(res);
      // user logged out
    }).catch((Err) => Err);
  }

  const userLog = (e) => {
    e.preventDefault();
    console.log(user);
  }

  const updateProfile = (e) => {
    e.preventDefault();
    authServices.profile(user, "Abhinav", 6395074100, "21001001003").then((res)=> {
      console.log(res);
    })
    // console.log(user);
  }

  // if (auth.currentUser) {
  //   // console.log(auth.currentUser);
  //   return <Navigate to="/signup" />
  // }
  return (
    <div className='mx-4'>
      {user && (
        <div className='mx-2'>
          <h1>Welcome, {user.displayName ? user.displayName : "User"} !</h1>
          <p>Email: {user.email}</p>
          <button className='btn btn-primary btn-lg me-4' onClick={userLog}>
            Log User in console
          </button>
          <button className='btn btn-success btn-lg me-4' onClick={updateProfile}>
            Update Profile
          </button>
          <button className='btn btn-danger btn-lg' onClick={logoutHandler}>
            Logout
          </button>
          {/* Show event data */}
          {events.length ?
            <div>
              <h2>Registered Events:</h2>
              <ul>
                {events.map((event) => (
                  <li key={event.id}>{event.name}</li>
                ))}
              </ul>
            </div> : null}
        </div>
      )}
      {/* Login button for unauthenticated users */}
      {!user && (
        <Link to="/signup" className='btn btn-primary btn-lg m-3'>
          Login
        </Link>
      )}
    </div>
  );
};

export default Profile;