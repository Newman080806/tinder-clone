import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Pete"
        message="Hello"
        timestamp="69 minutes ago"
        profilePic="MN"
      />

      <Chat
        name="Zharr"
        message="Hello"
        timestamp="73 minutes ago"
        profilePic="MN"
      />

      <Chat
        name="Ben Dover"
        message="Hello"
        timestamp="120 minutes ago"
        profilePic="MN"
      />
    </div>
  );
}

export default Chats;
