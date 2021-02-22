import { applyMiddleware, createStore, combineReducers } from "redux";
import userReducer from "./user_reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  user: userReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

if (typeof window !== "undefined") {
  window.store = store;
}

export default store;
