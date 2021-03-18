import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

// our own components
import Message from '../components/Message';

// stylesheets
import './Chatroom.css';

// placeholder msgs
const msgs = [
  {
    username: "mentor",
    content: <p>Salam</p>,
  },
  {
    username: "mentee",
    content: <p>Waalaikummussalam :)</p>,
  },
  {
    username: "mentor",
    content: <p>Buat pe tu?</p>,
  },
  {
    username: "mentor",
    content: <p>Dah baca Quran hari ni?</p>,
  },
  {
    username: "mentor",
    content: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>,
  },
  {
    username: "mentee",
    content: <p>Dah, alhamdulillah</p>,
  },
  {
    username: "mentee",
    content: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>,
  },
  {
    username: "mentor",
    content: <p>Terbaik! Jangan lupa tick</p>,
  },
  {
    username: "mentee",
    content: <p>Oh lupa</p>,
  },
  {
    username: "mentee",
    content: <p>Ok, done</p>,
  },
  {
    username: "mentor",
    content: <p>Jzkk</p>,
  },
  {
    username: "mentee",
    content: <p>Waiyyak</p>,
  },
];

function Chatroom() {
  const username = "mentor";

  // hooks
  const { amal } = useParams();
  var history = useHistory();
  const [newChat, setNewChat] = useState("");
  const [chats, setChats] = useState(msgs);
  var messagesEnd = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const submitMessage = (e) => {
    e.preventDefault();
    var newChats = chats.concat({
      username: username,
      content: <p>{ e.target[0].value }</p>
    });
    setChats(newChats);
    scrollToBottom();
    setNewChat("");
  }

  const handleChange = (e) => {
    setNewChat(e.target.value);
  }

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <b className="go-back" onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </b>
        <b>{ amal }</b>
        <b className="mentee-dp"><FontAwesomeIcon icon={faUser} /></b>
      </div>
      <div className="chatroom-body">
        <ul className="chats">
          {
            chats.map((chat) => {
              return (
                <Message chat={chat} user={username} />
              )
            })
          }
          <div className="dummy-div" ref={(el) => { messagesEnd = el }}></div>
        </ul>
      </div>
      <form className="new-chat" onSubmit={(e) => submitMessage(e)}>
        <input type="text" className="input-chat" placeholder="Type your message" value={newChat} onChange={(e) => handleChange(e)} />
        <button type="submit" className="submit-chat"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
    </div>
  )
}

export default Chatroom;