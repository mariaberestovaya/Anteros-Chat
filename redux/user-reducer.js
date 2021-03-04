import { userAPI } from "../helpers/api";

const GET_USER = "GET_USER";
const ADD_USER = "ADD_USER";

let initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case ADD_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

const addUserRegisterAC = (data) => {
  return {
    type: ADD_USER,
    data,
  };
};

export const addUserRegister = (name, login, pass, image, text) => async (
  dispatch
) => {
  const payload = await userAPI.addUserRegister(name, login, pass, image, text);
  dispatch({ type: ADD_USER, payload });
};

export const getUserLogin = (log, pass) => async (dispatch) => {
  const payload = await userAPI.getUserLogin(log, pass);
  dispatch({ type: GET_USER, payload });
};

export default userReducer;
