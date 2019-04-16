import {
  CHANGE_USER_START,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAIL
} from "../actions";

const initialState = {
  isUpdating: false
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
        isUpdating: false
      };
    case CHANGE_USER_FAIL:
      return {
        ...state,
        isUpdating: false
      };
    default:
      return state;
  }
};
