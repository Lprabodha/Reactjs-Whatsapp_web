import React from "react";

function ChatBubble(props) {


  const {dir} = props;
  return (
    <div className={`bubble flex  rel ${dir == 1 ? 'mine' : ''}`}>
      <div className={`ballon rel`}>
        <h2 className={`name s13 b`}>Prbath Udayanga</h2>
        <p className={`text s13 `}>Quick brown fox  jumps over the lazy dog!</p>
        <h2 className={`stamp  c777 s11 abs`}>10:53 AM</h2>
      </div>
    </div>
  );
}

export default ChatBubble;
