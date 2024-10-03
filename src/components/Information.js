import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Prosmotr = () => {
    

    return (
        <>
  <Header currentDay={0}/>
        <div className='days'>
        <Link to='/information/great' className='day'>
                <p>
                    <h3>Важная информация о трудоустройстве</h3>
                </p>
            </Link>
            <Link to='/information/limits' className='day'>
                <p>
                    <h3>Лимиты банков в системе</h3>
                </p>
            </Link>
            <Link to='/information/listGrades' className='day'>
                <p>
                    <h3>Список уровней</h3>
                </p>
            </Link>
            <Link to='/information/getDocs' className='day'>
                <p>
                    <h3>Как получить документы в приложениях банков?</h3>
                </p>
            </Link>
            <Link to='/information/photoShop' className='day'>
                <p>
                    <h3>❗️ФОТОШОП❗️</h3>
                </p>
            </Link>

            <Link to='/information/errors' className='day'>
                <p>
                    <h3>❗️ВИДЫ ОШИБОК❗️</h3>
                </p>
            </Link>
            <Link to='/information/interFace' className='day'>
                <p>
                    <h3>❗️Интерфейс приложения❗️</h3>
                </p>
            </Link>
            {/* <Link to='/prosmotr/day8' className='day'>
                <p>
                    <h3>День восьмой</h3>
                    <span className='bold'>Тема: крипта</span>
                </p>
            </Link> */}
            {/* <Link to='/prosmotr/day9' className='day'>
                <p>
                    <h3>День 9</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link>
            <Link to='/prosmotr/day10' className='day'>
                <p>
                    <h3>День 10</h3>
                    <span className='bold'>Тема: </span>
                </p>
            </Link> */} 

        </div>
        </>
    );
}

export default Prosmotr;
