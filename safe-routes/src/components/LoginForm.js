import React, { useState, useEffect } from 'react'

import { Form, FormInput, FormBtn, color_pallete } from '../styles'
const LoginForm = props => {

  return (
    <div className='login-form-container'>
      <Form
        background={color_pallete.primary}
        width='50%'
        min-height='200px'
      >
        <h1>Hello from loginForm</h1>
        <FormInput
          placeholder='John Doe'
          name='name'
        />
        <FormInput
          placeholder='johndoe00'
          name='username'
        />
        <FormInput
          placeholder='johndoe@gmail.com'
          name='email'
        />
        <FormInput
          placeholder='Password'
          name='password'
        />
        <FormBtn width='70%'>Login</FormBtn>
      </Form>
    </div>
  )
}

export default LoginForm
