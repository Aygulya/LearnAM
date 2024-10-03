// // // App.js
// // import React from 'react';
// // import './App.css';
// // import MainScreen from './components/MainScreen';
// // import LearningModule from './components/LearningModule';
// // import TestModule from './components/TestModule';
// // import Header from './components/Header';
// // import AdmPanel from './components/AdmPanel'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed BrowserRoute to BrowserRouter
// // import TextEditor from './components/TextEditor';
// // import Day1 from './components/days/Day1';
// // import Day3 from './components/days/Day3';
// // import Day4 from './components/days/Day4';
// // import Day5 from './components/days/Day5';
// // import Day6 from './components/days/Day6';
// // import Day7 from './components/days/Day7';
// // import Day8 from './components/days/Day8';
// // import Day9 from './components/days/Day9';
// // import Day10 from './components/days/Day10';
// // import Day2 from './components/days/Day2';
// // import FirstPage from './components/FirstPage';
// // import RegisterComponent from './components/login/Registration';
// // import LoginComponent from './components/login/LogIn';
// // import DeleteUser from './components/login/DeleteUser';
// // import UserManagement from './components/UserManagment';
// // import Ozhidaem from './components/Ozhidaem';
// // import Prosmotr from './components/ProsmDni';
// // import BookAnimation from './components/days/BookAnimation';
// // import Information from './components/Information'
// // import Limits from './inform/InList1';
// // import ListGrades from './inform/InList2';
// // import GetDocs from './inform/InList3';
// // import PhotoShop from './inform/InList4';
// // import Errors from './inform/InList5';
// // import AllInformation from './inform/InList6';
// // function App() {
// //   return (
// //     // <AuthProvider>
// //     <div className="App">
// //     <Routes>
// //           <Route path='/' element={<FirstPage/>}/>
// //           </Routes>
// //        {/* <Header />  */}

// //         <Routes>
// //           {/* <Route path='ozhidaem' element={<Ozhidaem/>}/>
// //           <Route path='registration' element={<RegisterComponent/>}/>
// //           <Route path='login' element={<LoginComponent/>}/> */}
          
// //           <Route path="/mainScreen" element={<MainScreen />} /> {/* Removed element prop */}
// //           <Route path="/learn" element={<LearningModule />} /> {/* Removed element prop */}
// //           <Route path="/test" element={<TestModule />} /> {/* Removed element prop */}
// //           {/* {/* <Route path='managment' element={<UserManagement/>}/> */}
// //        <Route path="/admPanel" element = {<AdmPanel/>}/>

// //       <Route path="/prosmotr" element={<Prosmotr />} />
// //       <Route path="/prosmotr/day1" element={<Day1 />} />
// //                     <Route path="/prosmotr/day2" element={<Day2 />} />
// //                     <Route path="/prosmotr/day3" element={<Day3 />} />
// //                     <Route path="/prosmotr/day4" element={<Day4 />} />
// //                     <Route path="/prosmotr/day5" element={<Day5 />} />
// //                     <Route path="/prosmotr/day6" element={<Day6 />} />
// //                     <Route path="/prosmotr/day7" element={<Day7 />} />
// //                     <Route path="/prosmotr/day8" element={<Day8 />} />
// //                     <Route path="/prosmotr/day9" element={<Day9 />} />
// //                     <Route path="/prosmotr/day10" element={<Day10 />} />
// // <Route path="/information" element={<Information/>}/>
// // <Route path="/information/limits" element {<Limits/>}/>
// // <Route path="/information/listGrades" element {<ListGrades/>}/>
// // <Route path="/information/getDocs" element {<GetDocs/>}/>
// // <Route path="/information/photoshop" element {<PhotoShop/>}/>
// // <Route path="/information/errors" element {<Errors/>}/>
// // <Route path="/information/interface" element {<AllInformation/>}/>
// //        <Route path='/book' element={<BookAnimation/>}/>

// //         </Routes>

// //     </div>
// //     // </AuthProvider>
// //   );
// // }

// // export default App;
// import React from 'react';
// import './App.css';
// import MainScreen from './components/MainScreen';
// import LearningModule from './components/LearningModule';
// import TestModule from './components/TestModule';
// import Header from './components/Header';
// import AdmPanel from './components/AdmPanel';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import TextEditor from './components/TextEditor';
// import Day1 from './components/days/Day1';
// import Day3 from './components/days/Day3';
// import Day4 from './components/days/Day4';
// import Day5 from './components/days/Day5';
// import Day6 from './components/days/Day6';
// import Day7 from './components/days/Day7';
// import Day8 from './components/days/Day8';
// import Day9 from './components/days/Day9';
// import Day10 from './components/days/Day10';
// import Day2 from './components/days/Day2';
// import FirstPage from './components/FirstPage';
// import RegisterComponent from './components/login/Registration';
// import LoginComponent from './components/login/LogIn';
// import DeleteUser from './components/login/DeleteUser';
// import UserManagement from './components/UserManagment';
// import Ozhidaem from './components/Ozhidaem';
// import Prosmotr from './components/ProsmDni';
// import BookAnimation from './components/days/BookAnimation';
// import Information from './components/Information';
// import Limits from './inform/InList1';
// import ListGrades from './inform/InList2';
// import GetDocs from './inform/InList3';
// import PhotoShop from './inform/InList4';
// import Errors from './inform/InList5';
// import AllInformation from './inform/InList6';

