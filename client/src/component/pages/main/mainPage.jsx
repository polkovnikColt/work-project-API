import React, {useState, useEffect} from 'react'
import MainPageCarousel from "./additional/Carousel";
import MainPageNav from "./additional/MainPageNav";


export default function MainPage() {

    useEffect(() => {

    }, [])

    return (
        <div className="col-lg-9 col-md-9 col-sm-12 p-0">
            <div className="row w-100 mx-auto">
                <MainPageCarousel/>
            </div>
            <hr className="m-5"/>
            {/*<div className="row m-5 text-justify main-text">*/}
            {/*    Ми - українська громадська організація, яка була створена з метою об’єднання численних громадських рухів*/}
            {/*    та*/}
            {/*    ініціатив. Її головне завдання — це захист та збереження історичної та культурної спадщини та природного*/}
            {/*    середовища. У вересні 2012 року організація здобула державну реєстрацію та діє на підставі Статуту.*/}
            {/*</div>*/}
            <div className="row m-3 bg-light flex-nowrap">
                    <MainPageNav/>
            </div>
        </div>
)
}