import React, {useState, useEffect} from 'react';
import MainLink from "./MainLink";
import '../mainPageStyles.scss'
import {cleanup} from "@testing-library/react";

let mainLinks = ["Пейзажна алея", "Десятинна церква", "Головний проект", "Додатковий проект"];

export default function MainPageNav({setProjectByName}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return function cleanup(){
            // window.removeEventListener('resize');
        }
    })

    if (open) {
        return (
            <nav className="navbar bg-main w-100 my-2">
                    <div
                        onClick={() => setOpen(prevState => !prevState)}
                        className="burger-menu ">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                <div className="mr-auto">
                    {mainLinks.map(item =>
                        <MainLink
                            setProjectByName={setProjectByName}
                            key={item}
                            title={item}
                            open={true}
                        />)}
                </div>
            </nav>
        )
    }

    return (
        <nav
            className="navbar bg-main w-100 my-2">
            {width > 500 ?
                <div className="row w-100">
                    {mainLinks.map(item =>
                        <MainLink
                        key={Math.random()}
                        title={item}
                        setProjectByName = {setProjectByName}
                        open={false}/>)}
                </div>
                :
                    <div
                        onClick={() => setOpen(prevState => !prevState)}
                        className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
            }
        </nav>
    )
}