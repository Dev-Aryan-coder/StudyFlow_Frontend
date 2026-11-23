import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';
import './Navbar.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled((prev) => {
            if (scrollY > 30) return true;
            if (scrollY < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <header className={`navbar-container ${isScrolled ? 'pill-navbar' : ''}`}>
        <div className="navbar-inner">
          
          {/* Brand Logo: Redirects to Home */}
          <Link 
            to="/" 
            onClick={closeMenu}
            className="flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer select-none text-decoration-none"
            title="StudyFlow Home"
          >
            <Logo size={22} color="#000000" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-black">StudyFlow</span>
          </Link>

          {/* Desktop Dynamic Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Features
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/contact-us" 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right Desktop CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-black px-3 py-1.5 transition-colors">
              Sign in
            </button>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm">
              Get started
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div className={`navbar-mobile-menu md:hidden ${isScrolled ? 'pill-mobile-menu' : ''}`}>
            <NavLink 
              to="/about-us" 
              onClick={closeMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={closeMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/features" 
              onClick={closeMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              Features
            </NavLink>
            <NavLink 
              to="/pricing" 
              onClick={closeMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/contact-us" 
              onClick={closeMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              Contact Us
            </NavLink>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-2.5 pt-4 mt-2">
              <button 
                onClick={closeMenu}
                className="w-full text-center py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Sign in
              </button>
              <button 
                onClick={closeMenu}
                className="w-full text-center py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
