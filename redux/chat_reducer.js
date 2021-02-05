// let INITIALOZED_SUCCESS = 'social-network/app/INITIALOZED_SUCCESS'

let initialState = {
  name: "Maria",
  message: "Hello! How are you?",
  date: "21-12-21",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    // case INITIALOZED_SUCCESS:
    //   return {
    //     ...state,
    //     initialized: true,
    //   };
    default:
      return state;
  }
};

// export const initializedSuccess = () => ({ type: INITIALOZED_SUCCESS });

// export const initializeApp = () => (dispatch) => {
//   let promise = dispatch(getAuthUserData());
//   promise.then(() => {
//     dispatch(initializedSuccess());
//   });
// };

export default chatReducer;
