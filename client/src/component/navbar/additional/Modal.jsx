import React, {useState} from 'react';
import {Modal,Button} from "react-bootstrap";
import "../navbarStyles.scss";
import {login} from "./service";


export default function ModalWindow() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const logAndClose = async () => {
        // const serverToken = await login({email: email, password: password});
        setShow(false);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}>
                Вхід
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вхід</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Логін</label>
                            <input onChange={(e) => setEmail(e.target.value)}
                                   type="email"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Пароль</label>
                            <input onChange={(e) => setPassword(e.target.value)}
                                   type="password"
                                   className="form-control"
                                   id="exampleInputPassword1"/>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={logAndClose}>
                        Увійти
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}