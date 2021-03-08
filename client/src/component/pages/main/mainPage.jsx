import React, {useState} from 'react';
import './mainPageStyles.scss';
import MainPageNav from "./additional/MainPageNav";
import OneProject from "../additionalComponents/OneProject";
import {getProjectByName, getProjects} from "./additional/service";
import Video from "./additional/Video";
import BorderWrapper from "../additionalComponents/BorderWrapper";


export default function MainPage() {

    const [project, setProject] = useState(getProjects()[0]);

    const setProjectByName = (name) => {
        setProject(getProjectByName(name));
    }

    return (
        <div className="col-lg-9 col-md-9 col-sm-12 p-0">
            <div className="row w-100 m-0">
                <div className="mx-auto my-2 container-width row">
                    <BorderWrapper component={Video}/>
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