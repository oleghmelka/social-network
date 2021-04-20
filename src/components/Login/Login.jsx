import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './../common/FormikComponents/FormikControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import s from './../Login/Login.module.css';

const Login = ({isAuth, login}) => {

  if(isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
        <div>
            <h2>_L-O-G-I-N_</h2>
            <LoginForm login={login} />
        </div>
  )
}


const LoginForm = ({login}) => {
   
   


    const checkboxOptions = [
        { key: 'Remember me', value: 'Remember me' }
      ]
    
    const initialValues = {
        login: '',
        password: '',
        checkboxOption: []
    }
  
    const validationSchema = Yup.object({
        login: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required')
    })
  
    const onSubmit = values => {
        //console.log('Form data', values);
        //console.log('Saved data', JSON.parse(JSON.stringify(values)));
        login(values.login, values.password, values.rememberMe);

        console.log(values);
    }
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='text'
                label=''
                name='login'
                placeholder='your login'
              />
              <FormikControl
                control='input'
                type='password'
                label=''
                name='password'
                placeholder='your email'
              />
            <FormikControl
                control='checkbox'
                label=''
                name='checkboxOption'
                options={checkboxOptions}
              />
              <div className={s.formSummaryError}>
                  ERRORS
              </div>
              <button type='submit' disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }}
      </Formik>
    )
  }
  
  //{ Object.values(props.errors).map(error => (<div>{error}</div>)) }


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
 
export default connect (mapStateToProps, {login}) (Login);

