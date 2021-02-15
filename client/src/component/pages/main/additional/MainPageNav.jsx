import React, {useState, useEffect} from 'react';
import MainLink from "./MainLink";
import '../mainPageStyles.scss'

let mainLinks = ["Пейзажна алея", "Десятинна церква", "Головний проект","Додатковий проект"];

export default function MainPageNav() {

    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
    })

    if (open) {
        return (
            <nav className="navbar bg-main w-100">

                <div className="ml-auto">
                    <div
                        onClick={() => setOpen(prevState => !prevState)}
                        className=" mx-auto">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    {mainLinks.map(item => <MainLink key ={item} title={item} open={false}/>)}
                </div>
            </nav>
        )
    }

    return (
        <nav className="navbar bg-main w-100">
            {width > 500 ?
                <div>
                    {mainLinks.map(item => <MainLink key = {item} title={item} open={true}/>)}
                </div>
                :
                <div
                    onClick={() => setOpen(prevState => !prevState)}
                    className="ml-auto">
                    <div className="line"> </div>
                    <div className="line"> </div>
                    <div className="line"> </div>
                </div>
            }
        </nav>
    )
}