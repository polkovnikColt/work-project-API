import React from 'react';
import './mainPageStyles.scss'
import {Carousel} from "react-bootstrap";

export default function CarouselItem({photo,interval}){
    console.log(photo,interval)
    return(
        <Carousel.Item interval={interval}>
            <img
                className="d-block image-width"
                src={photo}
                alt={photo}
            />
        </Carousel.Item>
    )
}