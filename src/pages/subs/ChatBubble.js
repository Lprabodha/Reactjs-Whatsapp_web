import React from "react";

function ChatBubble(props) {
  const { dir, meta, user } = props;
  const { ID, uid, text, media } = meta;

  const { name } = user;

  const getMedia = () => {
    if (media) {
      const { type, src,poster } = media;
    
      return (
        <div className={`media rel`}>
          {type == "image" && (
            <div
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          )}
          {type == "video" && (
            <div
              style={{
                backgroundImage: `url(${poster})`,
              }}
            />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bubble flex  rel ${dir == 1 ? "mine" : ""}`}>
      <div className={`ballon rel`}>
        <h2 className={`name s13 b`}>{name}</h2>

        {getMedia()}

        {text && <p className={`text s13 `}>{text}</p>}
        <h2 className={`stamp   s12 abs c${text ? "777" : "fff"}`}>10:53 AM</h2>
      </div>
    </div>
  );
}

export default ChatBubble;
