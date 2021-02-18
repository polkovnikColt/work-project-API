import React from 'react';
import {Link} from "react-router-dom";
import '../leftSidebar.scss'

export default function NavLink({item}) {

    return (
        <Link to={item.href}
              className="link p-1 mx-1 ">
            {item.title}
            <hr className="mx-3 my-2 a"/>
        </Link>
    )
}