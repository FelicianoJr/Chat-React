import React from "react";
import Message from "../Message"


const ListChats = ({ messages = [] }) => {
  let name = "";
  let count = 0;
  return (
    messages.map((message, i) => {
      if (!name) {
        name = message.name;
        count += 1;
      } else {
        if (name === message.name) {
          count += 1;
        } else {
          count = 0;
        }
      }

      return <Message key={i} message={message} avatar={count === 1} />
    })

  );
};

export default ListChats;
