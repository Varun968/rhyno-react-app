import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="src/components/PrivacyPolicy.js">Privacy Policy</Link></li>
        <li><Link to="src/components/RefundPolicy.js">Refund Policy</Link></li>
        <li><Link to="src/components/WebsitePolicy.js">Website Policy</Link></li>
        <li><Link to="src/pages/ContactUs.js">Contact us</Link></li>
        <li><Link to="src/components/Products.js">Products</Link></li>
        <li><a href="https://in.linkedin.com/company/rhyno-wheels">Career</a></li>
        <li><a href="src/pages/Rentals.js">Rentals</a></li>
        <li><a href="https://www.instagram.com/rhyno.in/"><i className="fab fa-instagram"></i></a></li>
        <li><a href="https://in.linkedin.com/company/rhyno-wheels"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;


