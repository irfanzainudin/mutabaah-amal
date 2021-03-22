import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// our own components
import { useAuth } from '../contexts/AuthContext';

// images
import dp from '../images/pexels-photo-220453.jpeg';

// stylesheets
import "./Profile.css";

function Profile() {
  const history = useHistory();
  const { logout, currentUser, getUsers } = useAuth();
  const [username, setUsername] = useState("");

  useEffect(async () => {
    try {
      const users = await getUsers();
      users.forEach((doc) => {
        const user = doc.data();
        if (user.email === currentUser.email) {
          setUsername(user.firstName + ' ' + user.lastName);
        }
      })
    } catch {
      console.log("Failed to query db");
    }
  }, []);

  const userSignout = async () => {
    await logout();
    history.push("/login");
  }

  return (
    <div className="flex-container container">
      <img className="user-image" src={dp} />
      <h1>{ username ? username : "User's name"}</h1>
      <button id="sign-out-btn" onClick={() => userSignout()}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
      </button>
      {/* <h1>Profile</h1> */}
      {/* <h3 id="sign-out-btn" onClick={() => userSignout()}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</h3> */}
    </div>
  )
}

export default Profile;