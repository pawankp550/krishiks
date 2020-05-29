import React from 'react'
import Menu from './Menu'
import ErrorBox from '../core/common/ErrorBox'
import SuccessBox from '../core/common/SuccessBox'

import './css/dashboard.scss'

import { useSelector } from 'react-redux'

export default function Layout({children}) {
    const errorState = useSelector(state => state.alert)
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <Menu/>
            </div>
            <div className="dashboard-right">
            {errorState.type && errorState.type === 'alert-success'? <SuccessBox error={errorState.message} /> : null}
            {errorState.type && errorState.type === 'alert-error'? <ErrorBox error={errorState.message} /> : null}
                {children}
            </div>
        </div>
    )
}
