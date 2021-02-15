import React from 'react';
import {Link} from "react-router-dom";

export default function MainLink({title,open}) {
    return (
        <>
            <Link className="custom-link m-2">{title}</Link>
            {open ? <span className="mx-1">/</span> : null}
        </>
    )
}