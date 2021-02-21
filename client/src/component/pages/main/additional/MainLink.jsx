import React from 'react';

export default function MainLink({title, open,setProjectByName}) {
    return (
        <>
            <div
                onClick={() => setProjectByName(title)}
                className="custom-link mx-1">
                {title}
            </div>
            {open ? null : <span className="mx-2 nav-slash">/</span>}
        </>

    )
}