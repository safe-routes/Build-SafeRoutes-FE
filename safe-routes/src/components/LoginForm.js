import React, { useState, useEffect } from 'react'

import { Form, FormInput, FormBtn, color_pallete } from '../styles'

import AddAccountItems from './AddAccount'
const LoginForm = props => {

  const [hasAccount, setHasAccount] = useState(true)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const useLogin = e => {
    e.preventDefault();
  }

  const handleEmail = e =>  setEmail(e.target.value)
  const handleName = e =>  setName(e.target.value)


  return (
    <div className='login-form-container'>
      <Form
        background={color_pallete.primary}
        min-height='200px'
        width='50%'
        height='400px'
        onSubmit={useLogin}
      >
        <h1>{hasAccount ? 'Login' : 'Sign Up'}</h1>

        {hasAccount ?  null : <AddAccountItems handleEmail={handleEmail} handleName={handleName}/>}
        <FormInput
          placeholder='Enter Username'
          name='username'
          onChange={e => setUsername(e.target.value)}
        />


        <FormInput
          placeholder='Enter Password'
          name='password'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <FormBtn
          width='60%'
          height='60px'
        >
        {hasAccount ? 'Login' : 'Sign Up'}</FormBtn>
        <a onClick={() => setHasAccount(!hasAccount)}>
          {hasAccount ? 'No account? Create one here.' : 'Already have an account? Log in here'}
        </a>
      </Form>
    </div>
  )
}

export default LoginForm
