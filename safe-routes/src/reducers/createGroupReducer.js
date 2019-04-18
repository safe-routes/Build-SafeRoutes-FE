import {
  CREATE_GROUP_START,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL
} from '../actions';

const initialState = {
  message: '',
  isCreating: false
};

export const createGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP_START:
      return {
        ...state,
        isCreating: true
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        message: `Group ${action.payload.name} created.`,
        isCreating: false
      };
    case CREATE_GROUP_FAIL:
      return {
        ...state,
        message: `Could not create group`,
        isCreating: false
      };
    default:
      return state;
  }
};
