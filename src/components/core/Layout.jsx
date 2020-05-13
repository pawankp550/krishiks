import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import './css/layout.scss'

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <div className="layout">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
