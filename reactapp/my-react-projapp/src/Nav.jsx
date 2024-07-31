import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Nav.css';

// Provide the correct relative path for the small icon image
// import smallIconImage from '.public/images/bookbliss_logo.jpeg';

const Nav = () => {
  return (
    <nav id='nav'>
      <h2 id="A1">
      <img src={'/images/bookbliss_logo.jpeg'} alt="Example" />
      </h2>
      <h3 id="A"><Link to="/">Home</Link></h3>
      <h3 id="B"><Link to="/Aboutpg">About</Link></h3>
      <h3 id="E"><Link to="/ContactUs">Contact Us</Link></h3>
      <h3 id="I"><Link to="/Product">Product</Link></h3>
      <h3 id="F"><Link to="/Loginpg">Login</Link></h3>
      <h3 id="G"><Link to="/AdminLogin">Admin</Link></h3>
      <h3 id="H"><Link to="/Formpg"><FaShoppingCart color="white" size={30} /></Link></h3>
    </nav>
  );
};

export default Nav;
