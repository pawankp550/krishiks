import React, {useState} from 'react'
import Layout from '../../core/Layout'
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import ErrorBox from '../../core/common/ErrorBox'
import { useSelector, useDispatch } from 'react-redux'

import './loginPage.scss'

function LogInPage() {
    const [_toggleForm, setToggleForm] = useState('login')
    const [loading, setLoading] = useState(false)

    const errorState = useSelector(state => state.alert)
    const loggingIn = useSelector(state => state.authentication.loggingIn)
    const dispatch = useDispatch()

    const toggleForm = (type) => {
        setToggleForm(type)
    }

    return (
        <Layout>
            {errorState.type && errorState.type === 'alert-error'? <ErrorBox error={errorState.message} /> : null}
            <div className='loginpage-toggle-form'> <span onClick={() => {toggleForm('login')}} className={_toggleForm === 'login' ? 'active' : null }>Login</span>/<span onClick={() => {toggleForm('register')}} className={_toggleForm === 'register' ? 'active' : null }>Register</span> </div>
            <div className="loginpage-form">
                {_toggleForm === 'login' ? <LogInForm dispatch={dispatch} loggingIn = {loggingIn}/> : <RegisterForm dispatch={dispatch} loading={{ loading, setLoading }}/>}                
            </div>
        </Layout>
    )
}

export default LogInPage
