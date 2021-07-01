import React from "react";
import ChatBubble from "./ChatBubble";

function ChatMessages(props) {
  return (
    <div className={`chat rel flex col`}>
      {["", "", "", "", "", "", "", "", "", ""].map((node,index) => (
        <ChatBubble  dir={index % 2 === 0 ? 1 : 0}/>
      ))}
    </div>
  );
}

export default ChatMessages;
