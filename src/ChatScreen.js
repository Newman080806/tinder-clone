import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "test",
      image: "...",
      message: "Yoooo",
    },
    {
      name: "T N",
      image: "...",
      message: "sike",
    },

    {
      message: "Howdy",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">WELCOME TO THE MESSAGE PAGE</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <FormControl>
          <InputLabel className="chatScreen__inputLabel">
            Type a message.....
          </InputLabel>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <Button
            disabled={!input}
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default ChatScreen;
