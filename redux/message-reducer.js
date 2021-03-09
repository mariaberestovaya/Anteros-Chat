import { helperAPI } from "../helpers/api";

const GET_MESSAGE = "chat/GET_MESSAGE";
const NEW_MESSAGE = "chat/NEW_MESSAGE";

const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        messages: [...action.payload],
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export const getUserMessages = (chat_id) => async (dispatch) => {
  const payload = await helperAPI("/messages", { chat_id }, "POST");
  dispatch({ type: GET_MESSAGE, payload });
};

export const createNewMessages = (user_id, chat_id, content) => async (
  dispatch
) => {
  const args = { user_id, chat_id, content };
  const payload = await helperAPI("/new-message", args, "POST");
  dispatch({ type: NEW_MESSAGE, payload });
};

export default messageReducer;
