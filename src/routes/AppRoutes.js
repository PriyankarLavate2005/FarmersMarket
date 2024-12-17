import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword.js';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login.js'
import SignUp from '../pages/Signup.js';
import Navbar from '../components/Navbar';
import CropInfo from '../CropInfo/CropInfo.js';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/cropInfo' element={<CropInfo />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
