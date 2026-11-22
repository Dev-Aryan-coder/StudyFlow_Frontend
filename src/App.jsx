import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopMarquee from './components/TopMarquee/TopMarquee';
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        {/* Custom Animated Cursor */}
        <CustomCursor />

        {/* Top Moving Announcement Marquee */}
        <TopMarquee />

        {/* Sticky Top Navbar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
