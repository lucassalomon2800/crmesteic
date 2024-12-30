import React, { useEffect, useState } from 'react';
import './styles/global.css';
import {BroswerRouter ,Router,Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
    return (
   
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}> 
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/appointments' element={<Appointments />}>
          </Route>
        </Routes>
        <Footer />
   </BrowserRouter>
  
    );
}

export default App;
