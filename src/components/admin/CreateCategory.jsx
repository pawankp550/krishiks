import React, {useState} from 'react'
import ButtonLoader from '../core/common/ButtonLoader'

import allActions from '../../_actions'
import { createCategory } from './services'
import { authHeader } from '../../_helpers/auth'
import { useDispatch } from 'react-redux'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function CreateCategory() {
    const user = authHeader()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const initialValues = {
        name: ''
    }

    const onSubmit = async values => {
        setLoading(true)
        const response = await createCategory(values.name, user.token)
        console.log(response)
        if (response.error) {
            setLoading(false)
            if (/conflict/i.test(response.error.response.statusText)) {
                dispatch(allActions.alertActions.failure('Category already exists'))
            } else {
                dispatch(allActions.alertActions.failure(response.error.response.error.data.error))
            }
        } else {
            setLoading(false)
        }
    }

    const validationSchema = yup.object({
        name: yup.string().required('Required')
    })


    return (
        <>
            <div> <h3> Create Category </h3> </div>
            <Formik 
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {validationSchema}
            >
                <Form className="categoryform" onBlur={ () => {dispatch(allActions.alertActions.clear())} }>
                    <div className="form-control">
                        <label htmlFor="name">NAME</label>
                        <Field 
                            id="name"
                            name="name" 
                            type="name" 
                            placeholder="Enter category" 
                        />
                        <div className="categoryform-error"><ErrorMessage name='name' /></div>
                    </div>

                    <button type="submit" disabled={loading ? true : false}>
                        { loading ? <ButtonLoader /> :  'CREATE'}
                    </button>
                </Form>
            </Formik>
        </>    
    )
}
