import {
  JOIN_GROUP_START,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_FAIL
} from '../actions';

const initialState = {
  message: '',
  isJoining: false
};

export const joinGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_GROUP_START:
      return {
        ...state,
        isJoining: true
      };
    case JOIN_GROUP_SUCCESS:
      return {
        ...state,
        isJoining: false
      };
    case JOIN_GROUP_FAIL:
      return {
        ...state,
        isJoining: false
      };
    default:
      return state;
  }
};
