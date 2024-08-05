import React from "react";
import i17 from './../components/assets/information/er1.jpg'
import i18 from './../components/assets/information/er2.jpg'
import i19 from './../components/assets/information/er3.jpg'
import i20 from './../components/assets/information/er4.jpg'
import i21 from './../components/assets/information/er5.jpg'
import i22 from './../components/assets/information/er6.jpg'
import i23 from './../components/assets/information/er7.jpg'
import i24 from './../components/assets/information/er8.jpg'
import i25 from './../components/assets/information/er9.jpg'
import Header from "../components/Header";
import Panel from "./Panel";
const Errors = ({ currentInformation })=>{
    return(
        <>
                        |<Header/> 
                        <Panel/>                        
                        <div className= "allDay pan">
            <p className="textDay8">
                <img src={i17}/>
                <img src={i18}/>
                <img src={i19}/>
                <img src={i20}/>
                <img src={i21}/>
                <img src={i22}/>
                <img src={i23}/>
                <img src={i24}/>
                <img src={i25}/>
            </p>
            </div>
            </>
    )
}
export default Errors