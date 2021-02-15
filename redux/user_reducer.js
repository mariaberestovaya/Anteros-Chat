const GET_USER = "connect-mirfak/app/GET_USER";

let initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const user = {
        username: action.username,
        password: action.password,
      };
      return {
        ...state,
        user,
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

export const getUserLogin = (value) => async (dispatch) => {
  const res = await fetch(`http://localhost:3000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  const data = await res.json();
  // console.log(data[0].username);
  dispatch(getUserLoginAC(data[0].username, data[0].password));
};

export default userReducer;
