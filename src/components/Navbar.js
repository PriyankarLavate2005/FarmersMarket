import React, { use } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CropInfo from '../CropInfo/CropInfo';
import { Button } from 'bootstrap';
import PrivateCompenents from './Privatecomponent';
import Logout from '../pages/Logout';
const Navbar = () => {
  const navigate=useNavigate()
 
    const auth = localStorage.getItem('user');
 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cropInfo">Crop Info</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
        auth?<li><Link to='/logout' element={<Logout/>}>Logout</Link></li>
        :
       <>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li></>
     }
      </ul>
      <div className="navbar-buttons">
         {/* <button onClick={Logout}>Logout</button> */}
        </div>
    </nav>
  );
};

export default Navbar;
