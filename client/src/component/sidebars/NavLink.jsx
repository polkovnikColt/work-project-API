import React, {useState} from 'react';
import {Link} from "react-router-dom";
import arrowDown from "../../images/arrow-down.svg";
import arrowUp from "../../images/up-arrow.svg";
import './leftSidebar.scss'

export default function NavLink({item}) {

    return (
        <Link to= {item.href}
              className="link p-1 mx-1 ">
              {item.title}
            <hr className="mx-5 my-2 "/>
        </Link>
    )
}