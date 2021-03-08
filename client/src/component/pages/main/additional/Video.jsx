import React, {useRef, useState} from 'react';
import previewVideo from "../../../../images/mockPhoto/Autumn - 18420.mp4";

export default function Video(){
    const video = useRef(null);
    const [paused, setPaused] = useState(true);

    const play = (e) => {
        e.stopPropagation();
        setTimeout(() => { video.current.play()},150)

    }

    const pause = (e) => {
        e.stopPropagation();
        setTimeout(() => {
            setPaused(prev => !prev)
            paused ?  play(e) : video.current.pause() ;
        },150);
    }

    return(
     <div className="video mx-auto">
             <div
                 style={{"display": paused ? "inherit" : "none"}}
                 className="button"/>
             <video className="responsive-width onPress-animation"
                    ref={video}
                    onClick={e => pause(e)}
                    src={previewVideo}
                    type={"video/mp4"}
             >
             </video>
     </div>
    )
}