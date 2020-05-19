import React from 'react'
import Menu from './Menu'

import './css/dashboard.scss'

export default function Layout({children}) {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <Menu/>
            </div>
            <div className="dashboard-right">
                {children}
            </div>
        </div>
    )
}
