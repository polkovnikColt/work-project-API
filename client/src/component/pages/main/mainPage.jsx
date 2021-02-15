import React, {useState,useRef} from 'react';
import './mainPageStyles.scss'
import MainPageNav from "./additional/MainPageNav";
import OneProject from "./additional/OneProject";
import previewVideo from "../../../images/Autumn - 18420.mp4";
import kiev from "../../../images/kiev1 .jpg";
import kiev2 from "../../../images/kiev2.jpg";


export default function MainPage() {

     const video = useRef(null);
     const [paused,setPaused] = useState(false)

     const play = (e) => {
         e.stopPropagation();
         video.current.play()
     }

     const pause = (e) => {
         e.stopPropagation();
         setPaused(prev => !prev)
         paused ? video.current.pause() : play(e);
     }

    return (
        <div className="col-lg-9 col-md-9 col-sm-12 p-0">
            <div className="row w-100 mx-auto">
                <div className="mx-auto my-2 container-width">
                <video className="responsive-width"
                       ref = {video}
                       onMouseOver={e => play(e)}
                       onClick={e => pause(e)}
                       src={previewVideo}
                       type ={"video/mp4"}
                >
                </video>
                </div>
            </div>
            <hr className="my-sm-2 mx-sm-4 m-md-5 m-lg-5" />
            <div className="row m-3 bg-light flex-nowrap">
                    <MainPageNav/>
            </div>
            <OneProject photos={[kiev]}
                        content={{title:"Пейзажна алея",body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
                                " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
                                " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
                                " deserunt mollit anim id est laborum."}}/>
        </div>
)
}