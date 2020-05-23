import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import { registerUser } from '../services'
import ButtonLoader from '../../core/common/ButtonLoader'

function RegisterForm({ setError, loading: {loading, setLoading} }) {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = async values => {
        setLoading(true)
        const { firstname, lastname, email, password } = values
        const response = await registerUser({
            firstname, lastname, email, password
        })
        
        if (response.error) {
            setLoading(false)
            if (/conflict/i.test(response.error.response.statusText)) {
                setError('Email already exists')
            } else {
                setError(response.error.response.error.data.error)
            }
        } else {
            setLoading(false)
            window.location.reload()
        }
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
            <Form className="loginform" onBlur={ () => {setError('')} }>
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

                <button type="submit" disabled={loading ? true : false}>
                    { loading ? <ButtonLoader /> :  'REGISTER'}
                </button>
            </Form>


        </Formik>
    )
}

export default RegisterForm
