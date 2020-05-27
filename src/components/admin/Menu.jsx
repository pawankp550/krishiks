import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <div className='menu-item'>
            <NavLink to='/'>App</NavLink>
            </div>
            <div className='menu-item'>
                Orders
            </div>
            <div className='menu-item'>
                 <NavLink to='/admin/dashboard/categories'> Categories </NavLink>
            </div>
            <div className='menu-item'>
                <NavLink to='/admin/dashboard/sellers'> Sellers </NavLink>
            </div>
            <div className='menu-item'>
                <NavLink to='/admin/dashboard/createproduct'> Create Product</NavLink>
            </div>
            <div className='menu-item'>
                Manage
                Products
            </div>
        </div>
    )
}
