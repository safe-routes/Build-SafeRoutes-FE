import {
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

const initialState = {
  isDeleting: false
};

export const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_START:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        isDeleting: false
      };
    default:
      return state;
  }
};
