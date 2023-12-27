import React from "react";

//This component displays a notification when the user enters the same word twice
function Notification({ showNotification }) {
  return (
    <>
      <div
        className={`notification-container ${showNotification ? "show" : ""}`}
      >
        <p>You have already entered this letter</p>
      </div>
    </>
  );
}

export default Notification;
