import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

axios.defaults.baseURL = 'https://saferoutes-4-12.herokuapp.com/api'

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem('token')
  requestConfig.headers.authorization = token;
  return requestConfig;
})

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const noToken = <Redirect to='/' />

      return <>{token ? <Component /> : noToken}</>;
    }
  }
}
