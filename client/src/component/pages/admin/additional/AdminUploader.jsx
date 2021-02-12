import React,{useState} from "react";
import {Button, Card, FormControl,Form, InputGroup} from "react-bootstrap";

const adminToUpdate = [{email: "Email #1"},{email: "Email #2"},{email: "Email #3"}]

export default function AdminUploader({type}) {

    const [admin,setAdmin] = useState({email:'', password:''});

    const handleSubmit= () => {
        console.log(`Login ${admin.email}, password ${admin.password}`);
        setAdmin({email:'', password:''})
    }

    return (
        <>
            <h6 className="text-uppercase text-center m-2">Логін</h6>
            {type === 'create' ?

                    <InputGroup>
                        <FormControl
                            onChange={e => setAdmin({...admin,email:e.target.value})}
                            onSubmit={e => {
                                e.preventDefault();
                            }}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value = {admin.email}
                        />
                    </InputGroup>
                :
                <Form.Control
                    onChange={e => setAdmin({...admin,email:e.target.value})}
                    as="select">
                    {adminToUpdate.map(item => <option>{item.email}</option>)}
                </Form.Control>}
            <h6 className="text-uppercase text-center m-2">Пароль</h6>
            <InputGroup>
                <FormControl
                    onChange={e => setAdmin({...admin,password:e.target.value})}
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value = {admin.password}
                />
            </InputGroup>
            <Button
                onClick={handleSubmit}
                variant="outline-secondary"
                className="my-2">
                Створити
            </Button>
        </>
    )
}