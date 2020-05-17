import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function RegisterForm() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = yup.object({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().required('Required').email('Invalid email format'),
        password: yup.string().required('Required').min(8, 'Password is too short'),
        confirmPassword: yup.string().required('Required').oneOf([yup.ref('password'), null], 'Passwords must match')
    })

    return (
        <Formik 
            initialValues = {initialValues}
            onSubmit = {onSubmit}
            validationSchema = {validationSchema}
        >
            <Form className="loginform">
                <div className="form-control">
                    <label htmlFor="firstName">FIRST NAME</label>
                    <Field 
                        id="firstName"
                        name="firstName" 
                        type="text" 
                        placeholder="Enter your firstname*" 
                    />
                    <div className="loginform-error"><ErrorMessage name='firstName' /></div>
                </div>  

                 <div className="form-control">
                    <label htmlFor="lastName">LAST NAME</label>
                    <Field 
                        id="lastName"
                        name="lastName" 
                        type="text" 
                        placeholder="Enter your lastname*" 
                    />
                    <div className="loginform-error"><ErrorMessage name='lastName' /></div>
                </div>    

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
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password*(min 8 chars)"
                    />
                    <div className="loginform-error"><ErrorMessage name='password' /></div>
                </div>

                <div className="form-control">
                    <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                    <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Enter password again*"
                    />
                    <div className="loginform-error"><ErrorMessage name='confirmPassword' /></div>
                </div>

                <button type="submit" >
                    REGISTER
                </button>
            </Form>


        </Formik>
    )
}

export default RegisterForm
