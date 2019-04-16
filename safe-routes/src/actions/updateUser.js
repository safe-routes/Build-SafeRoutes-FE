import axios from "axios";

export const CHANGE_USER_START = "CHANGE_USER_START";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAIL = "CHANGE_USER_FAIL";

export const updateUser = id => dispatch => {
  dispatch({ type: CHANGE_USER_START });
  return axios
    .put(`https://saferoutes-4-12.herokuapp.com/api/user/${id}`)
    .then(res => {
      dispatch({ type: CHANGE_USER_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: CHANGE_USER_FAIL });
    });
};
