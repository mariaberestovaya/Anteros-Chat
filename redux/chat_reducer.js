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
        name: action.name,
        message: action.message,
        date: action.date,
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
    name: username,
    message,
    date,
  };
};

export const getChatMessage = (username, password) => async (dispatch) => {
  const data = await fetch(`http://localhost:3000/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username, password),
  });

  dispatch(getChatMessageAC(data));
};

export default chatReducer;
