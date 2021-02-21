import React from 'react';
import {Table} from "react-bootstrap";
import TableItem from "./additional/TableItem";
import telegram from '../../../images/socialmedia/telegram.png';
import facebook from '../../../images/socialmedia/facebook.svg';
import instagram from '../../../images/socialmedia/instagram.svg';

const people = [
    {name:"name",surname:"surname",work:"work"},
    {name:"name",surname:"surname",work:"work"},
    {name:"name",surname:"surname",work:"work"},
    {name:"name",surname:"surname",work:"work"},
    {name:"name",surname:"surname",work:"work"}]

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
                    <tr className="table-title">
                        <th>#</th>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Посада</th>
                    </tr>
                    </thead>
                    <tbody>
                    {people.map(
                        (person,index) =>
                            <TableItem person={person} index={index+1}/>
                            )}
                    </tbody>
                </Table>
            </div>
            <nav className="navbar bg-main w-100 my-5 justify-content-center">
                <img src={telegram} alt="media" className="media-icon mx-4 onPress-animation"/>
                <img src={facebook} alt="media" className="media-icon mx-4 onPress-animation"/>
                <img src={instagram} alt="media" className="media-icon mx-4 onPress-animation"/>
            </nav>
        </div>
    )
}