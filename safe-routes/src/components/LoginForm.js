import React, { useState, useEffect } from 'react'

import { Form, FormInput, FormBtn, color_pallete } from '../styles'
const LoginForm = props => {

  return (
    <div className='login-form-container'>
      <Form background={color_pallete.primary}>
        <h1>Hello from loginForm</h1>
      </Form>
    </div>
  )
}

export default LoginForm
