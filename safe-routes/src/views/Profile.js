import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Authenticate from '../auth/Authenticate';
import Account from '../components/Account';
import { deleteUser, updateUser } from '../actions';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
const Profile = props => {
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const id = localStorage.getItem('id');
  const username = localStorage.getItem('username');

  const useDelete = () => {
    axios
      .post('auth/login', { username, password })
      .then(res => props.deleteUser(id).then(res => props.history.push('/')))
      .catch(err => message.error('Please check your password and try again'));
  };

  const useUpdate = () => {
    const newUser = {
      username,
      newUsername,
      password
    };
    if (newUsername && password) {
      props
        .updateUser(id, newUser)
        .then(
          () => (
            localStorage.setItem('username', newUsername),
            localStorage.setItem('greeting', `Welcome, ${newUsername}`)
          )
        )
        .then(() => message.success('Username updated.'));
      setNewUsername('');
      setPassword('');
    } else {
      message.error('Please fill in both fields');
    }
  };

  const cancel = () => {
    message.error('Canceled');
  };

  return (
    <Account
      newUsername={newUsername}
      setNewUsername={setNewUsername}
      password={password}
      setPassword={setPassword}
      useUpdate={useUpdate}
      useDelete={useDelete}
    />
  );
};

export default Authenticate(
  withRouter(
    connect(
      null,
      { deleteUser, updateUser }
    )(Profile)
  )
);
