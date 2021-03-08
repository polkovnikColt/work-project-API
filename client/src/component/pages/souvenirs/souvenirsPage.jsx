import React from 'react';
import kiev1 from '../../../images/mockPhoto/kiev1 .jpg';
import kiev2 from '../../../images/mockPhoto/kiev2.jpg';
import SouvenirCard from "./additional/SouvenirCard";

const souvenirs = [{photos: [kiev1], name: "Сувенір №1", description: "Опис цього сувеніру"},
    {photos: [kiev2], name: "Сувенір №2", description: "Опис цього сувеніру"},
    {photos: [kiev1], name: "Сувенір №3", description: "Опис цього сувеніру"},
    {photos: [kiev2], name: "Сувенір №4", description: "Опис цього сувеніру"},]

export default function SouvenirsPage() {
    return (
        <div className="col-lg-9 col-md-9 col-sm-12 w-100 mx-auto">
            <div className="row mx-auto">
                    {souvenirs.map(item => <SouvenirCard souvenir={item}/>)}
            </div>
        </div>
    )
}