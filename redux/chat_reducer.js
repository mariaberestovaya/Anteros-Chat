const GET_CHAT_MESSAGE = "connect-mirfak/app/GET_CHAT_MESSAGE";

let initialState = {
  chat: [
    {
      roomname: "roomname",
      password: "password",
    },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_MESSAGE:
      const chat = {
        roomname: action.roomname,
        password: action.password,
      };
      return {
        ...state,
        chat: [...state.chat, chat],
      };

    default:
      return state;
  }
};

export const getChatMessageAC = (roomname, password) => {
  return {
    type: GET_CHAT_MESSAGE,
    roomname,
    password,
  };
};

export const getChatMessage = (roomname, password) => async (dispatch) => {
  const data = await fetch(`http://localhost:3000/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomname, password),
  });

  // dispatch(getChatMessageAC(data.roomname, data.passwod)r);
};

export default chatReducer;
