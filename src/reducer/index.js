import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import usersReducer from "./users";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  users: usersReducer,
});

export default allReducer;
