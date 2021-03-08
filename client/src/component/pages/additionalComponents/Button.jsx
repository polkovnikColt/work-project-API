import React from "react";
import './additionalStyles.scss';

export default function Button({style,text}){
    return (
        <div className="button-primary">
            <span>{text}</span>
        </div>
    )
}