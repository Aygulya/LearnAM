import React from 'react';
import './Panel.css'
import { Link, useNavigate } from 'react-router-dom';
import Day1 from './days/Day1';
import Day2 from './days/Day2';
import Day3 from './days/Day3';
import Day4 from './days/Day4';
import Day5 from './days/Day5';
import Day6 from './days/Day6';
import Day7 from './days/Day7';
import Day8 from './days/Day8';
import Day9 from './days/Day9';
import Day10 from './days/Day10';
import StartDay from './startDay';

function AdmPanel(){
const navigate= useNavigate()
    const goToEditor = ()=>{
        navigate('days')
    }
    const datDostup = ()=>{
        navigate('/managment')
    }
    return(
        <>
        <div className='panelsButtons'>
            панель
            <StartDay/>
            {/* <button>Dat dostyp ko dny</button> */}
            <button onClick={datDostup}>Dat dostup ko vsei programme</button>
            <button>Dobavit test</button>
{/* <button>Redaktirovat test</button>
<button>Proverit test</button> */}
{/* <button>Dobavit studentov</button>
            <button>Sdelat adminom</button> */}

        </div>
        <div className='days'>
            <Link to='day1' className='day'>
            {/* <Day1/> */}
            <p>
                <h3>Вступление</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day2' className='day'>
            {/* <Day2/>  */}
            <p>
                <h3>День 1</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day3' className='day'>
            {/* <Day3/> */}
            <p>
                <h3>День 2</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            {/* <Link to='day4' className='day'>

            <p>
                <h3>День 4</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day5' className='day'>

            <p>
                <h3>День 5</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day6' className='day'>

            <p>
                <h3>День 6</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day7' className='day'>

            <p>
                <h3>День 7</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day8' className='day'>

            <p>
                <h3>День 8</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day9' className='day'>

            <p>
                <h3>День 9</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link>
            <Link to='day10' className='day'>

            <p>
                <h3>День 10</h3>
                <span className='bold'>Тема: </span>
            </p>
            </Link> */}
        </div> 
</>
    )
}

export default AdmPanel;