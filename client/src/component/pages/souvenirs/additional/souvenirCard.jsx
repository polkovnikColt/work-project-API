import React from 'react';
import {Card} from 'react-bootstrap';
import '../sovenirsStyles.scss'

export default function SouvenirCard({souvenir}){
    return (
        <Card
            className ="my-3 mx-1 souvenir">
            <Card.Img src={souvenir.photos[0]} className = "souvenir-img" />
            <Card.Body>
                <Card.Title>{souvenir.name}</Card.Title>
                <Card.Text>
                    {souvenir.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}