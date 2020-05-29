import React from 'react'
import './css/successBox.scss'

export default function SuccessBox({error}) {
    return (
        <div className='error-slide animate__animated animate__fadeInDown'>
            <span className="error-exclamation">!</span> {error}
        </div>
    )
}
