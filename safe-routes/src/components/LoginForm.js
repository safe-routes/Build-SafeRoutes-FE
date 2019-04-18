import React, { useState } from 'react';

import { Form, FormInput, FormBtn, color_pallete } from '../styles';

import AddAccountItems from './AddAccount';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { addUser, login } from '../actions';
const LoginForm = props => {
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const useSubmit = e => {
    e.preventDefault();
    localStorage.setItem('username', username);
    hasAccount
      ? props
          .login({
            username: username.toLowerCase(),
            password
          })
          .then(res => props.history.push('/account-landing'))
      : props
          .addUser(newUser)
          .then(res => props.history.push('/account-landing'));
  };

  const handleEmail = e => setEmail(e.target.value);
  const handleName = e => setName(e.target.value);

  const newUser = {
    email: email,
    name: name,
    username: username,
    password: password
  };

  return (
    <div className="login-form-container">
      <Form
        background={color_pallete.primary}
        min-height="200px"
        width="50%"
        height="400px"
        onSubmit={useSubmit}
      >
        <h1>{hasAccount ? 'Login' : 'Sign Up'}</h1>
        <FormInput
          placeholder="Enter Username"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />

        <FormInput
          placeholder="Enter Password"
          name="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        {hasAccount ? null : (
          <AddAccountItems handleEmail={handleEmail} handleName={handleName} />
        )}

        {props.isAdding || props.isLoggingIn ? (
          <Loader
            type="ThreeDots"
            color={color_pallete.accent_3}
            height="50"
            width="50"
          />
        ) : null}

        {props.loginMessage && hasAccount ? props.loginMessage : ''}
        <FormBtn width="60%" height="60px">
          {hasAccount ? 'Login' : 'Sign Up'}
        </FormBtn>
        <a href="#" onClick={() => setHasAccount(!hasAccount)}>
          {hasAccount
            ? 'No account? Create one here.'
            : 'Already have an account? Log in here'}
        </a>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ addUserReducer, loginReducer }) => {
  return {
    isAdding: addUserReducer.isAdding,
    isLoggingIn: loginReducer.isLoggingIn,
    message: addUserReducer.message,
    loginMessage: loginReducer.message,
    hasAccount: addUserReducer.hasAccount
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addUser, login }
  )(LoginForm)
);
