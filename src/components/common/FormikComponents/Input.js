import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

//import Input from '@material-ui/core/Input';


function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage className="errorMessage" component={TextError} name={name} /> 

      {/* <Input id={name} name={name} {...rest} type={type} placeholder={placeholder} color="secondary" required={true}></Input> */}
    </div>
  )
}

export default Input