import axios from 'axios'

export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'

export const addUser = info => dispatch => {
  dispatch ({ type: ADD_USER_START, payload: info })

  return axios
    .post('https://saferoutes-4-12.herokuapp.com/api/auth/register', info)
    .then (res => {
      dispatch({ type: ADD_USER_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: ADD_USER_FAIL })
    })
}
