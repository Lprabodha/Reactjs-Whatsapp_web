import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ChatHead(props) {
  console.log(props);
  const { user } = props;
  const { ID, dp, name, status } = user;
  return (
    <div className={`chathead flex`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img src={dp} />
        </Link>
        <div className={`meta`}>
          <h2 className={`name s14`}>{name}</h2>
          <h2 className={`status s12 c777 `}>{status}</h2>
        </div>
      </div>
      <div className={`actions rel flex aic`}>
        <button className={`icon-attach_file s24`} />
        <button className={`icon-more_vert s24`} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatHead);
