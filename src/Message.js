import React from 'react'
import "./Message.css";

export default function Message({ message, timestamp, user, userimage }) {
  return (
    <div className="message">
    <img src={userimage} alt="" />
    <div class="message__info">
    <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}...
          </span>
        </h4>
      <p>{message}</p>
    </div>
  </div>
  )
}
