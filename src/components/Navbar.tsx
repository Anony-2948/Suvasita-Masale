import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || !isHeroPage
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left Menu Items */}
          <div className="flex items-center space-x-12">
            <NavLink to="/" isScrolled={isScrolled} isHeroPage={isHeroPage}>HOME</NavLink>
            <NavLink to="/products" isScrolled={isScrolled} isHeroPage={isHeroPage}>PRODUCTS</NavLink>

          </div>
          
          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center justify-center">
              <a href="https://postimages.org/" target="_blank" rel="noreferrer">
                <img 
                  src="/images/Logo.png" 
                  alt="Logo"
                  className="h-24 transition-all duration-500"
                />
              </a>
            </Link>
          </div>
          
          {/* Right Menu Items */}
          <div className="flex items-center space-x-12">
            <NavLink to="/about" isScrolled={isScrolled} isHeroPage={isHeroPage}>ABOUT US</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled} isHeroPage={isHeroPage}>CONTACT</NavLink>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          {/* Mobile Logo (Centered) */}
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center justify-center">
              <a href="https://postimages.org/" target="_blank" rel="noreferrer">
                <img 
                  src="https://i.postimg.cc/TP7VDzwq/Logo.png" 
                  alt="Logo"
                  className="h-16 transition-all duration-500"
                />
              </a>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className={`h-8 w-8 ${isScrolled || !isHeroPage ? 'text-[#52372E]' : 'text-white'}`} />
              ) : (
                <Menu className={`h-8 w-8 ${isScrolled || !isHeroPage ? 'text-[#52372E]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/">HOME</MobileNavLink>
              <MobileNavLink to="/products">PRODUCTS</MobileNavLink>
              <MobileNavLink to="/AboutUs">ABOUT US</MobileNavLink>
              <MobileNavLink to="/contact">CONTACT</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isScrolled, isHeroPage }) => (
  <Link
    to={to}
    className={`relative group ${
      isScrolled || !isHeroPage ? 'text-[#52372E]' : 'text-[#52372E]'
    } text-2xl font-bold uppercase hover:text-red-700 transition-colors duration-300`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-700 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-xl font-bold uppercase text-[#52372E] hover:text-red-700 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
