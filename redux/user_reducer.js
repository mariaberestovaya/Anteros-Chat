const GET_USER = "anteros-chat/app/GET_USER";

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
