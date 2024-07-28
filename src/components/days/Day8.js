import React from 'react'

import Header from '../Header';
import "./Day.css"
import ButtonNP from '../buttonNP'
const Day8 = () =>{

    return(
      <>
                            <Header currentDay={8} /> 
        <div className= "allDay">

<ButtonNP currentDay={8}/>
        </div>
        </>
    )
}

export default Day8;
