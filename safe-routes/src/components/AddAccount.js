import React, { useState } from 'react'

import { FormInput } from '../styles'
const AddAccount = ({ handleEmail, handleName }) => {



  return (
    <>
      <FormInput
        placeholder='Enter Email'
        name='email'
        onChange={e => handleEmail(e)}
      />
      <FormInput
        placeholder='Enter Name'
        name='name'
        onChange={e => handleName(e)}
      />
    </>
  )
}
export default AddAccount
