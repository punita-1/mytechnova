import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import { api, authServices } from './services';
import { Link, Navigate } from 'react-router-dom';
import ProfileEvent from './ProfileEvent';

const Profile = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [registrations, setRegistrations] = useState([]);

  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  });

  const fetchEvents = (e) => {
    e?.preventDefault();
    const userRollnumber = user?.photoURL?.split("?")[1];
    api.getEventsRegisteredByYou(userRollnumber).then((response) => {
      const arr = [];
      response.docs.map((doc) => {
        console.log(doc.data());
        arr.push(doc.data());
      });
      setRegistrations(arr);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      fetchEvents();
    }, 2000);
  }, [])

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
    authServices.profile(user, "Abhinav", 6395074100, "21001001003", "DCRUST", "btech cse", "6").then((res) => {
      console.log(res);
    });
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
          <button className='btn btn-danger btn-lg me-4' onClick={logoutHandler}>
            Logout
          </button>
          <button className='btn btn-info btn-lg' onClick={fetchEvents}>
            Get Events
          </button>
          <div className="w-100 row my-5">
            <table className='table table-striped col-md-8 offset-md-2 col-12 mx-2 table-borderless text-break border border-2 border-primary rounded rounded-3'>
              <tbody>
                <tr>
                  <th scope='row' className='text-start'>Roll No</th>
                  <td className='text-start'>{user.photoURL?.split("?")[1]}</td>
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
                  <td className='text-start'>{user.photoURL?.split("?")[0]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Organisation</th>
                  <td className='text-start'>{user.photoURL?.split("?")[2]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Branch</th>
                  <td className='text-start'>{user.photoURL?.split("?")[3]}</td>
                </tr>
                <tr>
                  <th scope='row' className='text-start'>Semester</th>
                  <td className='text-start'>{user.photoURL?.split("?")[4]}</td>
                </tr>

              </tbody>
            </table>
          </div>
          {/* Show event data */}
          {registrations.length ?
            <div>
              <h2>Registered Events:</h2>
              <div className=''>
                {registrations.map((event, index) => (
                  <ProfileEvent data={event} key={index} index={index} />
                ))}
              </div>
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