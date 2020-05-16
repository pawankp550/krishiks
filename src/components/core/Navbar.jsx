import React, { useState } from 'react';
import './css/navbar.scss';

export default function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false)

    const toggleMenu = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <nav className='navbar'>
            <div className="navbar-start">
                <div className='navbar-logo'>
                    LOGO
                </div>
            </div>

            <div className="navbar-end">
                <div className='navbar-shop navbar-desktop-option'>
                    SHOP
                </div>
                <div className='navbar-user navbar-desktop-option'>
                    USER
                </div>
                <div className='navbar-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 43 51" fill="none">
                        <g id="Group">
                            <path id="Vector" d="M42.9892 44.0853L39.9703 11.2012C39.9056 10.4712 39.2695 9.9184 38.5255 9.9184H32.3152C32.229 4.43252 27.5928 0 21.9 0C16.2072 0 11.571 4.43252 11.4848 9.9184H5.27444C4.51971 9.9184 3.89437 10.4712 3.82968 11.2012L0.81077 44.0853C0.81077 44.127 0.799988 44.1687 0.799988 44.2104C0.799988 47.9546 4.3472 51 8.71384 51H35.0861C39.4528 51 43 47.9546 43 44.2104C43 44.1687 43 44.127 42.9892 44.0853ZM21.9 2.81595C25.9863 2.81595 29.3179 5.9865 29.4041 9.9184H14.3959C14.4821 5.9865 17.8137 2.81595 21.9 2.81595ZM35.0861 48.184H8.71384C5.97526 48.184 3.7542 46.4319 3.71108 44.273L6.6006 12.7448H11.474V17.0209C11.474 17.8031 12.1209 18.4288 12.9295 18.4288C13.7382 18.4288 14.3851 17.8031 14.3851 17.0209V12.7448H29.4041V17.0209C29.4041 17.8031 30.051 18.4288 30.8597 18.4288C31.6683 18.4288 32.3152 17.8031 32.3152 17.0209V12.7448H37.1886L40.0889 44.273C40.0458 46.4319 37.8139 48.184 35.0861 48.184Z"/>
                        </g>
                    </svg>
                    <span className="navbar-cart-total">0</span>
                </div>

                <div className='navbar-burger-icon' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 90 89" fill="none">
                        <path d="M84.2309 15.9742H5.76932C2.58223 15.9742 0 13.4207 0 10.2692C0 7.11767 2.58223 4.56396 5.76932 4.56396H84.2309C87.4178 4.56396 90 7.1175 90 10.2692C90 13.4209 87.4178 15.9742 84.2309 15.9742Z" />
                        <path d="M51.9231 50.2051H5.76932C2.58223 50.2051 0 47.6514 0 44.4999C0 41.3484 2.58223 38.7947 5.76932 38.7947H51.9231C55.1101 38.7947 57.6925 41.3482 57.6925 44.4999C57.6925 47.6516 55.1101 50.2051 51.9231 50.2051Z" />
                        <path d="M84.2309 84.4361H5.76932C2.58223 84.4361 0 81.8824 0 78.7308C0 75.5793 2.58223 73.0256 5.76932 73.0256H84.2309C87.4178 73.0256 90 75.5792 90 78.7308C90 81.8824 87.4178 84.4361 84.2309 84.4361Z"/>
                    </svg>
                </div>
            </div>

            { menuToggle ? 
                (<div className='navbar-mobile-menu animate__animated animate__fadeIn'>
                    <div className='navbar-close' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 365.696 365.696" width="20">
                        <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/>
                    </svg>

                    </div>
                    <div className='navbar-shop animate__animated animate__fadeInUp'>
                        SHOP
                    </div>
                    <div className='navbar-user animate__animated animate__fadeInUp'>
                        USER
                    </div>
            </div>) : null }
        </nav>
    )
}
