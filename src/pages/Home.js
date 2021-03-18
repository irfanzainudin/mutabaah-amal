import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

// components
import Amal from '../components/Amal';

// stylesheets
import './Home.css';

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

  function checkDone(amal_id) {
    const updated_amalan = amalan.filter(item => item.id !== amal_id);
    setAmalan(updated_amalan);
  }

  function addAmal() {
    const new_amal = { id: uuidv4(), amal: 'Istighfar 100 kali', frequency: '1/week' };
    const updated_amalan = amalan.concat(new_amal);
    setAmalan(updated_amalan);
  }

  return (
    <div className="container">
      <div className="add-container">
        <button className="add-buttons" onClick={() => addAmal()}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      {
        amalan.length === 0 ? <h3 className="center">You're all caught up, alhamdulillah!</h3> : amalan.map((item) => {
          return (
            <Amal item={item} checkDone={checkDone} />
          )
        })
      }
    </div>
  )
}

export default Home;