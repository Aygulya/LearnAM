import React from 'react'
import { Link } from 'react-router-dom'
import "./Day.css"

import ButtonNP from '../buttonNP'
import Header from '../Header';
const Day9 = () =>{

    return(
        <>
                            <Header currentDay={9} /> 
        <div className= "allDay">
           
<ButtonNP currentDay={9}/>
        </div>
        </>
    )
}

export default Day9;
