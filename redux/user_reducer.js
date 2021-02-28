const GET_USER = "anteros-chat/app/GET_USER";
const ADD_USER = "anteros-chat/app/ADD_USER";

let initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const data = action.data;

      return {
        ...state,
        id: data._id,
        login: data.login,
        username: data.username,
        password: data.password,
        image: data.image,
        description: data.description,
        chat_id: data.chat_id,
        isAuth: true,
      };
    case ADD_USER:
      return {
        ...state,
        id: action.data._id,
        login: action.data.login,
        username: action.data.username,
        password: action.data.password,
        image: action.data.image,
        description: action.data.description,
      };

    default:
      return state;
  }
};

const getUserLoginAC = (data) => {
  return {
    type: GET_USER,
    data,
  };
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

  dispatch(addUserRegisterAC(result));
};

export const getUserLogin = (log, pass) => async (dispatch) => {
  const res = await fetch("/api/login", {
    body: JSON.stringify({
      login: log,
      password: pass,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();

  dispatch(getUserLoginAC(result));
};

export default userReducer;
