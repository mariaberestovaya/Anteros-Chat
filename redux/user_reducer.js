const GET_USER = "anteros-chat/app/GET_USER";
const INIT = "anteros-chat/app/INIT";

let initialState = {
  id: null,
  username: null,
  password: null,
  chat_id: null,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const data = action.data;

      return {
        ...state,
        id: data._id,
        username: data.username,
        password: data.password,
        photo: data.photo,
        chat_id: data.chat_id,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const getUserLoginAC = (data) => {
  return {
    type: GET_USER,
    data,
  };
};

export const getUserLogin = (user, pass) => async (dispatch) => {
  const res = await fetch("/api/login", {
    body: JSON.stringify({
      username: user,
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
