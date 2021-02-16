const GET_USER = "connect-mirfak/app/GET_USER";

let initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const user = {
        username: action.username,
        password: action.password,
      };
      return {
        ...state,
        user: [...state.user, user],
      };

    default:
      return state;
  }
};

export const getUserLoginAC = (username, password) => {
  return {
    type: GET_USER,
    username,
    password,
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
  dispatch(getUserLoginAC(result[0].username, result[0].password));
};

export default userReducer;
