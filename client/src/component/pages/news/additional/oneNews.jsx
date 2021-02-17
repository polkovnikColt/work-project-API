import React, {useEffect, useState} from 'react';
import '../newsPageStyles.scss';
import {cut} from './newsService';
import up from '../../../../images/up-arrow.svg';
import down from '../../../../images/arrow-down.svg';
import newspaper from '../../../../images/newspaper.svg';

export default function OneNews({news}) {

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
    });

    if (preview || width < 600) {
        return (
            <div onClick={() => setPreview(prev => !prev)}
                 className="card m-2 text-justify one-news">

                <div className="card-header news-title ">
                    <img src={newspaper} alt="newspaper" className="news-logo"/>
                    {news.title}
                    <h6 className="ml-auto p-1 float-right">
                        {news.date}
                    </h6>
                </div>
                <div className="card-body">
                    {news.photo ? <><img
                            src={news.photo}
                            alt="full"
                            className="w-100"/>
                            <span className="badge-photo-open">Зменшити</span></>
                        : null}
                    <p className="card-text">
                        {news.body}</p>
                </div>
            </div>
        )
    }

    return (
        <div style={{"height": open ? "auto" : "280px"}}
             className="card m-2 text-justify one-news"
             onClick={() => setOpen(prev => !prev)}>
            <div className="card-header news-title ">
                <img src={newspaper} alt="newspaper" className="news-logo"/>
                {news.title}
                <h6 className="ml-auto p-3 float-right">{news.date}</h6>
            </div>
            <div className="card-body">
                {news.photo ?
                    <div><img
                        onClick={(e) =>
                            setPreview(prev => {
                                e.stopPropagation();
                                return !prev;
                            })}
                        src={news.photo}
                        alt="preview"
                        className="preview p-2 position-relative"/>
                        <span className="badge-photo-close">Збільшити</span>
                    </div>
                    : null}
                <p className="card-text p-3">
                    {open ? news.body : cut(news.body, news.photo)}  </p>
            </div>
            <div className="w-100 ">
                <div className="mx-auto w-25px"><img
                    src={open ? up : down}
                    alt="arrow"
                    className="arrow"/>
                </div>
            </div>
        </div>
    )
}