// function App() {
//   return (
//     // <AuthProvider>
//     <div className="App">

//         <Routes>
//           <Route path='/' element={<FirstPage />} />
//           <Route path="/mainScreen" element={<MainScreen />} />
//           <Route path="/learn" element={<LearningModule />} />
//           <Route path="/test" element={<TestModule />} />
//           <Route path="/admPanel" element={<AdmPanel />} />
//           <Route path="/prosmotr" element={<Prosmotr />} />
//           <Route path="/prosmotr/day1" element={<Day1 />} />
//           <Route path="/prosmotr/day2" element={<Day2 />} />
//           <Route path="/prosmotr/day3" element={<Day3 />} />
//           <Route path="/prosmotr/day4" element={<Day4 />} />
//           <Route path="/prosmotr/day5" element={<Day5 />} />
//           <Route path="/prosmotr/day6" element={<Day6 />} />
//           <Route path="/prosmotr/day7" element={<Day7 />} />
//           <Route path="/prosmotr/day8" element={<Day8 />} />
//           <Route path="/prosmotr/day9" element={<Day9 />} />
//           <Route path="/prosmotr/day10" element={<Day10 />} />
//           <Route path="/information" element={<Information />} />
//           <Route path="/information/limits" element={<Limits />} />
//           <Route path="/information/listGrades" element={<ListGrades />} />
//           <Route path="/information/getDocs" element={<GetDocs />} />
//           <Route path="/information/photoshop" element={<PhotoShop />} />
//           <Route path="/information/errors" element={<Errors  currentInformation="errors"/>} />
//           <Route path="/information/interface" element={<AllInformation  currentInformation ="interface"/>} />
//           <Route path='/book' element={<BookAnimation />} />
//         </Routes>

//     </div>
//     // </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import LearningModule from './components/LearningModule';
import TestModule from './components/TestModule';
import Header from './components/Header';
import AdmPanel from './components/AdmPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import TextEditor from './components/TextEditor';
import Day1 from './components/days/Day1';
import Day3 from './components/days/Day3';
import Day4 from './components/days/Day4';
import Day5 from './components/days/Day5';
import Day6 from './components/days/Day6';
import Day7 from './components/days/Day7';
import Day8 from './components/days/Day8';
import Day9 from './components/days/Day9';
import Day10 from './components/days/Day10';
import Day2 from './components/days/Day2';
import FirstPage from './components/FirstPage';
import RegisterComponent from './components/login/Registration';
import LoginComponent from './components/login/LogIn';
import DeleteUser from './components/login/DeleteUser';
import UserManagement from './components/UserManagment';
import Ozhidaem from './components/Ozhidaem';
import Prosmotr from './components/ProsmDni';
import BookAnimation from './components/days/BookAnimation';
import Information from './components/Information';
import Limits from './inform/InList1';
import Great from './inform/InList7';
import ListGrades from './inform/InList2';
import GetDocs from './inform/InList3';
import PhotoShop from './inform/InList4';
import Errors from './inform/InList5';
import AllInformation from './inform/InList6';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path="/mainScreen" element={<MainScreen />} />
          <Route path="/learn" element={<LearningModule />} />
          <Route path="/test" element={<TestModule />} />
          <Route path="/admPanel" element={<AdmPanel />} />
          <Route path="/prosmotr" element={<Prosmotr />} />
          <Route path="/prosmotr/day1" element={<Day1 />} />
          <Route path="/prosmotr/day2" element={<Day2 />} />
          <Route path="/prosmotr/day3" element={<Day3 />} />
          <Route path="/prosmotr/day4" element={<Day4 />} />
          <Route path="/prosmotr/day5" element={<Day5 />} />
          <Route path="/prosmotr/day6" element={<Day6 />} />
          <Route path="/prosmotr/day7" element={<Day7 />} />
          <Route path="/prosmotr/day8" element={<Day8 />} />
          <Route path="/prosmotr/day9" element={<Day9 />} />
          <Route path="/prosmotr/day10" element={<Day10 />} />
          <Route path="/information" element={<Information />} />
          <Route path="/information/limits" element={<Limits />} />
          <Route path="/information/great" element={<Great />} />
          <Route path="/information/listGrades" element={<ListGrades />} />
          <Route path="/information/getDocs" element={<GetDocs />} />
          <Route path="/information/photoshop" element={<PhotoShop />} />
          <Route path="/information/errors" element={<Errors />} />
          <Route path="/information/interface" element={<AllInformation/>} />
          <Route path='/book' element={<BookAnimation />} />
        </Routes>
    </div>
  );
}

export default App;
