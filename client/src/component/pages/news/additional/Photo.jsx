import React from 'react';
import zoomIn from "../../../../images/icons/zoom-in.svg";
import zoomOut from "../../../../images/socialmedia/magnifying-glass.svg"

export default function Photo({photo,handleSetPreview,preview,width}) {
    return (
        <div>
            <img
            src={photo}
            alt="preview"
            className={preview || width < 600 ? "w-100" : "preview p-2 position-relative"}/>
            {width > 600 ? <span
                onClick={handleSetPreview}
                className={preview ? "badge-photo-open" : "badge-photo-close"}>
                <img src={preview ? zoomOut : zoomIn} alt=""/>
            </span> : null}
        </div>
    );
}