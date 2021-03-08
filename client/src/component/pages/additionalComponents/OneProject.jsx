import React from 'react';
import Carousel from "./Carousel";

export default function OneProject({photos, content, links}) {
    return (
        <div className="one-project">
            {photos.length > 1 ?
                <Carousel
                    className="mx-auto"
                    photos={photos}
                    interval={null}/>
                : <div className="container-width">
                    <img
                        className="responsive-width mx-auto mt-2 "
                        src={photos[0]}
                        alt="photo"/>
                </div>}
            <div
                className="card-body
                    bg-light
                    text-justify
                    px-3 pb-3 mx-auto
                    responsive-font-width ">
                <p className="text-center font-weight-bold">{content.title}</p>
                {content.body}
            </div>
        </div>
    )
}