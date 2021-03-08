import React, {useState} from 'react';
import "./leftSidebar.scss";
import left from '../../images/icons/iconmonstr-arrow-25.svg';
import right from '../../images/icons/iconmonstr-arrow-64.svg';
import NavLink from "./additional/NavLink";
import {useDimension} from "../../hooks/useDimension";
import {getLinks} from "./additional/service";

//TODO create animation of sliding
export default function LeftSidebar() {

    const width = useDimension(window.innerWidth);
    const [visible, setVisible] = useState(false);
    const [arrow, setArrow] = useState(false);

    const handleOpen = () => {
        setVisible(prev => !prev);
        setArrow(prev => !prev);
    }

    return (
        <>
            <div
                style={{
                    display: visible || width > 765 ? "inherit" : "none",
                    "min-height": window.innerHeight + "px"
                }}
                className={visible ?
                    " bar bg-light text-center box-shadow" :
                    "col-3 bg-light text-center box-shadow"}>
                <div
                    className="title py-3">
                    Розділи
                    <div
                        style ={{"font-weight" : "none"}}
                        className="my-auto">
                        {getLinks().map((item, i) =>
                            <NavLink item={item} key={i}/>
                        )}
                    </div>
                </div>
            </div>
            {width < 765 ? <div>
                <div style={{"top": window.innerHeight / 2 + "px"}}
                     className={visible ? "close-button" : "open-button"}
                     onClick={handleOpen}>
                    <img src={arrow ? right : left} alt=""/>
                </div>
            </div> : null}
        </>
    )
}