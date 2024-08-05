
// import React from 'react';
// import './learnStyles.css';
// import { useNavigate, Link } from 'react-router-dom';

// function getCurrentDay() {
//     const startDate = new Date('2024-07-25'); 
//     const today = new Date();
//     const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
//     const weekendsPassed = Math.floor((daysPassed + startDate.getDay()) / 7) * 2;
    
//     console.log("Start Date:", startDate);
//     console.log("Today's Date:", today);
//     console.log("Days Passed:", daysPassed);
//     console.log("Weekends Passed:", weekendsPassed);

//     return Math.max(1, daysPassed - weekendsPassed + 1);
// }

// function LearningProgress() {
//     const navigate = useNavigate();
//     const totalDays = 8;
//     const currentDay = getCurrentDay();
//     console.log("currentDay:", currentDay)
//     const daysLeft = Math.max(0, totalDays - currentDay);
//     const passedDays = totalDays - daysLeft;

//     const goToLearn = () => {
//         navigate(`/prosmotr/day${currentDay}`);
//     };

//     const letters = ['P', 'a', 'y', 's', 'P', 'r', 'o','знатоки'].map((letter, index) => (index < currentDay ? letter : '_'));

//     return (
//         <>
//             <div className="learning-progress">
//                 <p className='progress'>День: {currentDay}</p>
//                 <p className='progress'>Осталось дней: {daysLeft}</p>
//             </div>
//             <div className="progress-bar">
//                 <p className='letters'> {letters.join(' ')}</p>
//             </div>
//             <button onClick={goToLearn} className='butGoToLearn' disabled={currentDay >= totalDays}>
//                 <p className='letters'>Перейти к текущему уроку</p>
//             </button>
//             {/* {currentDay === 5 && (
//                 <Link to='https://forms.gle/bsLABmywyXgZLegH6' className='butGoToLearn'>
//                     <p className='letters'>Перейти к тесту 5-го дня</p>
//                 </Link>
//             )} */}
//             {/* {currentDay === 10 && (
//                 <Link to='https://forms.gle/your-test-url-for-day-10' className='butGoToLearn'>
//                     <p className='letters'>Перейти к тесту 10-го дня</p>
//                 </Link>
//             )} */}
//             {/* {currentDay !== 5 && currentDay !== 10 && (
//                 <button onClick={() => navigate('/test')} className='butGoToLearn'>
//                     <p className='letters'>Перейти к тесту</p>
//             //     </button> */}
//             {/* // )} */}
//         </>
//     );
// }

// export default LearningProgress;
import React from 'react';
import './learnStyles.css';
import { useNavigate, Link } from 'react-router-dom';

function getCurrentDay() {
    const startDate = new Date('2024-07-25'); 
    const today = new Date();
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const weekendsPassed = Math.floor((daysPassed + startDate.getDay()) / 7) * 2;

    console.log("Start Date:", startDate);
    console.log("Today's Date:", today);
    console.log("Days Passed:", daysPassed);
    console.log("Weekends Passed:", weekendsPassed);

    return Math.max(1, daysPassed - weekendsPassed + 1);
}

function LearningProgress() {
    const navigate = useNavigate();
    const totalDays = 8;
    const currentDay = getCurrentDay();
    console.log("Current Day:", currentDay);
    const daysLeft = Math.max(0, totalDays - currentDay);
    const passedDays = totalDays - daysLeft;

    const goToLearn = () => {
        navigate(`/prosmotr/day${currentDay}`);
    };

    const letters = ['P', 'a', 'y', 's', 'P', 'r', 'o','знатоки'].map((letter, index) => (index < currentDay ? letter : '_'));

    return (
        <>
            <div className="learning-progress">
                <p className='progress'>День: {currentDay}</p>
                <p className='progress'>Осталось дней: {daysLeft}</p>
            </div>
            <div className="progress-bar">
                <p className='letters'> {letters.join(' ')}</p>
            </div>
            <button onClick={goToLearn} className='butGoToLearn' disabled={currentDay > totalDays}>
                <p className='letters'>Перейти к текущему уроку</p>
            </button>
            {/* Uncomment and adjust as needed */}
            {/* {currentDay === 5 && (
                <Link to='https://forms.gle/bsLABmywyXgZLegH6' className='butGoToLearn'>
                    <p className='letters'>Перейти к тесту 5-го дня</p>
                </Link>
            )}
            {currentDay === 10 && (
                <Link to='https://forms.gle/your-test-url-for-day-10' className='butGoToLearn'>
                    <p className='letters'>Перейти к тесту 10-го дня</p>
                </Link>
            )}
            {currentDay !== 5 && currentDay !== 10 && (
                <button onClick={() => navigate('/test')} className='butGoToLearn'>
                    <p className='letters'>Перейти к тесту</p>
                </button>
            )} */}
        </>
    );
}

export default LearningProgress;
