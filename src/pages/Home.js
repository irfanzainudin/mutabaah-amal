import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const amalan = ['Tilawah', 'Solat Sunat Rawatib', 'Puasa Sunat', 'Al-Mathurat Sughra', 'Solat Sunat Witir', 'Qiamulail', 'Infaq'];

function Home() {
  return (
    <div className="container">
      {/* <h1>Home</h1> */}
      {/* <img src='http://unsplash.it/200/200?random' alt='placeholder image' className="User-image"/> */}
      <div className="Action-container">
        <button className="Action-buttons">
          +
        </button>
      </div>
      {
        amalan.map((amal) => {
          return (
            <div className="Amal-container">
              <div className="Amal-card">
                <h3 className="Amal-title">{amal}</h3>
                <button><FontAwesomeIcon icon={faCheckSquare} /></button>
              </div>
              <p className="Amal-note">1/day</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;