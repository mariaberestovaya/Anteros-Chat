import { applyMiddleware, createStore, combineReducers } from "redux";
import chatReducer from "./chat_reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  chat: chatReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

if (typeof window !== "undefined") {
  window.store = store;
}

export default store;
