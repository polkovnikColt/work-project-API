import React from 'react';
import api from '../../../images/api.jpg';
import OneNews from "./additional/oneNews";

const news = [{
    title: "Новина №1",
    photo: api,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Morbi non dolor purus. Nunc placerat, sapien vel suscipit pharetra, " +
        "lacus est pulvinar dui, nec congue nisi magna sed nisi. Nam vel pharetra lectus, " +
        "vitae volutpat lectus. Maecenas sed fringilla erat. Sed consequat feugiat eros et maximus. " +
        "Proin posuere augue ultrices dui convallis consequat. Etiam sagittis lorem eu vehicula consequat." +
        " Cras a suscipit massa. Duis ipsum massa, congue at nisl eu, bibendum aliquam diam.",
    date: new Date().toLocaleDateString()
},
    {
        title: "Новина №2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Morbi non dolor purus. Nunc placerat, sapien vel suscipit pharetra, " +
            "lacus est pulvinar dui, nec congue nisi magna sed nisi. Nam vel pharetra lectus, " +
            "vitae volutpat lectus. Maecenas sed fringilla erat. Sed consequat feugiat eros et maximus. " +
            "Proin posuere augue ultrices dui convallis consequat. Etiam sagittis lorem eu vehicula consequat." +
            " Cras a suscipit massa. Duis ipsum massa, congue at nisl eu, bibendum aliquam diam.",
        date: new Date().toLocaleDateString()
    },{
        title: "Новина №3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Morbi non dolor purus. Nunc placerat, sapien vel suscipit pharetra, " +
            "lacus est pulvinar dui, nec congue nisi magna sed nisi. Nam vel pharetra lectus, " +
            "vitae volutpat lectus. Maecenas sed fringilla erat. Sed consequat feugiat eros et maximus. " +
            "Proin posuere augue ultrices dui convallis consequat. Etiam sagittis lorem eu vehicula consequat." +
            " Cras a suscipit massa. Duis ipsum massa, congue at nisl eu, bibendum aliquam diam.",
        date: new Date().toLocaleDateString()
    },{
        title: "Новина №4",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Morbi non dolor purus. Nunc placerat, sapien vel suscipit pharetra, " +
            "lacus est pulvinar dui, nec congue nisi magna sed nisi. Nam vel pharetra lectus, " +
            "vitae volutpat lectus. Maecenas sed fringilla erat. Sed consequat feugiat eros et maximus. " +
            "Proin posuere augue ultrices dui convallis consequat. Etiam sagittis lorem eu vehicula consequat." +
            " Cras a suscipit massa. Duis ipsum massa, congue at nisl eu, bibendum aliquam diam.",
        date: new Date().toLocaleDateString()
    }]

//TODO create carousel for photos
export default function NewsPage() {
    return (
        <div className="col-lg-8 col-md-8 custom-col-sm-12 p-md-2 p-lg-2 mx-auto news-block">
            <div className="row">
                {news.map(item => <OneNews news={item}/>)}
            </div>
        </div>
    )
}
