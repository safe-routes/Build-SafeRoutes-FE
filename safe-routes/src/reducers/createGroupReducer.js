import {
  CREATE_GROUP_START,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL
} from '../actions';

const initialState = {
  message: '',
  groups: []
};

export const createGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP_START:
      return {
        ...state
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        message: `Group ${action.payload.name} created.`,
        groups: [...state.groups, action.payload.name]
      };
    case CREATE_GROUP_FAIL:
      return {
        ...state,
        message: `Could not create group`
      };
    default:
      return state;
  }
};
