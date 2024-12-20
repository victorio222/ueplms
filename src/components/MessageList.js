import React from "react";

const MessageList = ({ messages, onMessageClick }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-item ${message.unread ? "unread" : ""}`}
          onClick={() => onMessageClick(message)}
        >
          <h3>{message.sender}</h3>
          <p>{message.subject}</p>
          <span>{message.date}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
