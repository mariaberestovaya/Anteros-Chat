import { helperAPI } from "../helpers/api";

const GET_MESSAGE = "chat/GET_MESSAGE";
const GET_CHAT = "chat/GET_CHAT";
const NEW_MESSAGE = "chat/NEW_MESSAGE";

const initialState = {
  messages: [],
  chats: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        chats: [...action.payload],
      };
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

export const getUserChat = (user_id) => async (dispatch) => {
  const payload = await helperAPI("/chat", { user_id }, "POST");
  dispatch({ type: GET_CHAT, payload });
};

export default messageReducer;
