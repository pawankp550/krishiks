import React from 'react'
import './css/errorBox.scss'

export default function ErrorBox({error}) {
    return (
        <div className='error-slide animate__animated animate__fadeInDown'>
            <span className="error-exclamation">!</span> {error}
        </div>
    )
}
