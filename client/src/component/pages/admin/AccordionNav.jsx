import React from "react";
import {Accordion, Button, Card, Form} from "react-bootstrap";
import './adminPageStyles.scss'
import NewsUploader from "./additional/NewsUploader";
import AdminUploader from "./additional/AdminUploader";

const newsToDelete = [{title: "Title #1"}, {title: "Title #2"}, {title: "Title #3"}];

export default function AccordionNav() {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="0"
                        className="accordion-title"
                    >
                        Додадити новину
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <NewsUploader type={'upload'}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="1"
                        className="accordion-title"
                    >
                        Видалити новину
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Виберіть новину по назві</Form.Label>
                            <Form.Control as="select">
                                {newsToDelete.map(item => <option>{item.title}</option>)}
                            </Form.Control>
                            <Button
                                className="my-2"
                                variant="outline-secondary">
                                Видалити
                            </Button>
                        </Form.Group>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="2"
                        className="accordion-title"
                    >
                        Оновити новину
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <NewsUploader type={'update'}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="3"
                        className="accordion-title"
                    >
                        Створити адміністратора
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                       <AdminUploader type={"create"}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="button"
                        eventKey="4"
                        className="accordion-title"
                    >
                        Оновити дані адміністратора
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <AdminUploader type={"update"}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}