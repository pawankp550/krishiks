import React, { useState } from 'react'
import ButtonLoader from '../core/common/ButtonLoader'

import allActions from '../../_actions'
import { createSeller } from './services'
import { authHeader } from '../../_helpers/auth'
import { useDispatch } from 'react-redux'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function CreateSeller() {
    const user = authHeader()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const initialValues = {
        name: '',
        description: '',
        address: '',
        phone: ''
    }

    const onSubmit = async (values, { resetForm }) => {
        setLoading(true)
        const response = await createSeller(values, user.token)
        if (response.error) {
            setLoading(false)
            if (/conflict/i.test(response.error.response.statusText)) {
                dispatch(allActions.alertActions.failure('Seller already exists'))
            } else {
                dispatch(allActions.alertActions.failure(response.error.response.data.error))
            }
        } else {
            setLoading(false)
            dispatch(allActions.alertActions.success('Seller created successfully'))
            resetForm()
        }
    }
 
    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        address: yup.string().required('Required'),
        description: yup.string().required('Required'),
        phone: yup.string().required('Required')
    })

    return (
        <>
            <Formik 
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {validationSchema}
            >
                <Form className="create-category-form" onBlur={ () => {dispatch(allActions.alertActions.clear())} }>
                    <div className="form-title"> CREATE SELLER </div>
                    <div className="form-control">
                        <label htmlFor="name">NAME</label>
                        <Field 
                            id="name"
                            name="name" 
                            type="text" 
                            placeholder="Enter seller name" 
                        />
                        <div className="categoryform-error"><ErrorMessage name='name' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="description">DESCRIPTION</label>
                        <Field 
                            id="description"
                            name="description" 
                            type="text" 
                            placeholder="Enter description" 
                        />
                        <div className="categoryform-error"><ErrorMessage name='description' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="address">ADDRESS</label>
                        <Field 
                            id="address"
                            name="address" 
                            type="text" 
                            placeholder="Enter address" 
                        />
                        <div className="categoryform-error"><ErrorMessage name='address' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="phone">PHONE</label>
                        <Field 
                            id="phone"
                            name="phone" 
                            type="number" 
                            placeholder="Enter phone" 
                        />
                        <div className="categoryform-error"><ErrorMessage name='phone' /></div>
                    </div>

                    <button type="submit" disabled={loading ? true : false}>
                        { loading ? <ButtonLoader /> :  'CREATE'}
                    </button>
                </Form>
            </Formik>
        </>    
    )
}
