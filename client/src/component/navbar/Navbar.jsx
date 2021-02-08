import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbarStyles.scss';
import logo from '../../images/logo crop.png';
import ModalWindow from "./Modal";
import {Navbar, Nav} from "react-bootstrap";


let links =
    [{title: "Головна", href: "/", subtitle: []},
        {title: "Новини", href: "/news", subtitle: []},
        {title: "Про нас", href: "/about", subtitle: []},
        {title: "Контакти", href: "/contact", subtitle: []},
        {title: "Міжнародна співпраця", href: "/world", subtitle: []},
        {title: "Конференцій, семінари", href: "/seminars", subtitle: []}]

export default function NavigationBar() {

    return (
        <Navbar variant="dark" className="nav-styles flex-nowrap">
            <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
            <Nav className="mr-auto">
                {/*{links.map(item =>*/}
                {/*    <Link to={item.href}*/}
                {/*          className="m-1 nav-link">*/}
                {/*          {item.title}*/}
                {/*    </Link>)}*/}
            </Nav>
            <ModalWindow/>
        </Navbar>

    )
}