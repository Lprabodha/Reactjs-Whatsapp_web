import React from "react";
import ChatBubble from "./ChatBubble";
import { connect } from "react-redux";

function ChatMessages(props) {

  const {chat,user } = props;



  return (
    <div className={`chat rel flex col`}>
      {chat.map((item,index) => (
        <ChatBubble user={user} meta={item} dir={index % 2 === 0 ? 1 : 0}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "CHAT_STATE", state: { loaded: loaded } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
