import React from 'react';
import {Link} from "react-router-dom";

export default function MainLink({title, open,setProjectByName}) {
    if (open) {
        return (
            <div>
                <Link
                    onClick={() => setProjectByName(title)}
                    className="custom-link">
                    {title}
                </Link>
            </div>
        )
    }
    return (
        <>
            <Link
                onClick={() => setProjectByName(title)}
                className="custom-link ">
                {title}
            </Link>
            <span className="mx-2 nav-slash">/</span>
        </>

    )
}