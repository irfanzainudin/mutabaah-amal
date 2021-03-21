import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/auth';

// our own components
import Stats from '../components/Stats';

// images
import dp from '../images/pexels-photo-220453.jpeg';

// stylesheets
import "./Profile.css";

function Profile() {
  const history = useHistory();

  const userSignout = () => {
    firebase.auth().signOut()
    .then(() => {
      console.log("logged out");
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="flex-container container">
      <img className="user-image" src={dp} />
      <h1>User People</h1>
      <div className="user-stats">
        <Stats title="Amals completed" stats="14 amals"/>
        <Stats title="Days of Istiqamah" stats="2 days"/>
      </div>
      <button id="sign-out-btn" onClick={() => userSignout()}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
      </button>
      {/* <h1>Profile</h1> */}
      {/* <h3 id="sign-out-btn" onClick={() => userSignout()}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</h3> */}
    </div>
  )
}

export default Profile;