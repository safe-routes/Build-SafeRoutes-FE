import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

const initialState = {
  isLoggingIn: false,
  token: null,
  id: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        message: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        id: action.payload.id,
        message: ''
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
