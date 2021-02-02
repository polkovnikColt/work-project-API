import React, {useState} from 'react';
import './navbarStyles.scss';
import logo from '../../images/logo crop.png';

export default function Navbar() {

    return (
        <nav className="navbar nav-styles w-100 position-sticky">
            <div className="row justify-content-start">
            <img src={logo}
                 className="d-inline-block align-top mx-2" alt="" loading="lazy"/>
            <span className="navbar-brand my-auto mx-2 font-size" >
                ГО «Андрі́ївсько-Пейза́жна Ініціати́ва»
            </span>
            </div>
            <button className="btn btn-outline-primary px-3 mx-md-3
            text-uppercase mx-sm-auto">
                Вхід
            </button>
        </nav>
    )
}