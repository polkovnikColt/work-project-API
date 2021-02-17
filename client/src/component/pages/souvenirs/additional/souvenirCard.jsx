import React from 'react';
import {Card} from 'react-bootstrap';

export default function SouvenirCard({souvenir}){
    return (
        <Card
            className ="my-3 mx-auto souvenir">
            <Card.Img variant="top" src={souvenir.photos[0]} />
            <Card.Body>
                <Card.Title>{souvenir.name}</Card.Title>
                <Card.Text>
                    {souvenir.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}