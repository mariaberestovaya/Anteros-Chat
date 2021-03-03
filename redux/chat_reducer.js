const GET_CHAT = "anteros-chat/app/GET_CHAT";

let initialState = null;

const chat_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        id: action.data._id,
        name: action.data.name,
        user_id: action.data.user_id,
      };
    default:
      return state;
  }
};

export const getUserChatAC = (data) => {
  return {
    type: GET_CHAT,
    data,
  };
};

export const getUserChat = (user_id) => async (dispatch) => {
  const res = await fetch("/api/chat", {
    body: JSON.stringify({
      user_id: user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();

  dispatch(getUserChatAC(result));
};

export default chat_reducer;
