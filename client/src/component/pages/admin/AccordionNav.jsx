import React from "react";
import {Accordion, Button, Card, InputGroup,FormControl} from "react-bootstrap";
import './adminPageStyles.scss'

export default function AccordionNav(){
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="0"
                        className ="accordion-title"
                    >
                        Додадити новину
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Назва"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Текст новини</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="1"
                        className ="accordion-title"
                    >
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}