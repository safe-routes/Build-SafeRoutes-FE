import { combineReducers } from 'redux';
import { addUserReducer } from './addUser';
import { loginReducer } from './loginReducer';
import { deleteUserReducer } from './deleteUserReducer';
import { updateUserReducer } from './updateUserReducer';
import { createGroupReducer } from './createGroupReducer';

export default combineReducers({
  addUserReducer,
  loginReducer,
  deleteUserReducer,
  updateUserReducer,
  createGroupReducer
});
