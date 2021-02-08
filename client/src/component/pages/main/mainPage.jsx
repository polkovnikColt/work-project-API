import React, {useState, useEffect} from 'react'
import MainPageCarousel from "./Carousel";


export default function MainPage() {

    useEffect(() => {

    }, [])

    return (
        <div className="col-lg-9 col-md-8 col-sm-12 p-0">
            <p className="main-text text-center"> ГО «Андрі́ївсько-Пейза́жна Ініціати́ва»</p>
            <div className="row w-100 mx-auto">
                <MainPageCarousel/>
            </div>
            <hr className="m-5"/>
            <div className="row m-3 text-justify main-text">
                Ми - українська громадська організація, яка була створена з метою об’єднання численних громадських рухів та
                ініціатив. Її головне завдання — це захист та збереження історичної та культурної спадщини та природного
                середовища. У вересні 2012 року організація здобула державну реєстрацію та діє на підставі Статуту.
            </div>
        </div>
    )
}