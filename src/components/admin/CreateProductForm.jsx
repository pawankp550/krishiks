import React from 'react'
import ButtonLoader from '../core/common/ButtonLoader'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { authHeader } from '../../_helpers/auth'
import { createProduct } from './services'
import { useDispatch } from 'react-redux'
import allActions from '../../_actions'

function ImageComponent(props) {
    const handleChange = (e) => {
        props.form.setFieldValue('imageData', e.target.files[0])
    }

    return (
        <input type="file" onChange={handleChange}/>
    )
}


function CreateProductForm({ categories, sellers, loadingState }) {
    console.log(loadingState)
    const user = authHeader()
    const dispatch = useDispatch()
    const initialValues = {
        name: '',
        description: '',
        price: '',
        sale_price: '',
        category: '',
        subcategory: [],
        quantity: '',
        seller: '',
        shipping: true,
        imageData: ''
    }

    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        price: yup.string().required('Required'),
        category: yup.string().required('Required'),
        description: yup.string().required('Required'),
        quantity: yup.string().required('Required'),
        imageData: yup.string().required('Required')

    })

    const onSubmit = async (values, { resetForm }) => {
        dispatch(allActions.loadingActions.loadingInProgress())
        var formData = new FormData()
        for(let key in values) {
            if ( values[key]) {
                if (key === 'subcategory') {
                    values[key].map((item, i) => {
                        formData.append(`${key}[${i}]`, item)
                    })
                } else {
                    formData.append(key, values[key])
                }
            }
        }


        const response = await createProduct(formData, user.token)
        console.log(response)
        if (response.error) {
            dispatch(allActions.loadingActions.loadingDone())
            if (/conflict/i.test(response.error.response.statusText)) {
                dispatch(allActions.alertActions.failure('Product already exists'))
            } else {
                dispatch(allActions.alertActions.failure(response.error.response.data.error))
            }
        } else {
            dispatch(allActions.loadingActions.loadingDone())
            dispatch(allActions.alertActions.success('Product created successfully'))
            resetForm()
        }
    }

    return (
            <Formik 
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {validationSchema}
            >
                <Form className="create-product-form" onBlur={ () => {dispatch(allActions.alertActions.clear())} }>
                    <div className="form-title"> CREATE PRODUCT </div>
                    <div className="form-control">
                        <label htmlFor="name">NAME</label>
                        <Field 
                            id="name"
                            name="name" 
                            type="text" 
                            placeholder="Enter product  name*" 
                        />
                        <div className="productform-error"><ErrorMessage name='name' /></div>
                    </div>  

                    <div className="form-control">
                        <label htmlFor="description">DESCRIPTION</label>
                        <Field 
                            id="description"
                            name="description" 
                            type="text" 
                            as="textarea"
                            placeholder="Enter product description*" 
                        />
                        <div className="productform-error"><ErrorMessage name='description' /></div>
                    </div>    

                    <div className="form-control">
                        <label htmlFor="price">PRICE</label>
                        <Field 
                            id="price"
                            name="price" 
                            type="number" 
                            placeholder="Enter product price*" 
                        />
                        <div className="productform-error"><ErrorMessage name='price' /></div>
                    </div>    

                    <div className="form-control">
                        <label htmlFor="sale_price">SALE PRICE</label>
                        <Field 
                            id="sale_price"
                            name="sale_price" 
                            type="number" 
                            placeholder="Enter product sale price" 
                        />
                        <div className="productform-error"><ErrorMessage name='sale_price' /></div>
                    </div>    

                    <div className="form-control">
                        <label htmlFor="subcategory">SUB-CATEGORY</label>
                        <div className="form-control-checkboxes">
                            {sellers.map((item, i) => {
                                    return (  
                                        <label key={i}>
                                            <Field type="checkbox" name="subcategory" value={item._id} />
                                            {item.name}
                                        </label>    
                                    )
                                })}
                        </div>
                        <div className="productform-error"><ErrorMessage name='subcategory' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="category">CATEGORY</label>
                        <Field
                            id="category"
                            name="category"
                            as="select"
                        >
                            <option >Select Category</option>
                            {categories.map((item, i) => {
                                return (
                                <option key={i} value={item._id}>{item.name}</option>
                                )
                            })}
                        </Field>
                        <div className="productform-error"><ErrorMessage name='category' /></div>
                    </div>


                    <div className="form-control">
                        <label htmlFor="quantity">QUANTITY</label>
                        <Field 
                            id="quantity"
                            name="quantity" 
                            type="number" 
                            placeholder="Enter product quantity*" 
                        />
                        <div className="productform-error"><ErrorMessage name='quantity' /></div>
                    </div>   

                    <div className="form-control">
                        <label htmlFor="seller">SELLER</label>
                        <Field
                            id="seller"
                            name="seller"
                            as="select"
                        >
                            <option >Select Seller</option>
                            {sellers.map((item, i) => {
                                return (
                                <option key={i} value={item._id}>{item.name}</option>
                                )
                            })}
                        </Field>
                        <div className="productform-error"><ErrorMessage name='seller' /></div>
                    </div>
                                
                    <div className="form-control">
                        <label htmlFor="shipping">SHIPPING</label>
                        <Field
                            id="shipping"
                            name="shipping"
                            as="select"
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </Field>
                        <div className="productform-error"><ErrorMessage name='shipping' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="imageData">PHOTO</label>
                            <Field
                                name="imageData"
                            >
                                {
                                    (props) => {
                                        const { field, form, meta } = props
                                        return (
                                            <ImageComponent field={field} form={form} meta={meta}/>
                                        ) 
                                    }
                                }
                            </Field>
                        <div className="productform-error"><ErrorMessage name='imageData' /></div>
                    </div>   
                    <button type="submit" disabled={loadingState.loading ? true : false}>
                            {
                                loadingState.loading ? <ButtonLoader/> : 'CREATE'
                            }
                    </button>
                </Form>
            </Formik>
    )
}

export default CreateProductForm
