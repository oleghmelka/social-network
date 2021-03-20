import React from 'react';
import { Formik, Form, Field } from 'formik';



const LoginForm = () => {

    let submit = (formData) => {
        console.log(formData);
    }

    return  <div>
                <Formik initialValues={{ login: '', password: '', remember_me: false }} onSubmit={submit} >
                    {() => (
                        <Form>
                            <div>
                                <Field component="input" name="login" placeholder="Login" />
                            </div>
                            <div>
                                <Field component="input"  name="password" placeholder="Password" />
                            </div>
                            <div>
                                <Field component="input" name="remember_me" type="checkbox" /> remember me
                            </div>
                            <div>
                            <button type="submit">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

}

const Login = (props) => {
    return (
        <div>
            <h2>_L-O-G-I-N_</h2>
            <LoginForm  />
        </div>
    )
}















export default Login;