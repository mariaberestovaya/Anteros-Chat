import { chatAPI } from "../api";

const GET_CHAT = "GET_CHAT";

let initialState = null;

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const getUserChat = (user_id) => async (dispatch) => {
  const payload = await chatAPI.getUserChat(user_id);

  dispatch({ type: GET_CHAT, payload });
};

export default chatReducer;
