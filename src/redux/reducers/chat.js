const initialState = {
  // current user
  user: {
    ID: 1,
    dp: `https://placeimg.com/50/50/people?${new Date().getTime()}`,
    name: `Prabath Udayanga`,
    status: `Online`,
  },
  chat: [
    {
      ID: 1,
      uid: 1,
      text: `Quick brown fox  jumps over the lazy dog!`,
      media: {
        type: `image`,
        src: `https://placeimg.com/640/480/any`,
      },
    },
    {
      ID: 2,
      uid: 1,
      text: null,
      media: {
        type: `audio`,
        src: `https://www.zuz.com.pk/audio.mp3`,
      },
    },
    {
      ID: 3,
      uid: 0,
      text: null,
      media: {
        type: `video`,
        poster:`https://placeimg.com/640/480/any?v=true`,
        src: `https://www.zuz.com.pk/video.mp4`,
      },
    },
    {
        ID: 4,
        uid: 1,
        text: `Hi i am working fine what about you?`,
        media: null,
      }
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHAT_STATE":
      return { ...state, ...action.state };
      break;
    default:
      return state;
  }
}
