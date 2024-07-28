import React from 'react'
import "./Day.css"

import ButtonNP from '../buttonNP'
import Header from '../Header';
const Day10 = () =>{

    return(
        <>
                            <Header currentDay={10} /> 
        <div className= "allDay">

            <ButtonNP currentDay={10}/>
        </div>
        </>
    )
}

export default Day10;
