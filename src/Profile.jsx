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
    authServices.profile(user, "Abhinav", 6395074100, "21001001003", "DCRUST", "btech cse", "7").then((res) => {
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
          <div className="w-100 row my-5">
            <table className='table table-striped col-md-8 offset-md-2 col-12 mx-2 table-borderless text-break border border-2 border-primary rounded rounded-3'>
              <tbody>
                <tr>
                  <th scope='row' className='text-start'>Roll No</th>
                  <td className='text-start'>{user.photoURL.split("?")[1]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Email</th>
                  <td className='text-start'>{user.email}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Email Verified</th>
                  <td className='text-start'>{user.emailVerified ? "True" : "False"}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Phone</th>
                  <td className='text-start'>{user.photoURL.split("?")[0]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Organisation</th>
                  <td className='text-start'>{user.photoURL.split("?")[2]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Branch</th>
                  <td className='text-start'>{user.photoURL.split("?")[3]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Semester</th>
                  <td className='text-start'>{user.photoURL.split("?")[4]}</td>
                </tr>

              </tbody>
            </table>
          </div>
          {/* Show event data */}
          {events.length ?
            <div>
              <h2>Registered Events:</h2>
              <ul>
                {events.map((event) => (
                  <li key={event.id}>{event.name}</li>
                ))}
              </ul>
            </div> :
            <div className="row justify-content-center align-items-center">
              <div className='text-center w-100 fw-bold h3'>
                Not registered any event yet!
              </div>
              <div className="w-100 d-flex">
              <Link to="/event" className='btn btn-primary mx-auto btn-lg'>Register now</Link>

              </div>
            </div>}
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