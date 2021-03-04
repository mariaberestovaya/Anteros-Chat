import { userAPI } from "../helpers/api";

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

export const register = (name, login, pass, image, text) => async (
  dispatch
) => {
  const payload = await userAPI.addUserRegister(name, login, pass, image, text);
  dispatch({ type: GET_OR_ADD_USER, payload });
};

export const login = (login, password) => async (dispatch) => {
  const payload = await userAPI.getUserLogin(login, password);
  dispatch({ type: GET_OR_ADD_USER, payload });
};

export default userReducer;
