import React from "react";
import i5 from './../components/assets/information/pSh1.jpg'
import i6 from './../components/assets/information/pSh2.jpg'
import i7 from './../components/assets/information/pSh3.jpg'
import i8 from './../components/assets/information/pSh4.jpg'
import i9 from './../components/assets/information/pSh5.jpg'
import i10 from './../components/assets/information/pSh6.jpg'
import i11 from './../components/assets/information/pSh7.jpg'
import i12 from './../components/assets/information/pSh8.jpg'
import i13 from './../components/assets/information/pSh9.jpg'
import i14 from './../components/assets/information/pSh10.jpg'
import i15 from './../components/assets/information/pSh11.jpg'
import i16 from './../components/assets/information/pSh12.jpg'
import Header from "../components/Header";
import Panel from "./Panel";
const PhotoShop = ()=>{
    return(
        <>
                  |<Header/> 
                  <Panel/>                        
                  <div className= "allDay pan">
            <p className="textDay8">
                <img src={i5}/>
                <img src={i6}/>
                <img src={i7}/>
                <img src={i8}/>
                <img src={i9}/>
                <img src={i10}/>
                <img src={i11}/>
                <img src={i12}/>
                <img src={i13}/>
                <img src={i14}/>
                <img src={i15}/>
                <img src={i16}/>
            </p>
            </div>
            </>
    )
}
export default PhotoShop