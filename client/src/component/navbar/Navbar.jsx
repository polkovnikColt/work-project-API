import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbarStyles.scss';
import logo from '../../images/logo crop.png';
import ModalWindow from "./Modal";
import {Navbar, Nav} from "react-bootstrap";
import "./navbarStyles.scss";


export default function NavigationBar() {

    return (
        <Navbar variant="dark" className="nav-styles flex-nowrap m-0">
            <img src={logo} alt="logo" />
            <Nav className="mr-auto">
                <span className="text-center title-text m-0 px-1">
                    ГО «Андрі́ївсько-Пейза́жна Ініціати́ва»
                </span>
            </Nav>
            <ModalWindow/>
        </Navbar>

    )
}