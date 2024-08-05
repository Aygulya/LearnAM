
import React from 'react';
import FlipPage from 'react-flip-page';
import './FlipBook.css';
import i1 from '../components/assets/information/flip2/i1.jpg';
import i2 from '../components/assets/information/flip2/i2.jpg';
import i3 from '../components/assets/information/flip2/i3.jpg';
import i4 from '../components/assets/information/flip2/i4.jpg';
import i5 from '../components/assets/information/flip2/i5.jpg';
import i6 from '../components/assets/information/flip2/i6.jpg';
import i7 from '../components/assets/information/flip2/i7.jpg';
import i8 from '../components/assets/information/flip2/i8.jpg';
// import i9 from '../components/assets/information/flip1/i9.jpg';
// import i10 from '../components/assets/information/flip1/i10.jpg';
// import i11 from '../components/assets/information/flip1/i11.jpg';
// import i12 from '../components/assets/information/flip1/i12.jpg';
// import i13 from '../components/assets/information/flip1/i13.jpg';
// import i14 from '../components/assets/information/flip1/i14.jpg';
// import i15 from '../components/assets/information/flip1/i15.jpg';
// import i16 from '../components/assets/information/flip1/i16.jpg';
// import i17 from '../components/assets/information/flip1/i17.jpg';
// import i18 from '../components/assets/information/flip1/i18.jpg';

const pages = [
    { image: i1 },
    { image: i2 },
    { image: i3 },
    { image: i4 },
    { image: i5 },
    { image: i6 },
    { image: i7 },
    { image: i8 },
    // { image: i9 },
    // { image: i10 },
    // { image: i11 },
    // { image: i12 },
    // { image: i13 },
    // { image: i14 },
    // { image: i15 },
    // { image: i16 },
    // { image: i17 },
    // { image: i18 },
];

const FlipBook2 = () => {
    return (
        <div className="flip-book">
            <FlipPage
                orientation="horizontal"
                showHint
                responsive
                flipOnTouch
            >
                {pages.map((page, index) => (
                    <article key={index} className="page">
                        <img src={page.image} alt={`Page ${index + 1}`} />
                    </article>
                ))}
            </FlipPage>
        </div>
    );
};

export default FlipBook2;
