import React, { useState, useEffect } from 'react'

import { Form, FormInput, FormBtn, color_pallete } from '../styles'
const LoginForm = props => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login-form-container'>
      <Form
        background={color_pallete.primary}
        min-height='200px'
        width='50%'
        height='400px'
      >
        <h1>Login</h1>

        <label htmlFor='name'>Name</label>
        <FormInput
          placeholder='John Doe'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor='username'>Username</label>
        <FormInput
          placeholder='johndoe00'
          name='username'
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <FormInput
          placeholder='johndoe@gmail.com'
          name='email'
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <FormInput
          placeholder='Password'
          name='password'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <FormBtn
          width='60%'
          height='60px'
        >
        Login</FormBtn>
      </Form>
    </div>
  )
}

export default LoginForm
