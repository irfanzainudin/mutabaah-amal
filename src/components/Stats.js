import React from 'react';

// stylesheets
import "./Stats.css";

function Profile({ title, stats }) {
  return (
    <div className="stats-container container">
      <span className="stats-title">{ title }</span>
      <span>{ stats }</span>
    </div>
  )
}

export default Profile;