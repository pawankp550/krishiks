import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function LogInForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values)
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
            <Form className="loginform">
                <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <Field 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                    />
                    <div className="loginform-error"><ErrorMessage name='email' /></div>
                </div>    

                <div className="form-control">
                    <label htmlFor="password">PASSWORD</label>
                    <Field
                        id="email"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <div className="loginform-error"><ErrorMessage name='password' /></div>
                </div>
                <button type="submit" >
                    LOGIN
                </button>
            </Form>


        </Formik>
    )
}

export default LogInForm
