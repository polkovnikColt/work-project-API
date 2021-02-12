import React from 'react';
import {Link} from 'react-router-dom';

export default function MainPageNav(){
    return (
        <nav className="navbar">
            <Link className="custom-link mx-3">Пейзажна алея</Link>
            <Link className="custom-link mx-3">Десятинна церква</Link>
            <Link className="custom-link mx-3">Головний проект</Link>
        </nav>
    )
}