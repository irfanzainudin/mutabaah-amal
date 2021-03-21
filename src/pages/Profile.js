import React from 'react';

// our own components
import Stats from '../components/Stats';

// images
import dp from '../images/pexels-photo-220453.jpeg';

// stylesheets
import "./Profile.css";

function Profile() {
  return (
    <div className="flex-container container">
      <img className="user-image" src={dp} />
      <h1>User People</h1>
      <div className="user-stats">
        <Stats title="Amals completed" stats="14 amals"/>
        <Stats title="Days of Istiqamah" stats="2 days"/>
      </div>
      {/* <h1>Profile</h1> */}
      {/* <h3 id="sign-out-btn" onClick={() => userSignout()}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</h3> */}
    </div>
  )
}

export default Profile;