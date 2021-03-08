import React, {useEffect, useState} from 'react';
import '../newsPageStyles.scss';
import {cut} from './service';
import up from '../../../../images/icons/up-arrow.svg';
import down from '../../../../images/icons/arrow-down.svg';
import newspaper from '../../../../images/icons/newspaper.svg';
import {useDimension} from "../../../../hooks/useDimension";
import Photo from './Photo';

export default function OneNews({news}) {

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState(false);
    const width = useDimension(window.innerWidth);

    const handleOpen = e => {
        e.stopPropagation();
        setOpen(prev => !prev);
    }

    const handleSetPreview = e => {
        e.stopPropagation();
        setPreview(prev => !prev);
    }

    return (
        <div style={{"height": open || preview || width < 600 ? "auto" : "280px"}}
             className="card m-2 text-justify one-news">
            <div className="card-header news-title ">
                <img src={newspaper} alt="newspaper" className="news-logo"/>
                {news.title}
                <h6 className="ml-auto p-2 float-right date">{news.date}</h6>
            </div>
            <div className="card-body">
                {news.photo ?
                    <Photo
                        preview={preview}
                        photo={news.photo}
                        handleSetPreview={handleSetPreview}
                        width={width}
                    />
                    : null}
                <p onClick={handleOpen}
                   className="card-text p-1">
                    {open || preview || width < 600 ? news.body : cut(news.body, news.photo)}</p>
            </div>
            {preview || width < 600 ? null :
                <div
                onClick={handleOpen}
                className="w-100">
                <div className="mx-auto w-25px">
                    <img
                        src={open ? up : down}
                        alt="arrow"
                        className="arrow"/>
                </div>
            </div>}
        </div>
    )
}