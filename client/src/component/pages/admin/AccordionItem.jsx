import React from "react";
import {Accordion, Button, Card} from "react-bootstrap";

export default function AccordionItem({props}) {

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={props.index}
                    className="accordion-title"
                >
                    {props.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {props.body}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )

}