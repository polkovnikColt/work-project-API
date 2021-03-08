import React from 'react';
import './additionalStyles.scss'

export default function BorderWrapper({component}){
    return (
        <div className="by-solid mx-auto">
            <div className="by-solid">
                {React.createElement(component,{...component.props})}
            </div>
        </div>
    )
}