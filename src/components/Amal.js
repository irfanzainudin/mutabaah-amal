import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// stylesheets
import './Amal.css';

export default function Amal({ item, checkDone }) {
  return (
    <div className="amal-container" key={uuidv4()}>
      <div className="amal-header">
        <Link to={"/chatroom/" + item.amal}><h3 className="amal-title">{item.amal}</h3></Link>
        <button onClick={() => checkDone(item.id)}><FontAwesomeIcon icon={faCheckSquare} /></button>
      </div>
      <div className="amal-body">
        <p>{item.frequency}</p>
      </div>
    </div>
  )
}