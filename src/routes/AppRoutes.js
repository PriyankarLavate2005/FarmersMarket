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
import PrivateCompenents from '../components/Privatecomponent.js';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateCompenents />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<h1>Logout here</h1>} />
          <Route path='/cropInfo' element={<CropInfo />} />

        </Route>
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
