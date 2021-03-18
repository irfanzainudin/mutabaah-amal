import React from 'react';

// stylesheets
import './Message.css';

export default function Message({ chat, user }) {
  return (
    <li className={`chat ${user === chat.username ? "right" : "left"}`}>
      { chat.content }
    </li>
  )
}