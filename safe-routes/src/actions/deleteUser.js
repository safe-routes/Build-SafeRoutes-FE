import axios from "axios";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  return axios
    .delete(`https://saferoutes-4-12.herokuapp.com/api/auth/unregister/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS });
      localStorage.removeItem("token");
      localStorage.removeItem("greeting");
      localStorage.removeItem("id");
      localStorage.removeItem("username");
    })
    .catch(err => {
      console.log("FAIL");
      dispatch({ type: DELETE_USER_FAIL });
    });
};
