import React, {useState, useEffect} from 'react'
import "./leftSidebar.scss"
import NavLink from "./NavLink";

let links =
    [{title: "Головна",href:"/", subtitle: []},
    {title: "Новини",href:"/news", subtitle: []},
        {title: "Про нас",href:"/about",  subtitle: []},
        {title: "Контакти",href:"/contact",  subtitle: []},
        {title: "Міжнародна співпраця",href:"/world",  subtitle: []},
        {title: "Конференцій, семінари",href:"/seminars",  subtitle: []}]

export default function LeftSidebar() {

    const [width, setWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(width);
    }, [width]);

    if (width >= 620 || visible) {
        return (
            <div style={{"min-height": window.innerHeight - 65 + "px"}}
                className="col-3 bg-light text-center box-shadow">
                <div
                    className="title py-3">
                    Розділи
                </div>
                {links.map(item =>
                    <NavLink item={item} key={item}/>
                )}
            </div>
        )
    }

    return (
        <div className="col-1" onClick={() => {
            setVisible(prev => !prev)
        }}>
            <div className="open-button">
                <span className="position-relative">+</span>
            </div>
        </div>
    )
}