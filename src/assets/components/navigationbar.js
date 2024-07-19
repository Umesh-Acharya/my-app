import React from 'react';
import logo from '../img/logo.png';

function NavigationBar() {
    return (
        <div className='nav-bar'>

            <header>
                <a href="#">
                    <img src={logo} alt="Starbuck" className="logo" />
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
        </div>
    )

}

export default NavigationBar