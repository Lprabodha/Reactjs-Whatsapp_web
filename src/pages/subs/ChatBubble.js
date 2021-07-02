import React from "react";

function ChatBubble(props) {
  const { dir, meta, user } = props;
  const { ID, uid, text, media } = meta;

  const { name ,dp} = user;

  const getMedia = () => {
    if (media) {
      const { type, src, poster } = media;

      return (
        <div className={`media rel ${type}`}>
          {/**IMAGE */}
          {type == "image" && (
            <div className={`rel poster ${src.length > 1 ? `grid c${src.length}` : ""} `}>
              {src.map(img => <div
                style={{ backgroundImage: `url(${img})` }}
                className={`photo`}
              />)}
            </div>
          )}

          {/**VIDEO */}
          {type == "video" && (
            <div className={`rel poster`}>
              <div
                style={{ backgroundImage: `url(${poster})` }}
                className={`photo`}
              />
              <button className={`pp icon-play_arrow s24 abs abc`} />
            </div>
          )}

          {/**AUDIO */}
          {type == "audio" && (
            <div className={`rel audioplayer flex aic`}>
              <button className={`pp icon-play_arrow s24`} />
              <div className={`ctrls flex col`}>
                <div className={`slider rel`}>
                  <div className={`knob abs aby`} />
                </div>
                <div className={`abs extra flex aic `}>
                  <h2 className={`s11 c777 dur`}>00:15</h2>
                  <h2 className={`s11 c777 stmp`}>10:55 AM</h2>
                </div>
              </div>
              <div className={`udp`}>
                <img src={dp}/>
                </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bubble flex  rel ${dir == 1 ? "mine" : ""}`}>
      <div className={`ballon rel`}>
        { media?.type !=  "audio" && <h2 className={`name s13 b`}>{name}</h2>}

        {getMedia()}

        {text && <p className={`text s13 `}>{text}</p>}
        {media?.type != "audio" &&<h2 className={`stamp   s12 abs c${text ? "777" : "fff"}`}>10:53 AM</h2>}
      </div>
    </div>
  );
}

export default ChatBubble;
