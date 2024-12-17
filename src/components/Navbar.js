import React, { use } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CropInfo from '../CropInfo/CropInfo';
import { Button } from 'bootstrap';
const Navbar = () => {
  const navigate=useNavigate()
  function Logout(){
    navigate('/')
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Farmers' Market</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cropInfo">Crop Info</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
      <div className="navbar-buttons">
         <button onClick={Logout}>Logout</button>
        </div>
    </nav>
  );
};

export default Navbar;
