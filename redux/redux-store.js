import { applyMiddleware, createStore, combineReducers } from "redux";
import userReducer from "./user_reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import chatReducer from "./chat_reducer";

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
