import axios from 'axios';

export const JOIN_GROUP_START = 'JOIN_GROUP_START';
export const JOIN_GROUP_SUCCESS = 'JOIN_GROUP_SUCCESS';
export const JOIN_GROUP_FAIL = 'JOIN_GROUP_FAIL';

const id = localStorage.getItem('id');
export const joinGroup = ({ passphrase, name: groupname }) => dispatch => {
  dispatch({ type: JOIN_GROUP_START });

  return axios
    .post(`https://saferoutes-4-12.herokuapp.com/api/group/${id}`, {
      groupname,
      passphrase
    })
    .then(res => dispatch({ type: JOIN_GROUP_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: JOIN_GROUP_FAIL }));
};
