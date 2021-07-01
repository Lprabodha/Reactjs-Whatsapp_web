import React from "react";

function ChatSendBox(props) {
  return (
    <div className={`sendbox flex aic`}>
      <button className={`icon-insert_emoticon s24`} />
      <textarea className={`new-message s14 font`} placeholder={`Type a message`}/>
      <button className={`icon-mic s24`} />
    </div>
  );
}

export default ChatSendBox;
