import React from 'react';
import '../main/mainPageStyles.scss';
import {Carousel} from "react-bootstrap";


export default function MainPageCarousel({interval,photos}) {

    return (
        <Carousel className="container-width mx-auto mt-2">
            {photos.map(item =>
                <Carousel.Item key = {item} interval={interval}>
                <img
                    className="d-block responsive-width"
                    src={item}
                />
            </Carousel.Item>)}
        </Carousel>
    )
}