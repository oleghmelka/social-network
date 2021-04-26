import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CheckboxBoolean (props) {
    
    const { label, name } = props;
    
    return (
        <div className='form-control'>
            <Field type="checkbox" name={name} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default CheckboxBoolean