import React from 'react';
import './css/navbar.scss';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-start">
                <div className='navbar-logo'>
                    LOGO
                </div>
            </div>

            <div className="navbar-end">
                <div className='navbar-shop'>
                    SHOP
                </div>
                <div className='navbar-user'>
                    USER
                </div>
                <div className='navbar-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 43 51" fill="none">
                        <g id="Group">
                        <path id="Vector" d="M42.9892 44.0853L39.9703 11.2012C39.9056 10.4712 39.2695 9.9184 38.5255 9.9184H32.3152C32.229 4.43252 27.5928 0 21.9 0C16.2072 0 11.571 4.43252 11.4848 9.9184H5.27444C4.51971 9.9184 3.89437 10.4712 3.82968 11.2012L0.81077 44.0853C0.81077 44.127 0.799988 44.1687 0.799988 44.2104C0.799988 47.9546 4.3472 51 8.71384 51H35.0861C39.4528 51 43 47.9546 43 44.2104C43 44.1687 43 44.127 42.9892 44.0853ZM21.9 2.81595C25.9863 2.81595 29.3179 5.9865 29.4041 9.9184H14.3959C14.4821 5.9865 17.8137 2.81595 21.9 2.81595ZM35.0861 48.184H8.71384C5.97526 48.184 3.7542 46.4319 3.71108 44.273L6.6006 12.7448H11.474V17.0209C11.474 17.8031 12.1209 18.4288 12.9295 18.4288C13.7382 18.4288 14.3851 17.8031 14.3851 17.0209V12.7448H29.4041V17.0209C29.4041 17.8031 30.051 18.4288 30.8597 18.4288C31.6683 18.4288 32.3152 17.8031 32.3152 17.0209V12.7448H37.1886L40.0889 44.273C40.0458 46.4319 37.8139 48.184 35.0861 48.184Z" fill="#535970"/>
                        </g>
                    </svg>
                    <span className="navbar-cart-total">0</span>
                </div>
            </div>
        </nav>
    )
}
