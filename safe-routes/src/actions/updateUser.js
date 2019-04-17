import axios from "axios";

export const CHANGE_USER_START = "CHANGE_USER_START";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAIL = "CHANGE_USER_FAIL";

export const updateUser = (id, info) => dispatch => {
  dispatch({ type: CHANGE_USER_START });
  return axios
    .put(`https://saferoutes-4-12.herokuapp.com/api/user/${id}`, info)
    .then(res => {
      console.log(res);
      dispatch({ type: CHANGE_USER_SUCCESS, payload: res.data });
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("greeting", `Welcome, ${res.data.username}`);
    })
    .catch(err => {
      dispatch({ type: CHANGE_USER_FAIL });
    });
};
