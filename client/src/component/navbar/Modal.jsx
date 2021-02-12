import React, {useState, useEffect} from 'react';
import {Modal, Button} from "react-bootstrap";
import "./navbarStyles.scss"

export default function ModalWindow() {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function handleResize(){
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize',handleResize);
    })

    return (
        <>
            { width < 400 ? <span>+</span>:

                <Button
                    className="button-font"
                    variant="outline-primary"
                    onClick={handleShow}>
                Вхід
            </Button>}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вхід</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Логін</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Пароль</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Увійти
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}