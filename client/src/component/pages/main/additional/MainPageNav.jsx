import React, {useState} from 'react';
import MainLink from "./MainLink";
import '../mainPageStyles.scss'
import {useDimension} from "../../../../hooks/useDimension";
import {getLinks} from "./service";

export default function MainPageNav({setProjectByName}) {

    const width = useDimension(window.innerWidth);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <div className="navbar bg-main w-100 my-2">
            {width > 500 || open ?
                <>
                    <div className={width > 500 ? "row w-100" : "mr-auto"}>
                        {getLinks().map((item, index) =>
                            <MainLink
                                key={index}
                                title={item}
                                setProjectByName={setProjectByName}
                                open={open}/>
                        )}
                    </div>
                    {width < 500 ? <div
                        onClick={handleOpen}
                        className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div> : null}
                </>
                :
                <div
                    onClick={handleOpen}
                    className="burger-menu">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            }
        </div>
    )
}