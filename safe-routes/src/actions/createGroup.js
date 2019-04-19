import axios from 'axios';

export const CREATE_GROUP_START = 'CREATE_GROUP_START';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAIL = 'CREATE_GROUP_FAIL';

export const createGroup = groupInfo => dispatch => {
  dispatch({ type: CREATE_GROUP_START });

  return axios
    .post('https://saferoutes-4-12.herokuapp.com/api/group', groupInfo)
    .then(res => dispatch({ type: CREATE_GROUP_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CREATE_GROUP_FAIL }));
};
