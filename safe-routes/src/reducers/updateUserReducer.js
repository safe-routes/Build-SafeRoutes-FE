import {
  CHANGE_USER_START,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAIL
} from '../actions';

const initialState = {
  isUpdating: false,
  message: '',
  username: ''
};

export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_START:
      return {
        ...state,
        isUpdating: true
      };
    case CHANGE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        message: `Welcome ${action.payload.username}`,
        username: action.payload.username
      };
    case CHANGE_USER_FAIL:
      return {
        ...state,
        isUpdating: false,
        message: 'Username could not be updated.'
      };
    default:
      return state;
  }
};
