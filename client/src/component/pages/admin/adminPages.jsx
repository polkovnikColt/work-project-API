import React from 'react';
import AccordionNav from "./AccordionNav";
import './adminPageStyles.scss'

export default function AdminPage(){
    return(
      <div className="col-lg-8 col-md-8 col-sm-12 mx-auto my-3 border-primary">
          <h5 className="text-center text-uppercase m-2">Можливі дії</h5>
        <AccordionNav/>
      </div>
    )
}