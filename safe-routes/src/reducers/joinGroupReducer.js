import {
  JOIN_GROUP_START,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_FAIL
} from '../actions';

const initialState = {
  message: ''
};

export const joinGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_GROUP_START:
      return {
        ...state
      };
    case JOIN_GROUP_SUCCESS:
      return {
        ...state
      };
    case JOIN_GROUP_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
};
