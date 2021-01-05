import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPlusCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

var placeholder_amalan = ['Tilawah', 'Solat Sunat Rawatib', 'Puasa Sunat', 'Al-Mathurat Sughra', 'Solat Sunat Witir', 'Qiamulail', 'Infaq'];

function Home() {
  const [amalan, setAmalan] = useState(placeholder_amalan);

  function checkDone(amal_done) {
    const updated_amalan = amalan.filter(amal => amal !== amal_done);
    setAmalan(updated_amalan);
  }

  return (
    <div className="container">
      {/* <h1>Home</h1> */}
      {/* <img src='http://unsplash.it/200/200?random' alt='placeholder image' className="User-image"/> */}
      <div className="Add-container">
        <button className="Add-buttons">
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      {
        amalan.map((amal) => {
          return (
            <div className="Amal-container">
              <div className="Amal-card">
                <Link to="/chatroom"><button><FontAwesomeIcon icon={faStickyNote} /></button></Link>
                <h3 className="Amal-title">{amal}</h3>
                <button onClick={() => checkDone(amal)}><FontAwesomeIcon icon={faCheckSquare} /></button>
              </div>
              <div className="Amal-note">
                <p>1/day</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;