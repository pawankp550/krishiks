import React, {useState} from 'react'
import Layout from '../../core/Layout'
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'

import './loginPage.scss'

function LogInPage() {
    const [_toggleForm, setToggleForm] = useState('login')

    const toggleForm = (type) => {
        setToggleForm(type)
    }

    return (
        <Layout>
            <div className='loginpage-toggle-form'> <span onClick={() => {toggleForm('login')}} className={_toggleForm === 'login' ? 'active' : null }>Login</span>/<span onClick={() => {toggleForm('register')}} className={_toggleForm === 'register' ? 'active' : null }>Register</span> </div>
            <div className="loginpage-form">
                {_toggleForm === 'login' ? <LogInForm/> : <RegisterForm/>}                
            </div>
        </Layout>
    )
}

export default LogInPage
