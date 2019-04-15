import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL
} from '../actions'

const initialState = {
  isAdding: false,
  message: ''
}

export const addUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isAdding: true
      }
    default: return state
  }
}
