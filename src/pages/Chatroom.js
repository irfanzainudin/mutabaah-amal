import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';

// our own components
import Message from '../components/Message';

// stylesheets
import './Chatroom.css';

// placeholder msgs
const msgs = [
  {
    username: "mentor",
    content: <p>Hai</p>,
  },
  {
    username: "mentee",
    content: <p>Hai :)</p>,
  },
  {
    username: "mentor",
    content: <p>Buat pe tu?</p>,
  },
];

function Chatroom() {
  const { amal } = useParams();
  const username = "mentor";

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <h3><FontAwesomeIcon icon={faArrowLeft} /></h3>
        <h3>{ amal }</h3>
        <h3 className="mentee-dp"><FontAwesomeIcon icon={faUser} /></h3>
      </div>
      <div className="chatroom-body">
        <ul className="chats">
          {
            msgs.map((chat) => {
              return (
                <Message chat={chat} user={username} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Chatroom;