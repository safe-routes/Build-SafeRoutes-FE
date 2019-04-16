import { combineReducers } from "redux";
import { addUserReducer } from "./addUser";
import { loginReducer } from "./loginReducer";
import { deleteUserReducer } from "./deleteUserReducer";
import { updateUserReducer } from "./updateUserReducer";
export default combineReducers({
  addUserReducer,
  loginReducer,
  deleteUserReducer,
  updateUserReducer
});
