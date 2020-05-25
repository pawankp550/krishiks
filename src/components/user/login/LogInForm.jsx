import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import ButtonLoader from '../../core/common/ButtonLoader'

import allActions from '../../../_actions'

function LogInForm({ dispatch, loggingIn }) {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async values => {
        dispatch(allActions.userActions.login(values))
    }

    const validationSchema = yup.object({
        email: yup.string().required('Required').email('Invalid email format'),
        password: yup.string().required('Required')
    })

    return (
        <Formik 
            initialValues = {initialValues}
            onSubmit = {onSubmit}
            validationSchema = {validationSchema}
        >
            <Form className="loginform" onBlur={ () => {dispatch(allActions.alertActions.clear())} }>
                <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <Field 
                        id="login-email"
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                    />
                    <div className="loginform-error"><ErrorMessage name='email' /></div>
                </div>    

                <div className="form-control">
                    <label htmlFor="password">PASSWORD</label>
                    <Field
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <div className="loginform-error"><ErrorMessage name='password' /></div>
                </div>
                <button type="submit" disabled={loggingIn ? true : false}>
                    { loggingIn ? <ButtonLoader/> : 'LOGIN'}
                </button>
            </Form>


        </Formik>
    )
}

export default LogInForm
