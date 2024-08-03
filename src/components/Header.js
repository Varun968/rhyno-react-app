import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Rhyno EV</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="src\pages\Home.js">Home</Link></li>
          <li><Link to="src\pages\AboutUs.js">About us</Link></li>
          <li className="dropdown">
            <Link to="src\components\Products.js">Products</Link>
            <div className="dropdown-content">
              <Link to="src\pages\Product1.js">SE03 Lite</Link>
              <Link to="src\pages\Product2.js">SE03</Link>
              <Link to="src\pages\Product3.js">SE03 Max</Link>
              <Link to="src\pages\Compare.js">Compare</Link>
            </div>
          </li>
          <li><Link to="src\pages\ContactUs.css">Contact us</Link></li>
          <li><Link to="src\pages\Prebook.js">Pre-book now</Link></li>
          <li><Link to="src\pages\Rentals.js">Rentals</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
