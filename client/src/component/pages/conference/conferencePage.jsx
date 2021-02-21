import React from 'react';
import OneProject from "../additionalComponents/OneProject";
import kiev1 from '../../../images/kiev1 .jpg';
import kiev2 from '../../../images/kiev2.jpg';

const conferences = [{photos:[kiev1,kiev2,kiev1],content:{title:"Конференція №1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
            " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
            " deserunt mollit anim id est laborum."
    }},{photos:[kiev1],content:{title:"Конференція №2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
            " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
            " deserunt mollit anim id est laborum."
    }},{photos:[kiev2,kiev1],content:{title:"Конференція №3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
            " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
            " deserunt mollit anim id est laborum."
    }}]

export default function ConferencePage(){
    return(
        <div className="col-lg-9 col-md-9 col-sm-12 p-0">
            <div className="row w-100 m-0">
            {conferences.map(item =>
                <div className="mx-auto"><OneProject
                            key ={item}
                            photos={item.photos}
                            content={item.content}
                /></div> )}
            </div>
        </div>
    )
}