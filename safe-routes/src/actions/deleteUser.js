import axios from "axios";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });

  return axios
    .delete(`https://saferoutes-4-12.herokuapp.com/api/user/${id}`)
    .then(res => {
      console.log(res);
    })
    .then(err => {
      console.log(err);
    });
};
