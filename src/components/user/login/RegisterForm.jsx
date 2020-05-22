import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import { registerUser } from '../services'

function RegisterForm() {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = async values => {
        const { firstname, lastname, email, password } = values
        const response = await registerUser({
            firstname, lastname, email, password
        })
        
        if (response.error) {
            console.log(response.error.response.statusText)
        }

        console.log(response)
    }

    const validationSchema = yup.object({
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
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
                    <label htmlFor="firstname">FIRST NAME</label>
                    <Field 
                        id="firstname"
                        name="firstname" 
                        type="text" 
                        placeholder="Enter your firstname*" 
                    />
                    <div className="loginform-error"><ErrorMessage name='firstname' /></div>
                </div>  

                 <div className="form-control">
                    <label htmlFor="lastname">LAST NAME</label>
                    <Field 
                        id="lastname"
                        name="lastname" 
                        type="text" 
                        placeholder="Enter your lastname*" 
                    />
                    <div className="loginform-error"><ErrorMessage name='lastname' /></div>
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
