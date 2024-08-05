// import React from "react";
// import i26 from './../components/assets/information/hot1.jpg'
// import i27 from './../components/assets/information/hot2.jpg'
// import img11 from "./../components/assets/day2/11.mp4";
// import img12 from "./../components/assets/day2/12.mp4";
// import img13 from "./../components/assets/day2/13.mp4";
// import FlipBook from "./FlipBook";
// const AllInformation = ()=>{
//     return(
//         <div className= "allDay">
//             <p className="textDay8">
//                 <img src={i26}/>
//                 <img src={i27}/>
//             </p>
//             <h2>РАБОЧИЙ КАБИНЕТ</h2>
//             <p className='textDay8'>
//                 <video width="600" controls>
//                     <source src={img11} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </p>
//             <h2>ДЕПОЗИТ</h2>
//             <p className='textDay8'>
//                 <video width="600" controls>
//                     <source src={img12} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </p>
//             <h2>ВЫВОД</h2>
//             <p className='textDay8'>
//                 <video width="600" controls>
//                     <source src={img13} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </p>
//             <FlipBook/>
//             </div>
//     )
// }
// export default AllInformation
import React from "react";
import i26 from './../components/assets/information/hot1.jpg';
import i27 from './../components/assets/information/hot2.jpg';
import img11 from "./../components/assets/day2/11.mp4";
import img12 from "./../components/assets/day2/12.mp4";
import img13 from "./../components/assets/day2/13.mp4";
import FlipBook from "./FlipBook";
import FlipBook2 from "./FlipBook2";
import Header from "../components/Header";
import Panel from "./Panel";
const AllInformation = ({ currentInformation }) => {
    return (
        <>
                        |<Header/> 
                        <Panel/>                        
                        <div className= "allDay pan">
            <p className="textDay8">
                <img src={i26} alt="Information Image 1" />
                <img src={i27} alt="Information Image 2" />
            </p>
            <h2>РАБОЧИЙ КАБИНЕТ</h2>
            <p className='textDay8'>
                <video width="600" controls>
                    <source src={img11} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </p>
            <h2>ДЕПОЗИТ</h2>
            <p className='textDay8'>
                <video width="600" controls>
                    <source src={img12} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </p>
            <h2>ВЫВОД</h2>
            <p className='textDay8'>
                <video width="600" controls>
                    <source src={img13} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </p>
            <FlipBook />
            <FlipBook2/>
        </div>
        </>
    );
}

export default AllInformation;
