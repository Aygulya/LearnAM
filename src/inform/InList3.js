import React from "react";
import i3 from './../components/assets/information/getDoc1.jpg'
import i4 from './../components/assets/information/getDoc2.jpg'
import Header from "../components/Header";
import ButtonNP from "../components/buttonNP";
import Panel from "./Panel";
const GetDocs = ()=>{
    return(
        <>
                |<Header/> 
                <Panel/>                        
                <div className= "allDay pan">
            <p className="textDay8">
                <img src={i3}/>
                <img src={i4}/>
            </p>
            </div>
            </>
    )
}
export default GetDocs