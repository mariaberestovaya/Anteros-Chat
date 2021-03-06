import { helperAPI } from "../helpers/api";

const GET_CHAT = "chat/GET_CHAT";

let initialState = [];

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
  const payload = await helperAPI("/chat", { user_id }, "POST");
  dispatch({ type: GET_CHAT, payload });
};

export default chatReducer;
