import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAIL } from '../actions';

const initialState = {
  isAdding: false,
  message: '',
  hasAccount: false
};

export const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isAdding: true,
        message: ''
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: '',
        hasAccount: true
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        isAdding: false,
        message: 'Please fill all fields and try again.'
      };
    default:
      return state;
  }
};
