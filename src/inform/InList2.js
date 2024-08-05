import React from "react";
import i2 from './../components/assets/information/listGrades.jpg'
import Header from "../components/Header";
import ButtonNP from "../components/buttonNP";
import Panel from "./Panel";
const ListGrades = ()=>{
    return(
        <>
        |<Header/> 
        <Panel/>                        
        <div className= "allDay pan">

            <p className="textDay8">
                <img src={i2}/>
            </p>
            </div>
            </>
    )
}
export default ListGrades;
