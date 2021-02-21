import React, {useState, useRef} from 'react';
import './mainPageStyles.scss';
import MainPageNav from "./additional/MainPageNav";
import OneProject from "../additionalComponents/OneProject";
import previewVideo from "../../../images/Autumn - 18420.mp4";
import {getProjectByName, getProjects} from "./additional/service";


export default function MainPage() {

    const video = useRef(null);
    const [paused, setPaused] = useState(false);
    const [project, setProject] = useState(getProjects()[0]);


    const play = (e) => {
        e.stopPropagation();
        setTimeout(() => { video.current.play()},150)

    }

    const setProjectByName = (name) => {
        setProject(getProjectByName(name));
    }

    const pause = (e) => {
        e.stopPropagation();
        setTimeout(() => {
            setPaused(prev => !prev)
            paused ? video.current.pause() : play(e);
        },150);
    }

    return (
        <div className="col-lg-9 col-md-9 col-sm-12 p-0">
            <div className="row w-100 mx-auto">
                <div className="mx-auto my-2 container-width row">
                    <video className="responsive-width onPress-animation"
                           ref={video}
                           onClick={e => pause(e)}
                           src={previewVideo}
                           type={"video/mp4"}
                    >
                    </video>
                </div>
            </div>
            <hr className="my-sm-2 mx-sm-4 m-md-3 m-lg-3"/>
            <div className="row m-3 flex-nowrap">
                <MainPageNav setProjectByName={setProjectByName}/>
            </div>
            <OneProject photos={project.photos}
                        content={project.content}/>
        </div>
    )
}