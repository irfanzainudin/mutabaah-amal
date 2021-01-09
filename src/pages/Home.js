import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPlusCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

var placeholder_amalan = [
  {
    id: uuidv4(),
    amal: 'Tilawah',
    frequency: '1/day'
  },
  {
    id: uuidv4(),
    amal: 'Solat Sunat Rawatib',
    frequency: '1/day'
  },
  {
    id: uuidv4(),
    amal: 'Puasa sunat',
    frequency: '1/month'
  },
  {
    id: uuidv4(),
    amal: 'Mathurat Sughra',
    frequency: '1/bi-day'
  },
  {
    id: uuidv4(),
    amal: 'Solat sunat witir',
    frequency: '1/week'
  },
  {
    id: uuidv4(),
    amal: 'Qiamulail',
    frequency: '1/month'
  },
  {
    id: uuidv4(),
    amal: 'Infaq',
    frequency: '1/month'
  }
];

function Home() {
  const [amalan, setAmalan] = useState(placeholder_amalan);

  function checkDone(amal_done) {
    const updated_amalan = amalan.filter(item => item.amal !== amal_done);
    setAmalan(updated_amalan);
  }

  function addAmal() {
    const new_amal = { amal: 'Istighfar 100 kali', frequency: '1/week' };
    const updated_amalan = amalan.concat(new_amal);
    setAmalan(updated_amalan);
  }

  return (
    <div className="container">
      {/* <h1>Home</h1> */}
      {/* <img src='http://unsplash.it/200/200?random' alt='placeholder image' className="User-image"/> */}
      <div className="Add-container">
        <button className="Add-buttons" onClick={() => addAmal()}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      {
        amalan.map((item) => {
          return (
            <div className="Amal-container" key={uuidv4()}>
              <div className="Amal-card">
                <Link to="/chatroom"><button><FontAwesomeIcon icon={faStickyNote} /></button></Link>
                <h3 className="Amal-title">{item.amal}</h3>
                <button onClick={() => checkDone(item.amal)}><FontAwesomeIcon icon={faCheckSquare} /></button>
              </div>
              <div className="Amal-note">
                <p>{item.frequency}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;