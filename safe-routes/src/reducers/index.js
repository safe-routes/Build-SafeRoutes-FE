import { combineReducers } from "redux";
import { addUserReducer } from "./addUser";
import { loginReducer } from "./loginReducer";
import { deleteUserReducer } from "./deleteUserReducer";

export default combineReducers({
  addUserReducer,
  loginReducer,
  deleteUserReducer
});
