import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './../common/FormikComponents/FormikControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
//import s from './../Login/Login.module.css';
import style from './../common/FormikComponents/FormikComponents.module.css';
import { propNames } from '@chakra-ui/styled-system';

const Login = ({isAuth, login, autentificationError, captchaUrl}) => {

  if(isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
        <div>
            <h2>_L-O-G-I-N_</h2>
            <LoginForm login={login} autentificationError={autentificationError} captchaUrl={captchaUrl} />
        </div>
  )
}


const LoginForm = ({login, autentificationError, captchaUrl}) => {
   
    const initialValues = {
        login: '',
        password: '',
        rememberMe: false
        //captcha: captchaUrl
    }
  
    const validationSchema = Yup.object({
        login: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        rememberMe: Yup.bool()
        //captcha: Yup.string().required('Required')
    })
  
    const onSubmit = (values) => {
        login(values.login, values.password, values.rememberMe, values.captcha);
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
                control='checkbox_boolean' 
                label='Remember me' 
                name='rememberMe' 
              />

              { captchaUrl && <img src={captchaUrl} />}
              
              { captchaUrl && <FormikControl control='input' type='text' label='' name='captcha' placeholder='Symbols from image' /> }

              {autentificationError && <div className={style.formSummaryError}>{autentificationError}</div>}

              <button type='submit' disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }}
      </Formik>
    )
  }
  



const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
  autentificationError: state.auth.autentificationError
})
 
export default connect (mapStateToProps, {login}) (Login);

