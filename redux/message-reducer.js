import { helperAPI } from "../helpers/api";

const GET_MESSAGE = "chat/GET_MESSAGE";

const initialState = null;

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        messages: [...action.payload],
      };
    default:
      return state;
  }
};

export const getUserMessages = (chat_id) => async (dispatch) => {
  const payload = await helperAPI("/messages", { chat_id }, "POST");
  dispatch({ type: GET_MESSAGE, payload });
};

export default messageReducer;
