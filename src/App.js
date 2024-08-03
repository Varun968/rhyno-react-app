import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Compare from './pages/Compare';
import Prebook from './pages/Prebook';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product1" element={<Product1  />} />
                    <Route path="/product2" element={<Product2  />} />
                    <Route path="/product3" element={<Product3  />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/prebook" element={<Prebook />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/rentals" element={<Rentals />} />
                </Routes>
                <Footer />
            </Router>
    );
}

export default App;
