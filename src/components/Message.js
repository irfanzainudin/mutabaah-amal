import React from 'react';

// stylesheets
import './Message.css';

export default function Message({ chat, user }) {
  console.log(chat.content);
  console.log(user);
  return (
    <li className={`chat ${user === chat.username ? "right" : "left"}`}>
      { chat.content }
    </li>
  )
}