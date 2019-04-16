import { combineReducers } from 'redux';
import { addUserReducer } from './addUser';
import { loginReducer } from './loginReducer';
export default combineReducers({
  addUserReducer,
  loginReducer
});
