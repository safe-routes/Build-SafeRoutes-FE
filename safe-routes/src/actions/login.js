import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post('https://saferoutes-4-12.herokuapp.com/api/auth/login', creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('greeting', res.data.message);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};
