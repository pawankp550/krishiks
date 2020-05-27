import React from 'react'
import Layout from './Layout'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function CreateProduct() {
    const initialValues = {
        name: '',
        description: '',
        price: '',
        sale_price: '',
        category: '',
        subcategory: [],
        quantity: '',
        seller: '',
        shipping: false,
        photo: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = yup.object({
       
    })

    return (
        <Layout>
            <Formik 
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {validationSchema}
            >
                <Form className="productform">
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
                            placeholder="Enter product price" 
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
                        <label htmlFor="category">CATEGORY</label>
                        <Field
                            id="category"
                            name="category"
                            as="select"
                        >
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                        <div className="productform-error"><ErrorMessage name='category' /></div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="quantity">QUANTITY</label>
                        <Field 
                            id="quantity"
                            name="quantity" 
                            type="number" 
                            placeholder="Enter product quantity" 
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
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
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
                        <label htmlFor="photo">PHOTO</label>
                        <Field 
                            id="photo"
                            name="photo" 
                            type="file" 
                        />
                        <div className="productform-error"><ErrorMessage name='photo' /></div>
                    </div>   
                    <button type="submit" >
                        REGISTER
                    </button>
                </Form>
            </Formik>
        </Layout>
    )
}

export default CreateProduct
