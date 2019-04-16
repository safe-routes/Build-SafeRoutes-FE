import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

const initialState = {
  isLoggingIn: false,
  message: '',
  token: null,
  id: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        message: action.payload.message,
        id: action.payload.id
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        message: 'Please check your credentials and try again'
      };
    default:
      return state;
  }
};
