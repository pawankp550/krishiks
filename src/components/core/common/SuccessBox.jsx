import React from 'react'
import './css/successBox.scss'

export default function SuccessBox({error}) {
    return (
        <div className='success-slide animate__animated animate__fadeInDown'>
            <span className="error-exclamation">!</span> {error}
        </div>
    )
}
