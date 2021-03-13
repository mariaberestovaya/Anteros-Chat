import { helperAPI } from "../helpers/api";

const GET_OR_ADD_USER = "chat/GET_OR_ADD_USER";

let initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OR_ADD_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const register = (
  username,
  login,
  password,
  description,
  image
) => async (dispatch) => {
  const args = { username, login, password, description, image };
  const payload = await helperAPI("/register", args, "POST");

  const user_id = payload._id;
  const chatname = username;
  const chat = await helperAPI("/create-chat", { chatname, user_id }, "POST");

  payload.chat_id = chat._id;

  dispatch({ type: GET_OR_ADD_USER, payload });
};

export const loginUser = (login, password) => async (dispatch) => {
  const payload = await helperAPI("/login", { login, password }, "POST");
  dispatch({ type: GET_OR_ADD_USER, payload });
};

export default userReducer;
