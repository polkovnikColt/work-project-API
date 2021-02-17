import React from 'react';
import {Table} from "react-bootstrap";

const peoples = [{name:"name",surname:"surname",}]

export default function AboutPage(){

    return(
        <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="row w-100 m-0">
                <div className="m-2 text-justify main-text py-4">
                    Ми - українська громадська організація, яка була створена з метою об’єднання численних громадських рухів та
                    ініціатив. Її головне завдання — це захист та збереження історичної та культурної спадщини та природного
                    середовища. У вересні 2012 року організація здобула державну реєстрацію та діє на підставі Статуту.
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Посада</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    )
}