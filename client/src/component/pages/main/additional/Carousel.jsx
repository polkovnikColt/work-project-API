import React, {useState} from 'react';
import '../mainPageStyles.scss';
import api from "../../../../images/api.jpg";
import kiev1 from '../../../../images/kiev1 .jpg'
import kiev2 from '../../../../images/kiev2.jpg'
import {Carousel} from "react-bootstrap";


const photos = [api, kiev1, kiev2];

export default function MainPageCarousel() {

    return (
        <Carousel className="carousel-width mx-auto my-2">
            <Carousel.Item interval={5000}>
                <img
                    className="d-block image-width"
                    src={api}
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block image-width"
                    src={kiev1}
                />
            </Carousel.Item><Carousel.Item interval={5000}>
            <img
                className="d-block image-width"
                src={kiev2}
            />
        </Carousel.Item>
        </Carousel>
    )
}