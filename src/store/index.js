import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import TodoReducer from "./todo";

const reducer = combineReducers({
  todos: TodoReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;
