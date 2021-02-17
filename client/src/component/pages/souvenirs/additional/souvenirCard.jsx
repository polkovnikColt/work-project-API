import React from 'react';
import {Card,Button} from 'react-bootstrap';

export default function SouvenirCard({souvenir}){
    return (
        <Card
            className ="my-3 border-secondary mx-auto"
            style={{ width: '20rem' }}>
            <Card.Img variant="top" src={souvenir.photos[0]} />
            <Card.Body>
                <Card.Title>{souvenir.name}</Card.Title>
                <Card.Text>
                    {souvenir.description}
                </Card.Text>
                <Button variant="primary">Купити</Button>
            </Card.Body>
        </Card>
    )
}