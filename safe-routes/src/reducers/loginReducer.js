import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions'

const initialState = {
  isLoggingIn: false,
  message: ''
}

export const loginReducer = (state = initialState, action) =>  {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        message: ''
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        message: 'Please check your credentials and try again'
      }
  }
}
