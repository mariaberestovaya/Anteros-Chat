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
  dispatch({ type: GET_OR_ADD_USER, payload });
};

export const login = (login, password) => async (dispatch) => {
  const args = { login, password };
  const payload = await helperAPI("/login", args, "POST");
  dispatch({ type: GET_OR_ADD_USER, payload });
};

export default userReducer;
