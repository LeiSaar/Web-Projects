import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import Hotel from './hotel/Hotel';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path = "/" element= {<Home/>}></Route>
         <Route path = "/hotels" element = {<List/>}></Route>
         <Route path = "/hotels/:id" element= {<Hotel/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;