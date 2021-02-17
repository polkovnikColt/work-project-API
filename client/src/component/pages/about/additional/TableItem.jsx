import React from 'react';
import '../aboutPageStyles.scss'

export default function TableItem({person,index}){
    return(
        <tr className="table-item">
            <td>{index}</td>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.work}</td>
        </tr>
    )
}