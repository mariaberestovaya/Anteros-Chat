import { userAPI } from "../api";

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
  const res = await fetch("/api/register", {
    body: JSON.stringify({
      username: name,
      login: login,
      password: pass,
      description: text,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  ву;
  dispatch(addUserRegisterAC(result));
};

export const getUserLogin = (log, pass) => async (dispatch) => {
  const payload = await userAPI.getUserLogin(log, pass);
  debugger;
  dispatch({ type: GET_USER, payload });
};

export default userReducer;
