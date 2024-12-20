import React from "react";

const MessageView = ({ message }) => {
  return (
    <div className="message-view">
      {message ? (
        <>
          <h2>{message.subject}</h2>
          <p>
            <strong>From:</strong> {message.sender}
          </p>
          <p>
            <strong>Date:</strong> {message.date}
          </p>
          <p>{message.content}</p>
        </>
      ) : (
        <h2>Select a message to view its content</h2>
      )}
    </div>
  );
};

export default MessageView;
