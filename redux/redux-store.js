import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import chatReducer from "./chat-reducer";
import userReducer from "./user-reducer";

const reducers = combineReducers({
  user: userReducer,
  form: formReducer,
  chat: chatReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

if (typeof window !== "undefined") {
  window.store = store;
}

export default store;
