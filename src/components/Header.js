
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
// // // import './Header.css';
// // // import ButtonNP from './buttonNP'; // Импортируем компонент ButtonNP
// // // import logo from '../components/assets/image/logo.png';
// // // function Header({ currentDay, currentInformation }) {
// // //   return (
// // //     <div className="header">
// // //               <div className="leftH">
// // //         <img src={logo} alt="logo" className="firstLogo" />
// // //        <p className='firstPayH'>PaysPro</p> 
// // //         </div>
// // //         <div className='rightH'>
// // //         <Link to="/mainScreen" className="home-link">
// // //         <FontAwesomeIcon icon={faHome} />
// // //       </Link>
// // //       <Link to="/prosmotr" className="home-link">
// // //       <FontAwesomeIcon icon={faCalendar} />
// // //       </Link>
// // //       <ButtonNP currentDay={currentDay} iconOnly={true} /> {/* Добавляем кнопки навигации */}

// // //         </div>
// // //     </div>
// // //   );
// // // }

// // // export default Header;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
// // import './Header.css';
// // import ButtonNP from './buttonNP'; // Ensure the import path is correct
// // import logo from '../components/assets/image/logo.png';

// // function Header({ currentDay, currentInformation }) {
// //   return (
// //     <div className="header">
// //       <div className="leftH">
// //         <img src={logo} alt="logo" className="firstLogo" />
// //         <p className='firstPayH'>PaysPro</p>
// //       </div>
// //       <div className='rightH'>
// //         <Link to="/mainScreen" className="home-link">
// //           <FontAwesomeIcon icon={faHome} />
// //         </Link>
// //         <Link to="/prosmotr" className="home-link">
// //           <FontAwesomeIcon icon={faCalendar} />
// //         </Link>
// //         <ButtonNP currentDay={currentDay} currentInformation={currentInformation} iconOnly={true} /> {/* Pass currentInformation */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
// import './Header.css';
// import ButtonNP from './buttonNP'; // Импортируем компонент ButtonNP
// import logo from '../components/assets/image/logo.png';

// function Header({ currentDay, currentInformation }) {
//   return (
//     <div className="header">
//       <div className="leftH">
//         <img src={logo} alt="logo" className="firstLogo" />
//         <p className='firstPayH'>PaysPro</p> 
//       </div>
//       <div className='rightH'>
//         <Link to="/mainScreen" className="home-link">
//           <FontAwesomeIcon icon={faHome} />
//         </Link>
//         <Link to="/prosmotr" className="home-link">
//           <FontAwesomeIcon icon={faCalendar} />
//         </Link>
//         <ButtonNP currentDay={currentDay} currentInformation={currentInformation} iconOnly={true} /> {/* Добавляем кнопки навигации */}
//       </div>
//     </div>
//   );
// }

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import ButtonNP from './buttonNP'; // Ensure the import path is correct
import logo from '../components/assets/image/logo.png';

function Header({ currentDay, currentInformation }) {
  return (
    <div className="header">
      <div className="leftH">
        <img src={logo} alt="logo" className="firstLogo" />
        <p className='firstPayH'>PaysPro</p> 
      </div>
      <div className='rightH'>
        <Link to="/mainScreen" className="home-link">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/prosmotr" className="home-link">
          <FontAwesomeIcon icon={faCalendar} />
        </Link>
        <ButtonNP currentDay={currentDay} currentInformation={currentInformation} iconOnly={true} /> {/* Добавляем кнопки навигации */}
      </div>
    </div>
  );
}

export default Header;
