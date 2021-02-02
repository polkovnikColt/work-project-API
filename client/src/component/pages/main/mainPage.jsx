import React, {useState, useEffect} from 'react'
import MainPageCarousel from "./Carousel";


export default function MainPage() {

    useEffect(() => {

    }, [])

    return (
        <div className="col-9 p-0">
            <div className="row mx-0">
                <MainPageCarousel/>
            </div>
            <hr className="mx-5"/>
            <div className="row m-5 text-justify main-text">
                Ми - українська громадська організація, яка була створена з метою об’єднання численних громадських рухів та
                ініціатив. Її головне завдання — це захист та збереження історичної та культурної спадщини та природного
                середовища. У вересні 2012 року організація здобула державну реєстрацію та діє на підставі Статуту.
            </div>
        </div>
    )
}