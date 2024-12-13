import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CropInfo from '../CropInfo/CropInfo';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Farmers' Market</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cropInfo">Crop Info</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/login" className="btn btn-login">Login</Link>
        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
