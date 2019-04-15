import React, { useState, useEffect } from 'react'

import { Form, FormInput, FormBtn, color_pallete } from '../styles'
const LoginForm = props => {

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
        />
        <label htmlFor='username'>Username</label>
        <FormInput
          placeholder='johndoe00'
          name='username'
        />
        <label htmlFor='email'>Email</label>
        <FormInput
          placeholder='johndoe@gmail.com'
          name='email'
        />
        <label htmlFor='password'>Password</label>
        <FormInput
          placeholder='Password'
          name='password'
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
